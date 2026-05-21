import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { RoomGallery } from '@/components/ui/RoomGallery';
import { cn } from '@/lib/utils';
import type { RoomGalleryData } from '@/types';

export function GallerySection({
  id,
  label,
  title,
  body,
  gallery,
  alt = false,
}: {
  id: string;
  label: string;
  title: string;
  body: string;
  gallery: RoomGalleryData;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn('py-24 sm:py-32', alt ? 'bg-bg-secondary' : 'bg-bg-primary')}
    >
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent">
              <span className="accent-divider" />
              {label}
            </p>
            <h2 className="font-serif text-4xl leading-[1.12] text-text-primary sm:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-text-secondary">{body}</p>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <RoomGallery images={gallery.images} />
        </Reveal>
      </Container>
    </section>
  );
}
