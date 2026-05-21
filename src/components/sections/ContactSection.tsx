import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  CONTACT_HEADLINE,
  CONTACT_BODY,
  AGENT_NAME,
  AGENT_EMAIL,
  AGENT_PHONE_DISPLAY,
  AGENT_PHONE_E164,
  AGENT_PROPTREE,
} from '@/lib/constants';

export function ContactSection() {
  return (
    <section id="contact" className="bg-bg-secondary py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: copy + direct contact */}
          <div>
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.28em] uppercase text-accent">
                <span className="accent-divider" />
                Enquire
              </p>
              <h2 className="font-serif text-4xl leading-[1.12] text-text-primary sm:text-5xl">
                {CONTACT_HEADLINE}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
                {CONTACT_BODY}
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10 space-y-5">
              <p className="font-serif text-xl text-text-primary">{AGENT_NAME}</p>
              <a href={`mailto:${AGENT_EMAIL}`} className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-accent">
                <Mail size={17} strokeWidth={1.5} className="text-accent" />
                {AGENT_EMAIL}
              </a>
              <a href={`tel:${AGENT_PHONE_E164}`} className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-accent">
                <Phone size={17} strokeWidth={1.5} className="text-accent" />
                {AGENT_PHONE_DISPLAY}
              </a>
              <a href={AGENT_PROPTREE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-accent">
                <ExternalLink size={17} strokeWidth={1.5} className="text-accent" />
                proptr.ee/RiadGohar
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={100}>
            <div className="border border-border bg-bg-primary p-7 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
