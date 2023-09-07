import { defineCollection, z } from "astro:content";

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // date: z.coerce.date(),
    categories: z.string(),
  }),
});

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, events };
