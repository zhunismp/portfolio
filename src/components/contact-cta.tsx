import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

import { PressLink } from '@/components/press-link';
import { Reveal } from '@/components/reveal';
import { contacts, type ContactIcon } from '@/data/contacts';
import { profile } from '@/data/profile';
import { site } from '@/data/site';

/** The data layer stores a string key; this server component owns the mapping. */
const icons: Record<ContactIcon, typeof Mail> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  phone: Phone,
};

/**
 * The page's closing call to action, sized to take over the viewport.
 *
 * `min-h-svh`, not `dvh` or `vh`: svh is the stable unit that does not change as
 * mobile browser chrome collapses, so the section cannot resize under a scrolling
 * finger. `min-h` plus padding rather than a fixed height, so a large user
 * text-size setting grows the section instead of overflowing it — the same
 * reasoning as the hero.
 *
 * Deliberately NOT scroll-snapped. Snap would hijack native scroll, which is the
 * one genuinely momentum-driven surface on this site and one the browser already
 * implements correctly on the compositor with the platform's own constants.
 *
 * All four channels carry equal weight — same cell size, same icon size, same
 * type. The only thing that differs between them is whether they navigate away,
 * and that difference is carried honestly by one flag.
 *
 * Renders its own <section> instead of using <Section>, which is the one place on
 * the site that earns the exception: Section renders its heading above its
 * children inside a normally-padded block, and neither the full-height flex
 * centring nor a single visible h2 naming the landmark survives that.
 */
export function ContactCta() {
  return (
    <section
      id={site.sectionIds.contact}
      className="flex min-h-svh flex-col justify-center py-24"
    >
      <Reveal index={0}>
        {/* text-balance is load-bearing, not polish: at 375px the natural break
            leaves "scale." stranded alone on the last line. */}
        <h2 className="mx-auto max-w-[24ch] text-balance text-center text-h1 text-ink">
          {profile.closingHeadline}
        </h2>
      </Reveal>

      {/* The hairline-gap trick from stats-band.tsx: the container's background
          shows through 1px gaps, so the dividers cost no extra elements.
          overflow-hidden is what clips them at the rounded corners — which is
          also why the focus ring on these cells must be inset (see globals.css).

          Two columns below lg: four across at 375px would be ~82px per cell,
          which fits neither a 40px icon nor a readable email address. */}
      <Reveal index={1} className="mt-14">
        {/* auto-rows-fr: without it grid rows size to content, so at 375px the
            row holding the wrapped email address stood 18px taller than the one
            below it — measured. Equal weighting has to mean equal cells. */}
        <ul className="contact-row grid auto-rows-fr grid-cols-2 gap-px overflow-hidden rounded-xl bg-separator lg:grid-cols-4">
          {contacts.map(({ label, value, href, icon, external }) => {
            const Icon = icons[icon];
            return (
              <li key={label} className="flex">
                {/* scale 0.99, not 0.97: the press delta has to shrink as the
                    surface grows, or a cell this large reads as glitching
                    rather than being pressed. */}
                <PressLink
                  href={href}
                  scale={0.99}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="contact-cell group relative flex min-h-44 w-full flex-col items-center justify-center gap-4 bg-surface px-4 py-10 text-center transition-colors hover:bg-surface-2"
                >
                  {/* Corner, not inline beside the label. Inline, the glyph is
                      part of the centred group, so the label ends up ~12px left
                      of the icon directly above it — measured — and the icon/label
                      axis breaks in the three external cells but not the phone
                      one. In the corner it still says "this leaves the site"
                      while every label stays centred under its icon.
                      Gated on the same flag as target=_blank, so it can never
                      claim "opens elsewhere" for the tel: handoff. */}
                  {external ? (
                    <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  ) : null}
                  {/* strokeWidth 1.5, not lucide's default 2: lucide holds stroke
                      width constant at every size, which reads heavy once a glyph
                      is scaled to 48px. Thinning it is the optical correction.

                      No logo plate needed — these are stroke glyphs on
                      currentColor, so they inherit --ink and stay legible in both
                      schemes. Plates exist for the tech chips' bitmap and
                      unfilled brand marks, which is a different problem. */}
                  <Icon
                    className="h-10 w-10 text-ink transition-colors group-hover:text-accent lg:h-12 lg:w-12"
                    strokeWidth={1.5}
                  />
                  {/* w-full is load-bearing. In a column flex with items-center the
                      text box is sized to fit-content, so it had no width to wrap
                      against and the email address overflowed the cell on both
                      sides at 320px. Constraining it gives break-words a boundary.

                      min-h-9 reserves two lines for the value. Without it the
                      content groups differ in height by one line, and since the
                      cell centres its group, the icons in adjacent cells sit at
                      different heights — visible at 375px, where the LinkedIn
                      handle wraps but the email address does not. */}
                  <span className="w-full min-w-0">
                    <span className="block text-body font-medium text-ink">{label}</span>
                    <span className="mt-1 block min-h-9 break-words text-footnote text-ink-muted">
                      {value}
                    </span>
                  </span>
                </PressLink>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
