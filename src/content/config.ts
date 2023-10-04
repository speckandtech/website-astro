import { defineCollection, z } from "astro:content";

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    categories: z.string(),
  }),
});

export const collections = { events };
