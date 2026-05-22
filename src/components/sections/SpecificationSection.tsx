'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SPEC_GROUPS, type SpecGroup } from '@/lib/constants';
import { cn } from '@/lib/utils';

function Shelf({
  group,
  isOpen,
  onToggle,
}: {
  group: SpecGroup;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-dark">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'group flex w-full items-center gap-5 py-6 text-left transition-all duration-300 sm:gap-8',
          'hover:pl-2',
        )}
      >
        {/* spine accent + index */}
        <span
          className={cn(
            'hidden h-12 w-px shrink-0 transition-all duration-500 sm:block',
            isOpen ? 'bg-accent-soft' : 'bg-[rgba(255,255,255,0.18)] group-hover:bg-accent-soft',
          )}
        />
        <span className="w-12 shrink-0 font-serif text-3xl text-[rgba(255,255,255,0.28)] transition-colors duration-300 group-hover:text-accent-soft">
          {group.index}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-[0.62rem] font-medium tracking-[0.24em] uppercase text-accent-soft">
            {group.category}
          </span>
          <span className="mt-1 block font-serif text-2xl text-text-on-dark sm:text-3xl">
            {group.title}
          </span>
        </span>

        <span
          className={cn(
            'ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
            isOpen
              ? 'rotate-45 border-accent-soft text-accent-soft'
              : 'border-[rgba(255,255,255,0.25)] text-text-on-dark-muted group-hover:border-accent-soft',
          )}
        >
          <Plus size={16} strokeWidth={1.5} />
        </span>
      </button>

      {/* expanding body — grid-rows 0fr→1fr for smooth height animation */}
      <div
        className={cn(
          'grid transition-all duration-500 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <ul className="grid gap-x-10 gap-y-2.5 pb-8 sm:grid-cols-2 sm:pl-[5.25rem]">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 text-sm leading-relaxed text-text-on-dark-muted"
              >
                <span className="text-accent-soft">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SpecificationSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(SPEC_GROUPS[0].index);

  return (
    <section id="specification" className="bg-bg-dark py-16 sm:py-32">
      <Container>
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent-soft">
            <span className="accent-divider" />
            Specification
          </p>
          <h2 className="font-serif text-4xl leading-[1.12] text-text-on-dark sm:text-5xl">
            Every detail, reimagined and elevated.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="border-t border-border-dark">
            {SPEC_GROUPS.map((group) => (
              <Shelf
                key={group.index}
                group={group}
                isOpen={openIndex === group.index}
                onToggle={() => setOpenIndex(openIndex === group.index ? null : group.index)}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
