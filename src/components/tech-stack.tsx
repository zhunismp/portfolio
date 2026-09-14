import { LogoPlate } from '@/components/logo-plate';
import { Reveal } from '@/components/reveal';
import { techStacks, categoryLabels, techCategories } from '@/data/tech';

/**
 * Kept from the previous design: a label column beside a wrapping chip list,
 * one hairline-separated row per category. It already reads like a macOS
 * Settings pane, so the restyle is colour and type only.
 *
 * Stagger is per ROW, not per chip. Twenty chips at 0.06s each would be 1.2s of
 * cascade before the last one appears — polish that costs the user time.
 */
export function TechStack() {
  return (
    <div className="border-t border-separator">
      {techCategories.map((category, i) => (
        <Reveal
          key={category}
          index={i}
          className="grid grid-cols-1 gap-4 border-b border-separator py-7 md:grid-cols-[180px_1fr] md:gap-8"
        >
          <h3 className="text-label font-mono uppercase text-ink-muted md:pt-2.5">
            {categoryLabels[category]}
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {techStacks[category].map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2.5 rounded-sm bg-surface px-3 py-2 shadow-card transition-colors hover:bg-surface-2"
              >
                <LogoPlate src={tech.logo} alt={tech.name} size="sm" />
                <span className="text-caption font-medium text-ink">{tech.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
