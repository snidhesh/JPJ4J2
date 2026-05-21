'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import {
  NAV_LINKS,
  AGENT_PHONE_DISPLAY,
  AGENT_PHONE_E164,
  SITE_NAME,
  LOGO_LIGHT,
} from '@/lib/constants';
import { cn } from '@/lib/utils';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[110] bg-bg-dark transition-opacity duration-300 lg:hidden',
        open ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <Image src={LOGO_LIGHT} alt={SITE_NAME} width={132} height={30} className="h-7 w-auto" />
        <button onClick={onClose} aria-label="Close menu" className="text-text-on-dark">
          <X size={26} strokeWidth={1.4} />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-7 pt-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-serif text-3xl text-text-on-dark transition-colors hover:text-accent-soft"
          >
            {link.label}
          </a>
        ))}
        <a
          href={`tel:${AGENT_PHONE_E164}`}
          className="mt-6 text-sm tracking-[0.14em] text-accent-soft"
        >
          {AGENT_PHONE_DISPLAY}
        </a>
      </nav>
    </div>
  );
}
