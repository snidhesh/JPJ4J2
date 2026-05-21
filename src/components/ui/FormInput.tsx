import { cn } from '@/lib/utils';

export function FormInput({
  label,
  error,
  className,
  id,
  ...props
}: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs tracking-[0.12em] uppercase text-text-secondary">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'w-full border bg-bg-primary px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted',
          'focus:border-accent',
          error ? 'border-clay' : 'border-border',
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-clay">{error}</p>}
    </div>
  );
}
