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
  countryCode: z.string().default('+971'),
  message: z.string().trim().max(1000).optional().or(z.literal('')),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: 'Please accept the privacy terms to continue' }),
  source: z.string().default('Villa Sfiora Landing Page'),
  utm: z.record(z.string(), z.string()).optional(),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
