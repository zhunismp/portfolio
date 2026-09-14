/**
 * `icon` is a string key, not a lucide component, so this module stays pure
 * serializable data with no React import. That keeps it from ever dragging a
 * component across a client boundary. contact-cta.tsx owns the key -> icon map.
 *
 * One flat array, deliberately. The closing section weights all four channels
 * equally, and the data shape says so rather than leaving the hierarchy — or the
 * absence of one — to the render.
 */
export type ContactIcon = 'mail' | 'linkedin' | 'github' | 'phone';

export type Contact = {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  /**
   * Drives target=_blank AND the trailing ArrowUpRight together, so the glyph
   * can never claim "opens elsewhere" for a link that does not navigate. `tel:`
   * is a protocol handoff, not a page navigation, so it is not external.
   */
  external: boolean;
};

export const contacts: Contact[] = [
  {
    label: 'Email',
    value: 'kobkit.zhun@gmail.com',
    /**
     * Gmail web compose, not `mailto:`. A mailto hands off to whatever client the
     * OS has registered, which on macOS is usually an unconfigured Mail.app — a
     * dead end. Deliberately NOT /mail/u/0/; pinning account 0 breaks anyone
     * signed into more than one Google account.
     */
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kobkit.zhun@gmail.com',
    icon: 'mail',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: '@kobkit-ruangsuriyakij',
    href: 'https://www.linkedin.com/in/kobkit-ruangsuriyakij',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'GitHub',
    value: '@zhunismp',
    href: 'https://github.com/zhunismp',
    icon: 'github',
    external: true,
  },
  {
    label: 'Phone',
    value: '+66 61 661 6514',
    href: 'tel:+66616616514',
    icon: 'phone',
    external: false,
  },
];
