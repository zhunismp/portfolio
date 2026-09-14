'use client';

import { useRef, type ReactNode } from 'react';
// `m` comes from the minimal entrypoint. Importing it from the `motion/react`
// barrel drags in the full-featured `motion` component, which references every
// feature including drag and pan — 37 kB gz of code this site never uses.
import * as m from 'motion/react-m';
import { useInView } from 'motion/react';

import { REVEAL_Y, spring, staggerDelay } from '@/lib/springs';

/**
 * Fades and lifts its children into view once.
 *
 * Uses the `useInView` hook rather than the `whileInView` prop: a hook is not a
 * gated feature, so it works regardless of which LazyMotion bundle is loaded,
 * and it gives explicit control over stagger delay and reduced motion.
 *
 * Children stay server-rendered. A client component rendering server-component
 * children is fine — the children render on the server into the RSC payload and
 * only this wrapper's JavaScript ships. No content string, no next/image and no
 * icon crosses the boundary.
 *
 * NOTE: this renders opacity 0 on the server and only becomes visible once its
 * JavaScript runs. There is no longer a fallback for that, so if hydration never
 * happens the wrapped content stays invisible.
 */
export function Reveal({
  children,
  index = 0,
  y = REVEAL_Y,
  immediate = false,
  className,
}: {
  children: ReactNode;
  /** Position in a group; drives the stagger delay. */
  index?: number;
  y?: number;
  /**
   * Skip the intersection observer and animate on mount. For above-the-fold
   * content, where useInView would fire immediately anyway.
   */
  immediate?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
    margin: '0px 0px -10% 0px',
  });

  const visible = immediate || inView;

  return (
    <m.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ ...spring.move, delay: staggerDelay(index) }}
    >
      {children}
    </m.div>
  );
}
