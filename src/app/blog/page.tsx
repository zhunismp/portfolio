import type { Metadata } from 'next';
import Link from 'next/link';

import { EmptyState } from '@/components/empty-state';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Blogs — Kobkit Ruangsuriyakij',
  description: 'Notes on building scalable web applications and distributed systems.',
};

export default function BlogPage() {
  return (
    <div className={site.container}>
      <header className="pt-16 pb-10 md:pt-20">
        <h1 className="text-h1 text-ink">Blogs</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-ink-muted">
          Notes on building scalable web applications and distributed systems.
        </p>
      </header>

      <div className="pb-24">
        <EmptyState
          title="No posts yet"
          body="First one is in progress. Check back soon."
          action={
            <Link href="/" className="text-body font-medium text-accent">
              Back home
            </Link>
          }
        />
      </div>
    </div>
  );
}
