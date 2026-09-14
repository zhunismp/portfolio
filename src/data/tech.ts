export type TechCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export type Tech = { name: string; logo: string };

export const techStacks: Record<TechCategory, Tech[]> = {
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

export const categoryLabels: Record<TechCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
  tools: 'Tools & Platforms',
};

export const techCategories = Object.keys(techStacks) as TechCategory[];
