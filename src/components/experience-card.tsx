import { LogoPlate } from '@/components/logo-plate';
import type { Experience } from '@/data/experiences';

/**
 * At rest the card is just a large company logo. On hover the logo shrinks and
 * rises, and the role details fade up underneath it.
 *
 * The logo repositions rather than disappearing, so hover changes the card's
 * layout instead of swapping its contents — the element you were looking at is
 * still the element you are looking at.
 *
 * The mark is rendered bare, with no tile behind it. lseg-logo.png carries a
 * tRNS chunk and agoda-logo.svg colours via CSS classes, so both are genuinely
 * transparent. 100x-logo.jpeg cannot be — JPEG has no alpha and its background
 * is a baked RGB(8,8,8) — so it reads as a dark icon tile rather than a bare
 * mark. That is the visible cost of dropping the plate here.
 *
 * Hover-only information has two failure modes, both handled in globals.css:
 *   - No hover (touch): the details are shown permanently. A phone user is not
 *     asked to hover something they cannot hover.
 *   - Screen readers: the details are hidden with opacity, never with
 *     `display: none` or `visibility`, so they stay in the accessibility tree
 *     and are announced at rest.
 */
export function ExperienceCard({ company, role, description, logo }: Experience) {
  return (
    <article className="exp-card">
      <div className="exp-card__logo">
        <LogoPlate src={logo} alt={company} size="xl" plate={false} />
      </div>

      <div className="exp-card__info">
        <h3 className="text-h3 text-ink">{company}</h3>
        <p className="mt-1 text-caption font-medium text-ink">{role}</p>
        <p className="mt-2 text-footnote text-ink-muted">{description}</p>
      </div>
    </article>
  );
}
