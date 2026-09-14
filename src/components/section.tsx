import type { ReactNode } from 'react';

import { Reveal } from '@/components/reveal';

/** A titled page section. `title` renders as the h2. */
export function Section({
  id,
  title,
  subcopy,
  children,
}: {
  id: string;
  title: string;
  subcopy?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-24">
      <Reveal>
        <h2 className="text-h2 text-ink">{title}</h2>
        {subcopy ? (
          <p className="mt-3 max-w-2xl text-body text-ink-muted">{subcopy}</p>
        ) : null}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
