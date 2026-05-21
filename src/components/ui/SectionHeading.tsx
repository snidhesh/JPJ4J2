import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

export function SectionHeading({
  label,
  title,
  intro,
  align = 'left',
  onDark = false,
  className,
}: {
  label?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {label && (
        <Reveal
          className={cn(
            'mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase',
            align === 'center' && 'justify-center',
            onDark ? 'text-accent-soft' : 'text-accent',
          )}
        >
          <span className="accent-divider" />
          {label}
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
            'font-serif text-4xl leading-[1.12] sm:text-5xl',
            onDark ? 'text-text-on-dark' : 'text-text-primary',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <div
            className={cn(
              'mt-6 text-base leading-relaxed',
              onDark ? 'text-text-on-dark-muted' : 'text-text-secondary',
            )}
          >
            {intro}
          </div>
        </Reveal>
      )}
    </div>
  );
}
