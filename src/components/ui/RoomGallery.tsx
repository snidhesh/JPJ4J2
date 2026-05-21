'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import type { GalleryImage } from '@/types';
import { cn } from '@/lib/utils';

export function RoomGallery({
  images,
  placeholderCount = 4,
  className,
}: {
  images: GalleryImage[];
  placeholderCount?: number;
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  if (!images.length) {
    return (
      <div className={cn('grid grid-cols-2 gap-3 md:grid-cols-4', className)}>
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border border-dashed border-border bg-bg-secondary text-text-muted"
          >
            <ImageOff size={20} strokeWidth={1} />
            <span className="text-[0.6rem] tracking-[0.2em] uppercase">Photo to come</span>
          </div>
        ))}
      </div>
    );
  }

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className={cn('grid grid-cols-2 gap-3 md:grid-cols-3', className)}>
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className={cn(
              'group relative aspect-[4/3] cursor-pointer overflow-hidden bg-bg-secondary',
              // First image spans wider on larger grids for rhythm
              i === 0 && images.length > 4 && 'md:col-span-2 md:row-span-2 md:aspect-auto',
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/70 transition hover:text-white"
          >
            <X size={28} strokeWidth={1.2} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-4 text-white/70 transition hover:text-white md:left-8"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          <div
            className="relative h-[80vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-4 text-white/70 transition hover:text-white md:right-8"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>
        </div>
      )}
    </>
  );
}
