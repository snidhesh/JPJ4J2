import * as Icons from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { INTRO_HEADLINE, INTRO_BODY, PROPERTY_HIGHLIGHTS } from '@/lib/constants';

function Icon({ name, ...props }: { name: string } & Icons.LucideProps) {
  const Cmp = (Icons as unknown as Record<string, React.ComponentType<Icons.LucideProps>>)[name];
  return Cmp ? <Cmp {...props} /> : null;
}

export function IntroductionSection() {
  return (
    <section id="introduction" className="bg-bg-primary py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent">
              <span className="accent-divider" />
              The Villa
            </p>
            <h2 className="font-serif text-4xl leading-[1.12] text-text-primary sm:text-5xl">
              {INTRO_HEADLINE}
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-text-secondary">
            {INTRO_BODY.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid grid-cols-2 border-t border-l border-border md:grid-cols-3 lg:grid-cols-6">
          {PROPERTY_HIGHLIGHTS.map((h, i) => (
            <Reveal
              key={h.label}
              delay={i * 60}
              className="border-r border-b border-border bg-bg-secondary px-6 py-8 text-center"
            >
              <Icon name={h.icon} size={24} strokeWidth={1.2} className="mx-auto text-accent" />
              <p className="mt-4 font-serif text-2xl text-text-primary">{h.value}</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-text-muted">
                {h.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
