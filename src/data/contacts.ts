/**
 * `icon` is a string key, not a lucide component, so this module stays pure
 * serializable data with no React import. That keeps it from ever dragging a
 * component across a client boundary. contact-grid.tsx owns the key -> icon map.
 */
export type ContactIcon = 'linkedin' | 'github' | 'mail' | 'phone';

export type Contact = {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  external: boolean;
};

export const contacts: Contact[] = [
  {
    label: 'LinkedIn',
    value: '@kruangsuriya',
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
    label: 'Email',
    value: 'kobkit.zhun@gmail.com',
    href: 'mailto:kobkit.zhun@gmail.com',
    icon: 'mail',
    external: false,
  },
  {
    label: 'Phone',
    value: '+66 61 661 6514',
    href: 'tel:+66616616514',
    icon: 'phone',
    external: false,
  },
];
