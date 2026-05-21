'use client';

import 'react-international-phone/style.css';
import { PhoneInput as IntlPhoneInput } from 'react-international-phone';

export function PhoneField({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (phone: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs tracking-[0.12em] uppercase text-text-secondary">
        Phone
      </label>
      <IntlPhoneInput
        defaultCountry="ae"
        value={value}
        onChange={onChange}
        className="villa-phone"
        inputClassName="villa-phone-input"
        countrySelectorStyleProps={{ buttonClassName: 'villa-phone-button' }}
      />
      {error && <p className="mt-1 text-xs text-clay">{error}</p>}

      <style jsx global>{`
        .villa-phone {
          --react-international-phone-height: 46px;
          --react-international-phone-border-color: var(--color-border);
          --react-international-phone-background-color: var(--color-bg-primary);
          --react-international-phone-text-color: var(--color-text-primary);
          --react-international-phone-selected-dropdown-item-background-color: var(--color-accent-light);
          width: 100%;
        }
        .villa-phone-input {
          width: 100% !important;
          font-size: 0.875rem !important;
          border-radius: 0 !important;
        }
        .villa-phone-button {
          border-radius: 0 !important;
        }
        .villa-phone .react-international-phone-input,
        .villa-phone .react-international-phone-country-selector-button {
          border-radius: 0 !important;
        }
        .villa-phone .react-international-phone-input:focus {
          border-color: var(--color-accent) !important;
        }
      `}</style>
    </div>
  );
}
