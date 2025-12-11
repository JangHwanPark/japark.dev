export const TECH_STACKS = [
  'React',
  'NextJS',
  'TypeScript',
  'Tailwind',
  'Figma',
  'Git',
  'NodeJS',
  'Express',
  'MongoDB',
  'GSAP',
  'Storybook',
  'Vitest',
  'Spring Boot',
  'MySQL',
] as const;

export type TechStack = (typeof TECH_STACKS)[number];