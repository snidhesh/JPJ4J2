'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const PLANS = [
  { id: 'ground', label: 'Ground Floor', src: '/images/floorplans/ground-floor.webp' },
  { id: 'first', label: 'First Floor', src: '/images/floorplans/first-floor.webp' },
];

export function FloorPlanSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="floorplans" className="bg-bg-secondary py-24 sm:py-32">
      <Container>
        <Reveal className="mb-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent">
            <span className="accent-divider" />
            Floor Plans
          </p>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1.12] text-text-primary sm:text-5xl">
            How the house is laid out.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-6 flex gap-2">
            {PLANS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={cn(
                  'px-6 py-3 text-xs tracking-[0.16em] uppercase transition-colors',
                  i === active
                    ? 'bg-accent text-bg-primary'
                    : 'border border-border bg-bg-primary text-text-secondary hover:text-accent',
                )}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="relative aspect-[3/2] w-full overflow-hidden border border-border bg-bg-primary">
            <Image
              key={PLANS[active].id}
              src={PLANS[active].src}
              alt={`${PLANS[active].label} plan — Villa Sfiora`}
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-contain p-4"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
