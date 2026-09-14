import type { ReactNode } from 'react';

import { Reveal } from '@/components/reveal';

/**
 * A titled page section. `title` renders as the h2; pass `srOnlyTitle` when the
 * heading exists only to give the landmark an accessible name.
 */
export function Section({
  id,
  title,
  subcopy,
  srOnlyTitle = false,
  children,
}: {
  id: string;
  title: string;
  subcopy?: string;
  srOnlyTitle?: boolean;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="py-20 md:py-24">
      <Reveal>
        <h2 id={headingId} className={srOnlyTitle ? 'sr-only' : 'text-h2 text-ink'}>
          {title}
        </h2>
        {subcopy ? (
          <p className="mt-3 max-w-2xl text-body text-ink-muted">{subcopy}</p>
        ) : null}
      </Reveal>
      <div className={srOnlyTitle ? '' : 'mt-10'}>{children}</div>
    </section>
  );
}
