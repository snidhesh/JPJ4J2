import Image from 'next/image';
import {
  SITE_NAME,
  LOGO_LIGHT,
  PROJECT_NAME,
  LOCATION_NAME,
  CITY,
  AGENT_NAME,
  AGENT_EMAIL,
  AGENT_PHONE_DISPLAY,
  AGENT_PHONE_E164,
  AGENT_PROPTREE,
  DLD_PERMIT_NUMBER,
  DLD_PERMIT_QR,
  DISCLAIMER_TEXT,
} from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-bg-dark text-text-on-dark">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src={LOGO_LIGHT}
              alt={SITE_NAME}
              width={170}
              height={39}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-on-dark-muted">
              {PROJECT_NAME}, {LOCATION_NAME}, {CITY}. Presented exclusively by {SITE_NAME}.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-accent-soft">Contact</p>
            <p className="mt-4 text-sm">{AGENT_NAME}</p>
            <a href={`mailto:${AGENT_EMAIL}`} className="mt-1 block text-sm text-text-on-dark-muted hover:text-text-on-dark">
              {AGENT_EMAIL}
            </a>
            <a href={`tel:${AGENT_PHONE_E164}`} className="mt-1 block text-sm text-text-on-dark-muted hover:text-text-on-dark">
              {AGENT_PHONE_DISPLAY}
            </a>
            <a href={AGENT_PROPTREE} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-text-on-dark-muted hover:text-text-on-dark">
              proptr.ee/RiadGohar
            </a>
          </div>

          {/* DLD Permit */}
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-accent-soft">DLD Permit</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-white p-1">
                <Image
                  src={DLD_PERMIT_QR}
                  alt={`DLD permit ${DLD_PERMIT_NUMBER} QR code`}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm">Permit No.</p>
                <p className="text-sm text-text-on-dark-muted">{DLD_PERMIT_NUMBER}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border-dark pt-8">
          <p className="text-[0.7rem] leading-relaxed text-text-on-dark-muted">{DISCLAIMER_TEXT}</p>
          <p className="mt-4 text-[0.7rem] text-text-on-dark-muted">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
