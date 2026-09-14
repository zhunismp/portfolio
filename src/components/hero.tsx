import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { profile } from '@/data/profile';
import { site } from '@/data/site';

/**
 * 85svh rather than 100dvh so a large user text-size setting grows the section
 * instead of overflowing it.
 */
export function Hero() {
  return (
    <section className="flex min-h-[85svh] flex-col justify-center py-20">
      <div className="max-w-3xl">
        {/* Apple's product eyebrow is sentence case, accent-coloured, semibold,
            at body size — not the mono uppercase tracking-[0.3em] editorial idiom. */}
        <p className="text-body font-semibold text-accent">{profile.eyebrow}</p>

        <h1 className="mt-4 text-display text-ink">
          {profile.nameLines[0]}
          <br />
          {profile.nameLines[1]}
        </h1>

        <p className="mt-6 max-w-2xl text-body-lg text-ink-muted">{profile.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`#${site.sectionIds.contact}`}
            className="inline-flex h-11 items-center rounded-pill bg-accent px-6 text-body font-medium text-accent-ink transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </a>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-body font-medium text-accent"
          >
            See my work
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
