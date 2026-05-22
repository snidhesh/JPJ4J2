'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { VIDEO_YOUTUBE_ID, PROJECT_NAME } from '@/lib/constants';

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${VIDEO_YOUTUBE_ID}/maxresdefault.jpg`;

  return (
    <section id="video" className="bg-bg-dark py-16 sm:py-32">
      <Container>
        <Reveal className="mb-12 text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent-soft">
            <span className="accent-divider" />
            The Tour
            <span className="accent-divider" />
          </p>
          <h2 className="font-serif text-4xl leading-[1.12] text-text-on-dark sm:text-5xl">
            Walk through the reconstruction.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO_YOUTUBE_ID}?autoplay=1&rel=0`}
                title={`${PROJECT_NAME} video tour`}
                allow="accelerated-encoder; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full cursor-pointer"
                aria-label="Play video tour"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb} alt={`${PROJECT_NAME} video tour`} className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-95" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-black/30 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play size={28} className="ml-1 text-white" fill="white" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
