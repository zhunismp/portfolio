export const profile = {
  name: 'Kobkit Ruangsuriyakij',
  /** Split for the hero's two-line display treatment. */
  nameLines: ['Kobkit', 'Ruangsuriyakij'] as const,
  eyebrow: 'Software Engineer',
  bio:
    'Passionate software engineer with 1+ years experience building scalable web ' +
    'applications and distributed systems. Able to wear many hats from build to deploy.',
  tagline: 'Eager to learn, fast to adapt, build at scale.',
  /** Literal, not derivable from the experience list. */
  yearsExperience: '1+',

  /**
   * Closing card content.
   *
   * One string with a measure constraint rather than the hero's hard-<br>
   * nameLines pattern: at text-h1 on a 320px viewport a forced break wraps again
   * anyway, so the break would fight the layout instead of controlling it.
   */
  closingHeadline: 'Let’s build something at scale.',
} as const;
