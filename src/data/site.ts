export const site = {
  /** Shared container. 64rem is a good measure for this content. */
  container: 'mx-auto max-w-5xl px-6',
  nav: [
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blogs' },
  ],
  sectionIds: {
    about: 'about',
    experience: 'experience',
    techStack: 'tech-stack',
    contact: 'contact',
  },
} as const;
