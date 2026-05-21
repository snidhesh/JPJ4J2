'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { cn } from '@/lib/utils';

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={cn('reveal', isVisible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
