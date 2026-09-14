import { Hero } from '@/components/hero';
import { Reveal } from '@/components/reveal';
import { Section } from '@/components/section';
import { StatsBand } from '@/components/stats-band';
import { ExperienceMarquee } from '@/components/experience-marquee';
import { TechStack } from '@/components/tech-stack';
import { ContactCta } from '@/components/contact-cta';
import { profile } from '@/data/profile';
import { site } from '@/data/site';

export default function Home() {
  return (
    <div className={site.container}>
      <Hero />

      {/* No heading. The old one existed only to name the landmark and was
          visually hidden; giving it a visible heading now would be a design
          change nobody asked for, so the band stands on its own. */}
      <section id="stats" className="py-20 md:py-24">
        <Reveal>
          <StatsBand />
        </Reveal>
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
        subcopy="The tools I have experienced with."
      >
        <TechStack />
      </Section>

      {/* Renders its own <section> — see the comment in contact-cta.tsx for why
          this one does not use <Section>. */}
      <ContactCta />
    </div>
  );
}
