import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Site-wide strings (nav, footer). One entry, loaded from content/site.json.
const site = defineCollection({
  loader: file('content/site.json', { parser: (text) => ({ main: JSON.parse(text) }) }),
  schema: z.object({
    name: z.string(),
    location: z.array(z.string()),
    nav: z.object({ bookLabel: z.string() }),
    footer: z.object({
      heading: z.string(),
      bookLabel: z.string(),
      copyright: z.string(),
      madeBy: z.string(),
      privacyLabel: z.string(),
      termsLabel: z.string(),
      linkedinLabel: z.string(),
      linkedinUrl: z.string(),
    }),
    bookingUrl: z.string(),
    email: z.string(),
  }),
});

export const collections = { site };
