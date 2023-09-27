import { defineCollection, z } from "astro:content";

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(), // z.coerce.date(),
    categories: z.string(),
  }),
});

export const collections = { events };
