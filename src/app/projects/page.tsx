import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

import { EmptyState } from '@/components/empty-state';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Projects — Kobkit Ruangsuriyakij',
  description: 'Things I have designed and built.',
};

export default function ProjectsPage() {
  return (
    <div className={site.container}>
      <header className="pt-16 pb-10 md:pt-20">
        <h1 className="text-h1 text-ink">Projects</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-ink-muted">
          Things I have designed, built and shipped.
        </p>
      </header>

      <div className="pb-24">
        {projects.length === 0 ? (
          <EmptyState
            title="Nothing here yet"
            body="Write-ups are on the way. In the meantime, the code is on GitHub and the roles are on the home page."
            action={
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                <a
                  href="https://github.com/zhunismp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body font-medium text-accent"
                >
                  <Github className="h-4 w-4" />
                  Browse GitHub
                </a>
                <Link href="/" className="text-body font-medium text-accent">
                  Back home
                </Link>
              </div>
            }
          />
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <li
                key={project.name}
                className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-card transition-shadow hover:shadow-md"
              >
                {project.image ? (
                  <div className="relative aspect-16/10 bg-surface-2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    {project.year ? (
                      /* The one legitimate use of the light glass weight: the
                         backdrop is an unpredictable screenshot, so translucency
                         is doing real legibility work rather than decoration. */
                      <span className="glass-light absolute top-3 right-3 rounded-sm px-2 py-1 text-footnote font-medium text-ink">
                        {project.year}
                      </span>
                    ) : null}
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-h3 text-ink">{project.name}</h2>
                  <p className="mt-2 text-caption text-ink-muted">{project.description}</p>

                  {project.stack.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-xs bg-surface-2 px-2 py-1 text-footnote text-ink-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-caption font-medium text-accent"
                      >
                        Visit
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-caption font-medium text-ink-muted transition-colors hover:text-ink"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </a>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
