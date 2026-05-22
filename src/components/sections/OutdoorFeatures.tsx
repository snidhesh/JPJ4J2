'use client';

import { useState } from 'react';
import * as Icons from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { OUTDOOR_FEATURES } from '@/lib/constants';
import { cn } from '@/lib/utils';

function Icon({ name, ...props }: { name: string } & Icons.LucideProps) {
  const Cmp = (Icons as unknown as Record<string, React.ComponentType<Icons.LucideProps>>)[name];
  return Cmp ? <Cmp {...props} /> : null;
}

export function OutdoorFeatures() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div
        id="outdoor-features"
        className="mt-12 grid grid-cols-2 border-t border-l border-border md:grid-cols-4"
      >
        {OUTDOOR_FEATURES.map((f, i) => (
          <Reveal
            key={f.title}
            delay={i * 50}
            className={cn(
              'border-r border-b border-border bg-bg-secondary px-5 py-7',
              // On phones, hide items 5–8 until expanded; always shown at ≥sm.
              i >= 4 && !showAll && 'hidden sm:block',
            )}
          >
            <Icon name={f.icon ?? 'Dot'} size={22} strokeWidth={1.2} className="text-accent" />
            <p className="mt-4 font-serif text-lg leading-snug text-text-primary">{f.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">{f.description}</p>
          </Reveal>
        ))}
      </div>

      {/* Mobile-only show more / less toggle */}
      <div className="mt-8 flex justify-center sm:hidden">
        <button
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls="outdoor-features"
          className="flex items-center gap-3 text-xs font-medium tracking-[0.24em] uppercase text-accent"
        >
          <span className="h-px w-8 bg-accent" />
          {showAll ? 'Show less' : 'Show all features'}
          <span className="h-px w-8 bg-accent" />
        </button>
      </div>
    </>
  );
}
