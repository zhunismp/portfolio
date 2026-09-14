'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <header className="glass-nav">
      <div className="glass-nav__material" aria-hidden="true" />
      <div className="glass-nav__edge" aria-hidden="true" />

      <nav
        aria-label="Primary"
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
                  aria-current={active ? 'page' : undefined}
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
