'use client';

import { useRef, type ReactNode } from 'react';
import { m, useInView, useReducedMotion } from 'motion/react';

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
 * `data-reveal` is load-bearing: the noscript rule in layout.tsx and the
 * reduced-motion rule in globals.css both target it, so the content is readable
 * even if this component's JavaScript never runs.
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
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
    margin: '0px 0px -10% 0px',
  });

  // Reduced motion gets instant static content, not a slower fade.
  if (reduceMotion) {
    return (
      <div ref={ref} data-reveal className={className}>
        {children}
      </div>
    );
  }

  const visible = immediate || inView;

  return (
    <m.div
      ref={ref}
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ ...spring.move, delay: staggerDelay(index) }}
    >
      {children}
    </m.div>
  );
}
