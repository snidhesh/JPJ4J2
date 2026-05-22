import { z } from 'zod';

export const leadSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email').max(254),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .max(20)
    .regex(/^[+\d\s()-]+$/, 'Please enter a valid phone number'),
  countryCode: z
    .string()
    .trim()
    .max(6)
    .regex(/^(\+?\d{1,4})?$/, 'Invalid country code')
    .default('+971'),
  message: z.string().trim().max(1000).optional().or(z.literal('')),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: 'Please accept the privacy terms to continue' }),
  source: z.string().trim().max(120).default('Villa Sfiora Landing Page'),
  // UTM values are bounded; the route additionally allowlists known keys.
  utm: z
    .record(z.string().max(40), z.string().max(200))
    .refine((o) => Object.keys(o).length <= 12, 'Too many tracking parameters')
    .optional(),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

// UTM keys we accept and forward to the CRM; anything else is dropped.
export const ALLOWED_UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export function sanitizeUtm(utm?: Record<string, string>): Record<string, string> {
  if (!utm) return {};
  const clean: Record<string, string> = {};
  for (const key of ALLOWED_UTM_KEYS) {
    if (typeof utm[key] === 'string' && utm[key].length > 0) clean[key] = utm[key];
  }
  return clean;
}

export type LeadInput = z.infer<typeof leadSchema>;
