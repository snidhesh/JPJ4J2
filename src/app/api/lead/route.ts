import { NextResponse } from 'next/server';
import { leadSchema, sanitizeUtm } from '@/lib/validation';
import { PROJECT_NAME, LOCATION_NAME } from '@/lib/constants';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  // Honeypot tripped — pretend success so bots get no signal.
  if (lead.website && lead.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Full intake URL, e.g. https://<crm-domain>/api/v1/public/intake/leads
  const endpoint = process.env.CRM_LEAD_ENDPOINT;

  // The CRM only stores name/phone/email/note — fold our extra provenance
  // (project, source, UTM, consent) into `note` so nothing is lost.
  const utm = sanitizeUtm(lead.utm);
  const note = [
    lead.message?.trim() || null,
    `Project: ${PROJECT_NAME}, ${LOCATION_NAME}`,
    `Source: ${lead.source}`,
    Object.keys(utm).length
      ? `UTM: ${Object.entries(utm).map(([k, v]) => `${k}=${v}`).join(', ')}`
      : null,
    `Consent: ${lead.consent ? 'granted' : 'no'}`,
  ]
    .filter(Boolean)
    .join('\n')
    .slice(0, 2000);

  // Matches the CRM intake contract: name, phone (E.164), email, note.
  const payload: Record<string, unknown> = {
    name: lead.fullName,
    phone: `${lead.countryCode}${lead.phone}`.replace(/\s+/g, ''),
    note,
  };
  if (lead.email) payload.email = lead.email.slice(0, 200);

  // No endpoint configured yet — accept so the form is testable pre-integration.
  // NB: never log the payload — it contains PII (name/email/phone).
  if (!endpoint) {
    console.warn('[lead] CRM_LEAD_ENDPOINT not set; lead accepted but not forwarded.');
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (process.env.CRM_LEAD_TOKEN) {
      headers.Authorization = `Bearer ${process.env.CRM_LEAD_TOKEN}`;
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      // Log status only — not the response body, which may echo PII.
      console.error('[lead] CRM rejected submission with status', res.status);
      return NextResponse.json(
        { ok: false, error: 'We could not submit your enquiry. Please try again or contact us directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    // Log the error type/message only — never the lead data.
    console.error('[lead] Failed to forward to CRM:', err instanceof Error ? err.message : 'unknown error');
    return NextResponse.json(
      { ok: false, error: 'We could not submit your enquiry. Please try again or contact us directly.' },
      { status: 502 },
    );
  }
}
