import { cn } from '@/lib/utils';

export function ConsentCheckbox({
  checked,
  onChange,
  error,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-text-secondary">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={cn(
            'mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-accent)]',
          )}
        />
        <span>
          I consent to BlackOak Real Estate contacting me about Villa Sfiora and storing the
          details I have provided. See our{' '}
          <a href="/privacy-policy" className="text-accent underline underline-offset-2">
            privacy policy
          </a>
          .
        </span>
      </label>
      {error && <p className="mt-1 text-xs text-clay">{error}</p>}
    </div>
  );
}
