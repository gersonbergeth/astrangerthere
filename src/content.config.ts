import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const poems = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/poems",
  }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.string().optional(),
    location: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { poems };