import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { RoomGallery } from '@/components/ui/RoomGallery';
import { OutdoorFeatures } from '@/components/sections/OutdoorFeatures';
import { OUTDOOR_IMAGES } from '@/lib/images';

export function OutdoorSection() {
  return (
    <section id="outdoor" className="bg-bg-primary py-16 sm:py-32">
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

        {/* Outdoor feature grid — collapses to 4 on mobile with a show-more toggle */}
        <OutdoorFeatures />
      </Container>
    </section>
  );
}
