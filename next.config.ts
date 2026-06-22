import type { NextConfig } from 'next';

// Content-Security-Policy. Kept pragmatic for a static marketing site:
// - 'unsafe-inline' is required for Next's hydration bootstrap and styled-jsx/Tailwind.
// - 'unsafe-eval' is added ONLY in development — React dev mode and the dev
//   bundler use eval() for fast refresh / source maps; production never does.
// - frame-src allows the YouTube tour embed and the Google Maps embed.
// - img-src allows next/image output, data URIs, and YouTube thumbnails.
const isDev = process.env.NODE_ENV !== 'production';

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  // cdnjs hosts the Twemoji country flags used by react-international-phone.
  "img-src 'self' data: blob: https://img.youtube.com https://i.ytimg.com https://cdnjs.cloudflare.com",
  "font-src 'self'",
  "connect-src 'self' https://vitals.vercel-insights.com",
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
  // Photos are pre-optimised at build time (process-images.mjs → ~50–300KB webp,
  // sized 1200–2000px). Serving them directly (unoptimized) skips the Next.js
  // image-optimizer cache, which otherwise serves a STALE copy after a photo is
  // replaced (cache is keyed by URL, not file contents). No quality is lost.
  images: {
    unoptimized: true,
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
