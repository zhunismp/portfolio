import Image from 'next/image';
import { Linkedin, Github, Mail, Phone, ArrowUpRight, ArrowDown } from 'lucide-react';

type TechCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

const techStacks: Record<TechCategory, { name: string; logo: string }[]> = {
  frontend: [
    { name: 'TypeScript', logo: '/ts-logo.svg' },
    { name: 'React', logo: '/react-logo.svg' },
    { name: 'Next.js', logo: '/next-logo.svg' },
    { name: 'Tailwind', logo: '/tailwind-logo.svg' },
  ],
  backend: [
    { name: 'Go', logo: '/go-logo.svg' },
    { name: 'Scala', logo: '/scala-logo.svg' },
    { name: 'Java', logo: '/java-logo.svg' },
    { name: 'Spring Boot', logo: '/spring-logo.png' },
  ],
  database: [
    { name: 'PostgreSQL', logo: '/pgsql-logo.svg' },
    { name: 'Redis', logo: '/redis-logo.svg' },
  ],
  devops: [
    { name: 'Docker', logo: '/docker-logo.svg' },
    { name: 'Kubernetes', logo: '/k8s-logo.svg' },
    { name: 'ArgoCD', logo: '/argo-logo.svg' },
    { name: 'Terraform', logo: '/tf-logo.svg' },
    { name: 'Gitlab CI', logo: '/gitlab-logo.svg' },
    { name: 'Github Actions', logo: '/gh-action-logo.png' },
  ],
  tools: [
    { name: 'Kafka', logo: '/kafka-logo.webp' },
    { name: 'AWS', logo: '/aws-logo.png' },
    { name: 'GCP', logo: '/gcp-logo.webp' },
    { name: 'Jira', logo: '/jira-logo.webp' },
  ],
};

const tabLabels: Record<TechCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
  tools: 'Tools & Platforms',
};

const experiences = [
  {
    company: 'LSEG',
    role: 'Associate Software Engineer',
    description: 'Built and maintain time-series data platform for financial market data',
    logo: '/lseg-logo.png',
  },
  {
    company: 'Agoda',
    role: 'Software Engineer Intern',
    description: 'Building flights inspector tool for visualize pricing process of flights at Agoda',
    logo: '/agoda-logo.svg',
  },
  {
    company: '100X',
    role: 'Full Stack Developer Intern',
    description: 'Built BFF application to bridge frontend and trading engine microservices',
    logo: '/100x-logo.jpeg',
  },
];

const contacts = [
  {
    label: 'LinkedIn',
    value: '@kruangsuriya',
    href: 'https://www.linkedin.com/in/kobkit-ruangsuriyakij',
    Icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: '@zhunismp',
    href: 'https://github.com/zhunismp',
    Icon: Github,
    external: true,
  },
  {
    label: 'Email',
    value: 'kobkit.zhun@gmail.com',
    href: 'mailto:kobkit.zhun@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    label: 'Phone',
    value: '+66 61 661 6514',
    href: 'tel:+66616616514',
    Icon: Phone,
    external: false,
  },
];

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
  const categories = Object.keys(techStacks) as TechCategory[];

  return (
    <div className="border-t border-border">
      {categories.map((category) => (
        <div
          key={category}
          className="grid grid-cols-1 gap-4 border-b border-border py-7 md:grid-cols-[180px_1fr] md:gap-8"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:pt-2.5">
            {tabLabels[category]}
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
              Software Engineer
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Kobkit
              <br />
              Ruangsuriyakij
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted">
              Passionate software engineer with 1+ years experience building scalable web applications
              and distributed systems. Able to wear many hats from build to deploy.
            </p>
            <p className="mt-8 border-l-2 border-accent pl-5 text-base leading-relaxed text-foreground">
              Eager to learn, fast to adapt, build at scale.
            </p>
          </div>

          {/* <div className="mt-16">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
            >
              Experience
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div> */}
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 py-20">
          <SectionHeading title="Experiences" />
          <p className="mb-12 max-w-2xl text-muted">
            Companies I&apos;ve had the privilege to work with
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="group flex flex-col rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent/60 sm:p-5"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {exp.company}
                </h3>
                <p className="mt-0.5 text-sm text-accent">{exp.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="scroll-mt-24 py-20">
          <SectionHeading title="Tech Stack" />
          <p className="mb-12 max-w-2xl text-muted">
            Technologies and tools I specialize in
          </p>
          <TechStack />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-20">
          <SectionHeading title="Get In Touch" />
          <p className="mb-12 max-w-2xl text-muted">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
          </p>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {contacts.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 bg-surface px-6 py-6 transition-colors hover:bg-background focus-visible:bg-background focus-visible:outline-none"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                  <Icon className="h-5 w-5" />
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
