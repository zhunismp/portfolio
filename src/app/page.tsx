import Image from 'next/image';
import { Linkedin, Github, Mail, Phone, ArrowUpRight } from 'lucide-react';

import { profile } from '@/data/profile';
import { experiences } from '@/data/experiences';
import { techStacks, categoryLabels, techCategories } from '@/data/tech';
import { contacts, type ContactIcon } from '@/data/contacts';

const contactIcons: Record<ContactIcon, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  phone: Phone,
};

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <span className="mb-5 block h-px w-10 bg-accent" />
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function TechStack() {
  return (
    <div className="border-t border-border">
      {techCategories.map((category) => (
        <div
          key={category}
          className="grid grid-cols-1 gap-4 border-b border-border py-7 md:grid-cols-[180px_1fr] md:gap-8"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:pt-2.5">
            {categoryLabels[category]}
          </h3>
          <ul className="flex flex-wrap gap-3">
            {techStacks[category].map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2.5 rounded-md border border-border bg-surface px-3.5 py-2 transition-colors hover:border-accent/60"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="reveal flex min-h-dvh flex-col justify-center py-20">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {profile.eyebrow}
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {profile.nameLines[0]}
              <br />
              {profile.nameLines[1]}
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted">
              {profile.bio}
            </p>
            <p className="mt-8 border-l-2 border-accent pl-5 text-base leading-relaxed text-foreground">
              {profile.tagline}
            </p>
          </div>

        </section>

      <Section id={site.sectionIds.about} title="How I work">
        <Reveal className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-8">
          <p className="text-label font-mono uppercase text-ink-muted">Approach</p>
          <p className="max-w-prose text-body-lg text-ink-muted">{profile.bio}</p>
        </Reveal>
      </Section>

      <Section
        id={site.sectionIds.experience}
        title="Where I've worked"
        subcopy="Teams I've shipped production systems with."
      >
        <Reveal>
          <ExperienceMarquee />
        </Reveal>
      </Section>

      <Section
        id={site.sectionIds.techStack}
        title="What I build with"
        subcopy="The tools I reach for, grouped by where they sit in the stack."
      >
        <TechStack />
      </Section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-20">
          <SectionHeading title="Get In Touch" />
          <p className="mb-12 max-w-2xl text-muted">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
          </p>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {contacts.map(({ label, value, href, icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 bg-surface px-6 py-6 transition-colors hover:bg-background focus-visible:bg-background focus-visible:outline-none"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                  {(() => {
                  const Icon = contactIcons[icon];
                  return <Icon className="h-5 w-5" />;
                })()}
                </span>
                <span className="flex-1">
                  <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {label}
                  </span>
                  <span className="block font-medium text-foreground">{value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-sm text-muted">
            Designed and built by Kobkit Ruangsuriyakij with ❤️ and Claude of course.
          </p>
          <p className="mt-2 font-mono text-xs text-muted">© 2026 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
