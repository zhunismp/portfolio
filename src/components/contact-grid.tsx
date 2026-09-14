import { Linkedin, Github, Mail, Phone, ArrowUpRight } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { PressLink } from '@/components/press-link';
import { contacts, type ContactIcon } from '@/data/contacts';

/** The data layer stores a string key; this server component owns the mapping. */
const icons: Record<ContactIcon, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  phone: Phone,
};

/**
 * The hairline-gap grid, kept from the previous design: `gap-px` over a
 * `bg-separator` container paints the dividers with no extra elements.
 *
 * overflow-hidden is required for those hairlines to clip at the rounded
 * corners — which is why focus rings here must be inset (see globals.css).
 */
export function ContactGrid() {
  return (
    <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-separator sm:grid-cols-2">
      {contacts.map(({ label, value, href, icon, external }) => {
        const Icon = icons[icon];
        return (
          /* scale 0.99, not 0.97: the press delta shrinks as the surface grows,
             and 0.97 on a full-width row reads as a glitch rather than a press. */
          <PressLink
            key={label}
            href={href}
            scale={0.99}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="contact-row group flex items-center gap-4 bg-surface px-6 py-6 transition-colors hover:bg-surface-2"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-separator text-ink transition-colors group-hover:border-accent group-hover:text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-footnote font-mono uppercase text-ink-muted">
                {label}
              </span>
              <span className="block truncate text-body font-medium text-ink">{value}</span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </PressLink>
        );
      })}
    </Reveal>
  );
}
