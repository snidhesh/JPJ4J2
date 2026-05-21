import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format a phone number to a best-effort E.164 string. */
export function formatPhoneE164(countryCode: string, phone: string): string {
  const digits = phone.replace(/[^\d]/g, '');
  const cc = countryCode.replace(/[^\d]/g, '');
  if (!digits) return '';
  // If the phone already starts with the country code, don't double it.
  if (digits.startsWith(cc)) return `+${digits}`;
  return `+${cc}${digits.replace(/^0+/, '')}`;
}

/** Pull utm_* params from a URL search string into a flat object. */
export function extractUtmParams(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const utm: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    if (key.toLowerCase().startsWith('utm_')) utm[key] = value;
  }
  return utm;
}
