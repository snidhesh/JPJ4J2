import Image from 'next/image';
import { heroImage, heroAlt } from '@/lib/images';
import {
  PROJECT_NAME,
  TAGLINE,
  LOCATION_NAME,
  CITY,
  SITE_NAME,
  HERO_METADATA,
} from '@/lib/constants';

export function HeroSection() {
  return (
    <section id="top" className="relative flex h-screen min-h-[640px] items-end overflow-hidden">
      {/* Background */}
      {heroImage ? (
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#002349] via-[#001731] to-[#000d1f]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 sm:px-8 lg:px-12">
        <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-white/80">
          <span className="h-px w-10 bg-white/50" />
          {SITE_NAME} · {CITY}
        </p>
        <h1 className="font-serif text-[3.4rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">
          {PROJECT_NAME}
        </h1>
        <p className="mt-5 max-w-md text-lg font-light text-white/85">
          {TAGLINE}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          {HERO_METADATA.map((item) => (
            <span key={item} className="text-xs tracking-[0.18em] uppercase text-white/70">
              {item}
            </span>
          ))}
        </div>

        <p className="mt-10 text-xs tracking-[0.2em] uppercase text-white/60">
          {PROJECT_NAME} · {LOCATION_NAME}
        </p>
      </div>

      <div className="absolute right-6 bottom-8 z-10 hidden text-[0.6rem] tracking-[0.25em] uppercase text-white/60 [writing-mode:vertical-rl] lg:flex lg:items-center lg:gap-3">
        Scroll
        <span className="h-14 w-px bg-white/40" />
      </div>
    </section>
  );
}
