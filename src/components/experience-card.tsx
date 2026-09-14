import { LogoPlate } from '@/components/logo-plate';
import type { Experience } from '@/data/experiences';

/**
 * Deliberately inert — these cards do not link anywhere yet, so they get no
 * press response. A press animation on a non-navigating surface promises a
 * navigation that never happens. Hover lift only, and only where hover exists.
 *
 * The role is `text-ink`, not `text-accent`: accent is reserved for interactive
 * affordances, and blue on a static label teaches users it is clickable.
 */
export function ExperienceCard({ company, role, description, logo }: Experience) {
  return (
    <div className="flex h-full flex-col rounded-lg bg-surface p-5 shadow-card transition-shadow hover:shadow-md">
      <LogoPlate src={logo} alt={company} size="md" />
      <h3 className="mt-4 text-h3 text-ink">{company}</h3>
      <p className="mt-1 text-caption font-medium text-ink">{role}</p>
      <p className="mt-2 text-caption text-ink-muted">{description}</p>
    </div>
  );
}
