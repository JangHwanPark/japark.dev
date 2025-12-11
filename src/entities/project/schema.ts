import { z } from 'zod';
import { TECH_STACKS, TECH_ROLE } from '@/shared/constants';

export const ProjectSchema = z.object({
  id: z.string(),
  status: z.enum(['CANCELLED', 'INPROGRESS', 'COMPLETED']),
  titleImg: z.string().optional().or(z.literal('')),
  name: z.string(),
  dateRange: z.string(),
  description: z.string(),
  stack: z.array(z.enum(TECH_STACKS)),
  role: z.array(z.enum(TECH_ROLE)),
  projectType: z.enum(['TEAM', 'PERSONAL']),
  github: z.string().url().or(z.literal('')),
  demo: z.string().url().optional(),
  teamSize: z.number().optional(),
  testCoverage: z.string().optional(),
  paperLink: z.string().url().optional(),
  npmPackage: z.string().url().optional(),
  awards: z.array(z.string()).optional(),
});

export type Project = z.infer<typeof ProjectSchema>;
