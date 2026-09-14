import { site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-separator">
      <div className={`${site.container} py-10`}>
        <p className="text-caption text-ink-muted">
          Designed and built by Kobkit Ruangsuriyakij with ❤️ and Claude of course.
        </p>
        <p className="mt-2 text-label font-mono text-ink-faint">
          © 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
}
