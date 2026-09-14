'use client';

import { m, useReducedMotion, type HTMLMotionProps } from 'motion/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/** motion allows a MotionValue as children; this component only ever takes nodes. */
type PressLinkProps = Omit<HTMLMotionProps<'a'>, 'children'> & {
  children?: ReactNode;
  scale?: number;
};

import { spring } from '@/lib/springs';

/**
 * A link that responds on pointer-down rather than on click.
 *
 * This is the whole reason a spring library earns its place on a site with no
 * drag surfaces. motion's tap gesture:
 *   - fires on pointerdown, so there is no waiting for a click event
 *   - cancels if the pointer drags off the target and re-arms if it returns
 *   - being a spring, reverses from the current on-screen value, so a rapid
 *     press-release-press has no visible jump
 *
 * Scale delta shrinks as the surface grows: 0.96 on a small nav link reads
 * correctly, whereas 0.96 on a full-width contact row looks like a glitch.
 */
export function PressLink({
  scale = 0.97,
  children,
  ...props
}: PressLinkProps) {
  const reduceMotion = useReducedMotion();

  // Reduced motion keeps the feedback but drops the transform — a row that gives
  // no response at all on press would be a regression, not an accommodation.
  if (reduceMotion) {
    // Cast is safe: with motion's animation props unused, what remains is a
    // plain anchor. motion's prop type is a superset of React's, and the two
    // disagree only on onDrag, which this component never receives.
    return <a {...(props as ComponentPropsWithoutRef<'a'>)}>{children}</a>;
  }

  return (
    <m.a whileTap={{ scale }} transition={spring.press} {...props}>
      {children}
    </m.a>
  );
}
