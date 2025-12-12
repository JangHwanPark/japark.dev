import {z} from "zod";

export const TechSchema = z.object({
  id: z.string(),
  name: z.string(),
  tech: z.string(),
  color: z.string(),
  category: z.string(),
  usage: z.string(),
})

export type Tech = z.infer<typeof TechSchema>