/**
 * Apple's spring parameters, mapped to motion's API.
 *
 * Apple deliberately replaced the physics triplet (mass/stiffness/damping) with
 * two designer-facing values: damping ratio (overshoot) and response (seconds to
 * target). motion's `bounce` and `duration` map onto those directly.
 *
 *   damping ratio 1.0  ->  bounce 0     (critically damped, no overshoot)
 *   damping ratio 0.8  ->  bounce 0.2
 *   response           ->  duration
 *
 * `bounce: 0` everywhere here, deliberately. Overshoot is earned only by a
 * gesture that carried momentum — a flick, a throw, a drag release. A scroll
 * reveal carried none, and neither did a press. Nothing on this site earns it.
 *
 * `as const` matters: without it TypeScript widens `type: 'spring'` to `string`
 * and motion's Transition type rejects the object.
 */
export const spring = {
  /** Move/reposition. Apple ships damping 1.0 / response 0.4. The house default. */
  move: { type: 'spring', bounce: 0, duration: 0.4 },
  /** Press feedback. Faster than `move` so it reads as instant. */
  press: { type: 'spring', bounce: 0, duration: 0.25 },
} as const;

/** Reveal travel. Small enough to stay under the perception threshold. */
export const REVEAL_Y = 12;
export const REVEAL_Y_CARD = 16;

/** Per-item stagger delay. */
export const STAGGER = 0.06;
/**
 * Cap on total cascade. 20 tech chips at 0.06s each would be 1.2s of waiting —
 * a latency regression dressed up as polish.
 */
export const STAGGER_CAP = 0.24;

export const staggerDelay = (index = 0) => Math.min(index * STAGGER, STAGGER_CAP);
