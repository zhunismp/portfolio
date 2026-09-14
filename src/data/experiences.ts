export type Experience = {
  company: string;
  role: string;
  description: string;
  logo: string;
};

export const experiences: Experience[] = [
  {
    company: 'LSEG',
    role: 'Associate Software Engineer',
    description: 'Built and maintain time-series data platform for financial market data',
    logo: '/lseg-logo.png',
  },
  {
    company: 'Agoda',
    role: 'Software Engineer Intern',
    description:
      "Built a flights inspector tool that visualizes Agoda's flight pricing pipeline",
    logo: '/agoda-logo.svg',
  },
  {
    company: '100X',
    role: 'Full Stack Developer Intern',
    description: 'Built BFF application to bridge frontend and trading engine microservices',
    logo: '/100x-logo.jpeg',
  },
];
