import { MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import {
  LOCATION_HEADLINE,
  LOCATION_BODY,
  LOCATION_MAP_QUERY,
  POINTS_OF_INTEREST,
} from '@/lib/constants';

export function LocationSection() {
  return (
    <section id="location" className="bg-bg-primary py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent">
                <span className="accent-divider" />
                Location
              </p>
              <h2 className="font-serif text-4xl leading-[1.12] text-text-primary sm:text-5xl">
                {LOCATION_HEADLINE}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary">{LOCATION_BODY}</p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                {POINTS_OF_INTEREST.map((poi) => (
                  <li key={poi.name} className="flex items-center justify-between py-4">
                    <span className="flex items-center gap-3 text-sm text-text-primary">
                      <MapPin size={16} strokeWidth={1.4} className="text-accent" />
                      {poi.name}
                    </span>
                    <span className="text-xs tracking-[0.12em] uppercase text-text-muted">
                      {poi.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="relative h-[420px] w-full overflow-hidden border border-border lg:h-full">
              <iframe
                title="Jumeirah Park map"
                src={`https://maps.google.com/maps?q=${LOCATION_MAP_QUERY}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="h-full w-full [filter:grayscale(1)_invert(0.92)_sepia(1)_hue-rotate(176deg)_saturate(2.4)_brightness(0.92)_contrast(0.95)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
