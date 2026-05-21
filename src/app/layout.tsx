import type { Metadata } from 'next';
import { Fraunces, Libre_Franklin } from 'next/font/google';
import './globals.css';
import {
  PROJECT_NAME,
  LOCATION_NAME,
  CITY,
  SITE_NAME,
  SITE_URL,
  SUBTAGLINE,
} from '@/lib/constants';

// Fraunces ≈ FreightBig Pro — high-contrast display serif for headlines.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

// Libre Franklin ≈ BentonSans — clean grotesque for body, nav and UI.
const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-libre-franklin',
  display: 'swap',
});

const title = `${PROJECT_NAME} | Reconstructed Villa in ${LOCATION_NAME}, ${CITY}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: SUBTAGLINE,
  keywords: [
    PROJECT_NAME,
    `${LOCATION_NAME} villa`,
    'Jumeirah Park villa for sale',
    'Dubai luxury villa',
    'reconstructed villa Dubai',
    SITE_NAME,
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: SUBTAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_AE',
    type: 'website',
    images: [{ url: '/images/hero/cover.webp', width: 1200, height: 630, alt: PROJECT_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: SUBTAGLINE,
    images: ['/images/hero/cover.webp'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${libreFranklin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
