import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE_NAME, AGENT_EMAIL, PROJECT_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${PROJECT_NAME}`,
  robots: { index: false, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-bg-primary py-28">
      <Container size="narrow">
        <Link href="/" className="text-xs tracking-[0.18em] uppercase text-accent">
          ← Back
        </Link>
        <h1 className="mt-6 font-serif text-4xl text-text-primary sm:text-5xl">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-text-secondary">
          <p>
            {SITE_NAME} respects your privacy. This page explains how we handle the information you
            provide through this website.
          </p>
          <h2 className="font-serif text-2xl text-text-primary">Information we collect</h2>
          <p>
            When you submit an enquiry, we collect your name, email address, phone number, and any
            message you choose to send. We also collect basic campaign attribution data (UTM
            parameters) where present.
          </p>
          <h2 className="font-serif text-2xl text-text-primary">How we use it</h2>
          <p>
            We use your details solely to respond to your enquiry about {PROJECT_NAME} and related
            properties, and to arrange viewings. We do not sell your data.
          </p>
          <h2 className="font-serif text-2xl text-text-primary">Contact</h2>
          <p>
            To request access to or deletion of your data, email{' '}
            <a href={`mailto:${AGENT_EMAIL}`} className="text-accent underline underline-offset-2">
              {AGENT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}
