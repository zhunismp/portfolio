'use client';

import { LazyMotion, domAnimation } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * `domAnimation` rather than `domMax`. The difference is drag, pan and layout
 * animation — none of which this site has. Choosing the smaller feature bundle
 * is the architectural statement that there is no drag here: the only genuinely
 * momentum-driven surface is native scroll, and the browser already implements
 * velocity handoff, deceleration and rubber-banding for it on the compositor,
 * with the platform's own constants. Re-implementing that would be worse.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
