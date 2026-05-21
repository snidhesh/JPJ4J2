import * as Icons from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { RoomGallery } from '@/components/ui/RoomGallery';
import { OUTDOOR_IMAGES } from '@/lib/images';
import { OUTDOOR_FEATURES } from '@/lib/constants';

function Icon({ name, ...props }: { name: string } & Icons.LucideProps) {
  const Cmp = (Icons as unknown as Record<string, React.ComponentType<Icons.LucideProps>>)[name];
  return Cmp ? <Cmp {...props} /> : null;
}

export function OutdoorSection() {
  return (
    <section id="outdoor" className="bg-bg-primary py-24 sm:py-32">
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent">
              <span className="accent-divider" />
              Outdoor & Private Resort
            </p>
            <h2 className="font-serif text-4xl leading-[1.12] text-text-primary sm:text-5xl">
              From residence to private resort.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-text-secondary">
              A gated plot and automated AC garage open to a space designed with the same discipline
              as the interior. A large temperature-controlled pool, jacuzzi, waterfalls, an outdoor
              shower, and a fully equipped sunken BBQ and entertainment area — built for genuine use,
              not just visual effect.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <RoomGallery images={OUTDOOR_IMAGES.images} placeholderCount={4} />
        </Reveal>

        {/* Outdoor feature grid */}
        <div className="mt-12 grid grid-cols-2 border-t border-l border-border md:grid-cols-4">
          {OUTDOOR_FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 50}
              className="border-r border-b border-border bg-bg-secondary px-5 py-7"
            >
              <Icon name={f.icon ?? 'Dot'} size={22} strokeWidth={1.2} className="text-accent" />
              <p className="mt-4 font-serif text-lg leading-snug text-text-primary">{f.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-text-muted">{f.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
