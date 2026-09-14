export type Project = {
  /** Used as the React key and the card heading. */
  name: string;
  /** One or two sentences. Shown on the card. */
  description: string;
  /** Tech names, free-form. Rendered as small chips. */
  stack: string[];
  /** Optional live URL. Omit and the card renders without the visit link. */
  url?: string;
  /** Optional source URL. */
  repo?: string;
  /** Optional screenshot in /public. Omit and the card renders text-only. */
  image?: string;
  /** Optional year, e.g. '2026'. */
  year?: string;
};

/**
 * TEMPLATE — add entries here and /projects renders them automatically.
 * While this array is empty the route shows an empty state instead of a grid.
 *
 * export const projects: Project[] = [
 *   {
 *     name: 'Flights Inspector',
 *     description:
 *       'Internal tool that visualizes the flight pricing pipeline, surfacing where '
 *       + 'each fare component is applied.',
 *     stack: ['TypeScript', 'React', 'Scala'],
 *     url: 'https://example.com',
 *     repo: 'https://github.com/zhunismp/example',
 *     image: '/projects/flights-inspector.png',
 *     year: '2026',
 *   },
 * ];
 */
export const projects: Project[] = [];
