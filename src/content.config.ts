import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    // legacy WordPress/Sanity compatibility
    excerpt: z.string().optional(),
    date: z.coerce.date().optional(),
    // presentation extras
    heroImage: z.string().optional(),
    metaTitle: z.string().optional(),
  }),
});

// Productpagina's uit de oude WordPress-site. Nu nog placeholders: de bron
// geeft HTTP 500, dus er is geen content om te migreren. De URL's blijven wel
// bestaan zodat ze later gevuld kunnen worden zonder redirects.
const products = defineCollection({
  loader: glob({ base: './src/content/products', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    slug: z.string(),
    category: z.string().optional(),
  }),
});

export const collections = { blog, products };
