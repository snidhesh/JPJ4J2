import Link from 'next/link';
import { PROJECT_NAME } from '@/lib/constants';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg-dark px-6 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-accent-soft">404</p>
      <h1 className="mt-4 font-serif text-4xl text-text-on-dark sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-sm text-sm text-text-on-dark-muted">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-8 border border-border-dark px-7 py-3 text-xs tracking-[0.18em] uppercase text-text-on-dark transition-colors hover:bg-[rgba(236,234,226,0.08)]"
      >
        Back to {PROJECT_NAME}
      </Link>
    </main>
  );
}
