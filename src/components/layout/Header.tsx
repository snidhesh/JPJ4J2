'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { NAV_LINKS, SITE_NAME, LOGO_DARK, LOGO_LIGHT } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] transition-colors duration-500',
          scrolled
            ? 'border-b border-border bg-bg-primary/90 backdrop-blur-md'
            : 'bg-gradient-to-b from-black/40 to-transparent',
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="#top" aria-label={`${SITE_NAME} — home`} className="relative block h-7 w-[122px]">
            <Image
              src={LOGO_LIGHT}
              alt={SITE_NAME}
              fill
              priority
              sizes="122px"
              className={cn('object-contain object-left transition-opacity duration-500', scrolled ? 'opacity-0' : 'opacity-100')}
            />
            <Image
              src={LOGO_DARK}
              alt=""
              fill
              sizes="122px"
              aria-hidden="true"
              className={cn('object-contain object-left transition-opacity duration-500', scrolled ? 'opacity-100' : 'opacity-0')}
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-xs tracking-[0.14em] uppercase transition-colors',
                  scrolled
                    ? 'text-text-secondary hover:text-accent'
                    : 'text-white/80 hover:text-white',
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                'border px-5 py-2.5 text-xs tracking-[0.16em] uppercase transition-all',
                scrolled
                  ? 'border-accent-border text-accent hover:bg-accent-light'
                  : 'border-white/40 text-white hover:bg-white/10',
              )}
            >
              Enquire
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={cn('lg:hidden', scrolled ? 'text-text-primary' : 'text-white')}
          >
            <Menu size={24} strokeWidth={1.4} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
