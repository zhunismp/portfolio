import { ExperienceCard } from '@/components/experience-card';
import { experiences } from '@/data/experiences';

/**
 * A continuously sliding track of experience cards.
 *
 * Three cards cannot fill a track on their own, so the set is repeated. The
 * repeats are what make the loop seamless: the track translates by exactly one
 * set width and then resets, so the frame after the reset is pixel-identical to
 * the frame before it and there is no visible jump.
 *
 * SET_REPEATS of 4 means the track is four sets wide while the animation moves
 * it by one, which keeps the visible area covered up to a ~3000px viewport. Two
 * repeats would leave a gap on any screen wider than one set.
 *
 * Only the first set is real content. The rest are aria-hidden, so a screen
 * reader hears each company once rather than four times.
 *
 * The animation is CSS, not motion. A linear infinite loop has nothing to
 * interrupt and no velocity to inherit, so a spring would buy nothing — and
 * keyframes run on the compositor with no JavaScript, so the track keeps sliding
 * even if hydration never happens.
 */
const SET_REPEATS = 4;

export function ExperienceMarquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {Array.from({ length: SET_REPEATS }, (_, setIndex) => (
          <ul
            key={setIndex}
            className="marquee__set"
            {...(setIndex > 0 ? { 'aria-hidden': true } : {})}
          >
            {experiences.map((exp) => (
              <li key={exp.company} className="marquee__item">
                <ExperienceCard {...exp} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
