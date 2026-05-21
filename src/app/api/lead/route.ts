import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validation';
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

  const endpoint = process.env.CRM_LEAD_ENDPOINT;

  // Build a CRM-agnostic payload. Adjust field names here once the CRM contract is known.
  const payload = {
    project: PROJECT_NAME,
    location: LOCATION_NAME,
    fullName: lead.fullName,
    email: lead.email,
    phone: `${lead.countryCode}${lead.phone}`.replace(/\s+/g, ''),
    message: lead.message ?? '',
    consent: lead.consent,
    source: lead.source,
    utm: lead.utm ?? {},
    submittedAt: new Date().toISOString(),
  };

  // No endpoint configured yet — accept and log so the form is testable pre-integration.
  if (!endpoint) {
    console.warn('[lead] CRM_LEAD_ENDPOINT not set. Lead received but not forwarded:', payload);
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
      console.error('[lead] CRM responded with', res.status, await res.text().catch(() => ''));
      return NextResponse.json(
        { ok: false, error: 'We could not submit your enquiry. Please try again or contact us directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error('[lead] Failed to forward to CRM:', err);
    return NextResponse.json(
      { ok: false, error: 'We could not submit your enquiry. Please try again or contact us directly.' },
      { status: 502 },
    );
  }
}
