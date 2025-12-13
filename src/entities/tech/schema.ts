import {z} from "zod";

export const TechSchema = z.object({
  id: z.string(),
  label: z.string(),
  color: z.string(),
  category: z.string(),
  usage: z.string(),
  note: z.string().optional(),
})

export type Tech = z.infer<typeof TechSchema>