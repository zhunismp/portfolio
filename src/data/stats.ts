import { profile } from '@/data/profile';
import { experiences } from '@/data/experiences';
import { techStacks } from '@/data/tech';

export type Stat = { value: string; label: string };

/** Derived, so adding a job or a tech updates the band for free. */
export const stats: Stat[] = [
  { value: profile.yearsExperience, label: 'Years' },
  { value: String(experiences.length), label: 'Companies' },
  { value: String(Object.values(techStacks).flat().length), label: 'Technologies' },
];
