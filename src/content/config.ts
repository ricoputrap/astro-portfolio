import { defineCollection, z } from "astro:content";

export const collections = {
  "posts": defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string(),
      author: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      cover: z.string().optional(),
      draft: z.boolean().optional()
    })
  }),
  "docs": defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string())
    })
  })
}