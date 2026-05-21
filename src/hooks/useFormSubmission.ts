'use client';

import { useState } from 'react';
import { extractUtmParams } from '@/lib/utils';
import type { LeadPayload } from '@/types';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function useFormSubmission() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function submit(payload: Omit<LeadPayload, 'utm'>) {
    setStatus('submitting');
    setErrorMessage('');
    try {
      const utm =
        typeof window !== 'undefined' ? extractUtmParams(window.location.search) : {};
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, utm }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      setStatus('success');
      return true;
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error && err.message !== 'Submission failed'
          ? err.message
          : 'We could not submit your enquiry. Please try again or contact us directly.',
      );
      return false;
    }
  }

  return { status, errorMessage, submit, reset: () => setStatus('idle') };
}
