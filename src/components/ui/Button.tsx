import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'outline-light';

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-bg-primary hover:bg-accent-hover',
  outline: 'border border-accent-border text-accent hover:bg-accent-light',
  'outline-light':
    'border border-border-dark text-text-on-dark hover:bg-[rgba(236,234,226,0.08)]',
};

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a' } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

export function Button({ variant = 'primary', className, children, as = 'button', ...props }: Props) {
  const classes = cn(base, variants[variant], className);
  if (as === 'a') {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
