'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { FormInput } from '@/components/ui/FormInput';
import { FormTextarea } from '@/components/ui/FormTextarea';
import { Button } from '@/components/ui/Button';
import { PhoneField } from './PhoneInput';
import { ConsentCheckbox } from './ConsentCheckbox';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { leadSchema } from '@/lib/validation';

export function ContactForm() {
  const { status, errorMessage, submit } = useFormSubmission();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+971');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const candidate = {
      fullName,
      email,
      phone,
      countryCode: '',
      message,
      consent,
      source: 'Villa Sfiora Landing Page',
      website,
    };
    const result = leadSchema.safeParse(candidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === 'string' && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    await submit(candidate);
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 border border-accent-border bg-accent-light px-8 py-14 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-bg-primary">
          <Check size={22} />
        </span>
        <h3 className="font-serif text-2xl text-text-primary">Thank you</h3>
        <p className="max-w-sm text-sm text-text-secondary">
          Your enquiry has been received. Riad will be in touch shortly to arrange your private
          viewing of Villa Sfiora.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormInput
        id="fullName"
        label="Full name"
        placeholder="Your name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        error={errors.fullName}
        autoComplete="name"
      />
      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        autoComplete="email"
      />
      <PhoneField value={phone} onChange={setPhone} error={errors.phone} />
      <FormTextarea
        id="message"
        label="Message (optional)"
        placeholder="Tell us a little about what you’re looking for…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={errors.message}
      />

      {/* Honeypot */}
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <ConsentCheckbox checked={consent} onChange={setConsent} error={errors.consent} />

      {status === 'error' && (
        <p className="text-sm text-clay">{errorMessage}</p>
      )}

      <Button type="submit" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? 'Sending…' : 'Request Private Viewing'}
      </Button>
    </form>
  );
}
