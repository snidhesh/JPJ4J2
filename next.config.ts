import type { NextConfig } from 'next';

// Content-Security-Policy. Kept pragmatic for a static marketing site:
// - 'unsafe-inline' is required for Next's hydration bootstrap and styled-jsx/Tailwind.
// - frame-src allows the YouTube tour embed and the Google Maps embed.
// - img-src allows next/image output, data URIs, and YouTube thumbnails.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  // cdnjs hosts the Twemoji country flags used by react-international-phone.
  "img-src 'self' data: blob: https://img.youtube.com https://i.ytimg.com https://cdnjs.cloudflare.com",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://maps.google.com https://www.google.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Deployed on Vercel — keep Next.js Image Optimization on for the local /public assets.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
