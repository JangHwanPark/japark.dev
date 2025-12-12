import { z } from 'zod';

export const MilestoneSchema = z.object({
  id: z.string(),
  name: z.string(),
  // category: z.enum(['Work', 'Education', 'Activity']),
  category: z.enum(['Work', 'Education']),
  organization: z.string(),
  orgAlias: z.string().optional(),
  hideOrg: z.boolean().optional(),
  position: z.string(),
  employmentType: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance', 'Intern', 'Student']),
  startDate: z.string(),
  endDate: z.string().nullable().optional(),
  description: z.string(),
  achievements: z.array(z.string()).default([]),
  tech: z.array(z.string()).default([]),
  logo: z.string().url().optional(),
});

export type Milestone = z.infer<typeof MilestoneSchema>;