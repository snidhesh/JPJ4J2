import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Deployed on Vercel — keep Next.js Image Optimization on for the local /public assets.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
