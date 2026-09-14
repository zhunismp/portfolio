import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { StatsBand } from '@/components/stats-band';
import { ExperienceCard } from '@/components/experience-card';
import { TechStack } from '@/components/tech-stack';
import { ContactGrid } from '@/components/contact-grid';
import { experiences } from '@/data/experiences';
import { profile } from '@/data/profile';
import { site } from '@/data/site';

export default function Home() {
  return (
    <div className={site.container}>
      <Hero />

      <Section id="stats" title="At a glance" srOnlyTitle>
        <StatsBand />
      </Section>

      <Section id={site.sectionIds.about} title="How I work">
        <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-8">
          <p className="text-label font-mono uppercase text-ink-muted">Approach</p>
          <p className="max-w-prose text-body-lg text-ink-muted">{profile.bio}</p>
        </div>
      </Section>

      <Section
        id={site.sectionIds.experience}
        title="Where I've worked"
        subcopy="Teams I've shipped production systems with."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
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
