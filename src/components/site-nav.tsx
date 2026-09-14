'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as m from 'motion/react-m';
import { useScroll, useTransform } from 'motion/react';

import { site } from '@/data/site';

/**
 * Sticky translucent chrome with content scrolling underneath.
 *
 * `sticky` rather than `fixed` so `main` needs no top-padding compensation and
 * the nav cannot desync from layout. It occupies 52px of flow at the top, which
 * reads as page margin — the hero is 85svh partly to absorb that.
 *
 * The material lives in its own absolutely-positioned layer, separate from the
 * labels, so that when the scroll ramp is wired up the material can fade
 * without taking the labels with it.
 *
 * Two nav items plus a wordmark fit at 320px, so there is no hamburger, no
 * drawer, no focus trap and no scroll lock.
 */
export function SiteNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  /**
   * Deliberately not a spring. This is scroll-linked, so it must track the input
   * 1:1 and continuously — a boolean "scrolled" flag plus a spring would be a
   * discretised approximation of a value we already have exactly.
   *
   * Starting at 0 means the nav is fully transparent over the hero and the
   * material only arrives once there is content passing underneath it.
   */
  const materialOpacity = useTransform(scrollY, [0, 24], [0, 1]);

  return (
    <header className="glass-nav">
      <m.div
        className="glass-nav__material"
        style={{ opacity: materialOpacity }}
      />
      <m.div
        className="glass-nav__edge"
        style={{ opacity: materialOpacity }}
      />

      <nav
       
        className={`${site.container} relative flex h-[var(--nav-h)] items-center justify-between gap-4`}
      >
        <Link
          href="/"
          className="text-caption font-semibold text-ink transition-opacity hover:opacity-70"
        >
          <span className="hidden sm:inline">Kobkit Ruangsuriyakij</span>
          <span className="sm:hidden">Kobkit</span>
        </Link>

        <ul className="flex items-center gap-1">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    active
                      ? /* Opaque fill, not a lighter frosted pill. A translucent
                           pill on translucent chrome is the light-on-light stack
                           that collapses legibility. */
                        'block rounded-md bg-surface px-3 py-1.5 text-caption font-medium text-ink shadow-card'
                      : 'block rounded-md px-3 py-1.5 text-caption font-medium text-ink-muted transition-colors hover:text-ink'
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
