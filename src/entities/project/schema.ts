import {z} from 'zod';
import {PROJECT_ROLE, TECH_STACKS} from '@/shared/constants';

export const ProjectSchema = z.object({
  id: z.string(),
  status: z.enum(['CANCELLED', 'INPROGRESS', 'COMPLETED']),
  statusDetail: z.string().optional(),
  titleImg: z.string().optional().or(z.literal('')),
  name: z.string(),
  dateRange: z.string(),
  description: z.string(),
  projectType: z.enum(['TEAM', 'PERSONAL']),
  teamSize: z.number().optional(),
  role: z.array(z.enum(PROJECT_ROLE)),
  stack: z.array(z.enum(TECH_STACKS)),
  github: z.string().url().or(z.literal('')),
  demo: z.string().url().optional(),
  responsibilities: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
  challenges: z.array(z.string()).default([]),
  collaborationTools: z.array(z.string()).optional(),
  testCoverage: z.string().optional(),
  paperLink: z.string().url().optional(),
  npmPackage: z.string().url().optional(),
  awards: z.array(z.string()).optional(),
});

export type Project = z.infer<typeof ProjectSchema>;
