'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
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

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  // Keyboard controls + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, prev, next]);

  if (!images.length) {
    return (
      <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', className)}>
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-[3/2] flex-col items-center justify-center gap-2 border border-dashed border-border bg-bg-secondary text-text-muted"
          >
            <ImageOff size={20} strokeWidth={1} />
            <span className="text-[0.6rem] tracking-[0.2em] uppercase">Photo to come</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', className)}>
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="group relative aspect-[3/2] cursor-pointer overflow-hidden bg-bg-secondary"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="fixed top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white hover:text-black sm:top-6 sm:right-6"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white hover:text-black md:left-8"
          >
            <ChevronLeft size={26} strokeWidth={1.5} />
          </button>
          <div
            className="relative h-[78vh] w-[88vw] max-w-5xl"
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
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white hover:text-black md:right-8"
          >
            <ChevronRight size={26} strokeWidth={1.5} />
          </button>
        </div>,
          document.body,
        )}
    </>
  );
}
