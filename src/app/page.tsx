import { Hero } from '@/components/hero';
import { Reveal } from '@/components/reveal';
import { Section } from '@/components/section';
import { StatsBand } from '@/components/stats-band';
import { ExperienceMarquee } from '@/components/experience-marquee';
import { TechStack } from '@/components/tech-stack';
import { ContactGrid } from '@/components/contact-grid';
import { profile } from '@/data/profile';
import { site } from '@/data/site';

export default function Home() {
  return (
    <div className={site.container}>
      <Hero />

      <Section id="stats" title="At a glance" srOnlyTitle>
        <Reveal>
          <StatsBand />
        </Reveal>
      </Section>

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

      <Section
        id={site.sectionIds.contact}
        title="Get in touch"
        subcopy="The fastest ways to reach me."
      >
        <ContactGrid />
      </Section>
    </div>
  );
}
