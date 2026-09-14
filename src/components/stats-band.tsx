import { stats } from '@/data/stats';

/**
 * Reuses the hairline-gap trick from the original contact grid: the container's
 * background shows through 1px gaps, so the dividers cost no extra elements.
 */
export function StatsBand() {
  return (
    <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-separator">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-surface-2 px-4 py-8 text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block text-h1 text-ink">{stat.value}</span>
            <span className="mt-1 block text-label font-mono uppercase text-ink-muted">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
