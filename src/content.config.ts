import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Site-wide strings (nav, footer, CTA block). One entry, loaded from content/site.json.
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
    cta: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      text: z.string(),
      serviceLabel: z.string(),
      otherLabel: z.string(),
      fields: z.object({
        name: z.string(),
        email: z.string(),
        storeLink: z.string(),
        details: z.string(),
      }),
      consentLead: z.string(),
      consentLink: z.string(),
      submit: z.string(),
      bookLead: z.string(),
      bookLabel: z.string(),
      formAction: z.string(),
    }),
    bookingUrl: z.string(),
    email: z.string(),
  }),
});

// Service facts (name, price, timeline) from the frontmatter of content/services/*.md.
// The page body schema is added with the service templates (stage 3).
const services = defineCollection({
  loader: glob({ base: './content/services', pattern: '*.md' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    from: z.number(),
    timeline: z.string(),
    template: z.enum(['ServicePage', 'OpsServicePage']),
  }),
});

const home = defineCollection({
  loader: glob({ base: './content', pattern: 'home.md' }),
  schema: z.object({
    hero: z.object({
      headline: z.array(z.string()).length(4),
      subline: z.string(),
      guarantee: z.array(z.string()),
      button: z.string(),
      proof: z.string(),
    }),
    about: z.object({
      heading: z.string(),
      text: z.string(),
      link: z.object({ label: z.string(), href: z.string() }), // empty href: shown as plain text
      portraitAlt: z.string(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })),
    }),
    work: z.object({
      heading: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          case: z.string(),
          image: z.enum(['ora', 'modablvck', 'system-club']),
          description: z.string(),
          tags: z.string(),
          note: z.string().optional(),
        }),
      ),
      wideCaption: z.string(),
    }),
    services: z.object({
      heading: z.string(),
      guaranteeLead: z.string(),
      guaranteeLink: z.string(),
      learnMore: z.string(),
      items: z.array(
        z.union([
          z.object({ photo: z.literal(true) }),
          z.object({ service: z.string(), text: z.string(), dark: z.boolean().optional() }),
        ]),
      ),
      ongoingHeading: z.string(),
      ongoingText: z.string(),
    }),
    faq: z.object({
      heading: z.string(),
      bookLabel: z.string(),
      items: z.array(z.object({ q: z.string(), a: z.union([z.string(), z.array(z.string())]) })),
    }),
  }),
});

export const collections = { site, services, home };
