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
    contact: z.object({ calUrl: z.string() }),
    thanks: z.object({ title: z.string(), text: z.string() }),
    notFound: z.object({ title: z.string(), text: z.string() }),
    bookingUrl: z.string(),
    email: z.string(),
  }),
});

// Service pages: content/services/*.md. Facts (name, price, timeline) plus the rendered fields.
// The Ops & AI page has its own layout and schema (stage 4), so its page fields are optional here.
const faqEntry = z.union([
  z.object({ q: z.string(), a: z.union([z.string(), z.array(z.string())]) }),
  z.object({ shared: z.enum(['finish', 'deliver', 'faster', 'care', 'credit']) }),
]);

// Blocks that only the long Ops & AI page has (Figma 22:1528).
const opsBlocks = z.object({
  match: z.object({
    eyebrow: z.string(),
    heading: z.string(),
    rows: z.array(z.object({ text: z.string(), strong: z.string(), after: z.string().optional() })),
  }),
  system: z.object({ heading: z.string(), text: z.string() }),
  keyMessage: z.string(),
  examples: z.object({ heading: z.string(), items: z.array(z.string()) }),
  agents: z.object({ heading: z.string(), items: z.array(z.object({ name: z.string(), text: z.string() })) }),
  cost: z.object({
    heading: z.string(),
    intro: z.string(),
    cards: z.array(z.object({ title: z.string(), text: z.string() })),
    footnote: z.string(),
  }),
  breaks: z.object({
    heading: z.string(),
    cards: z.array(z.object({ title: z.string(), tag: z.string().optional(), text: z.string() })),
  }),
});

const services = defineCollection({
  loader: glob({ base: './content/services', pattern: '*.md' }),
  schema: z
    .object({
      slug: z.string(),
      name: z.string(),
      from: z.number(),
      timeline: z.string(),
      template: z.enum(['ServicePage', 'OpsServicePage']),
      title: z.string().optional(), // page title when it differs from the short name
      pain: z.string().optional(),
      familiar: z.array(z.string()).optional(),
      get: z.array(z.string()).optional(),
      steps: z.array(z.object({ label: z.string(), text: z.string(), title: z.string().optional() })).optional(),
      need: z.array(z.string()).optional(),
      tools: z.array(z.string()).optional(),
      packages: z
        .array(
          z.object({
            price: z.string(),
            name: z.string(),
            popular: z.boolean().optional(),
            lead: z.string().optional(),
            items: z.array(z.string()),
            after: z.string().optional(),
          }),
        )
        .optional(),
      goesUpWith: z.string().optional(),
      priceNote: z.object({ heading: z.string().optional(), text: z.string() }).optional(),
      rushName: z.string().optional(),
      faq: z.array(faqEntry).optional(),
      ops: opsBlocks.optional(),
    })
    .refine(
      (d) =>
        d.template !== 'ServicePage' ||
        [d.pain, d.familiar, d.get, d.steps, d.need, d.tools, d.packages, d.goesUpWith, d.rushName, d.faq].every(
          (v) => v !== undefined,
        ),
      { message: 'A ServicePage needs pain, familiar, get, steps, need, tools, packages, goesUpWith, rushName and faq' },
    )
    .refine(
      (d) =>
        d.template !== 'OpsServicePage' ||
        [d.ops, d.pain, d.familiar, d.get, d.steps, d.need, d.tools, d.packages, d.goesUpWith, d.rushName, d.faq].every(
          (v) => v !== undefined,
        ),
      { message: 'The OpsServicePage needs ops plus the standard service fields' },
    ),
});

// Case pages: content/cases/*.md (one file per case; content/cases.md keeps the notes).
const cases = defineCollection({
  loader: glob({ base: './content/cases', pattern: '*.md' }),
  schema: z.object({
    draft: z.boolean().default(false),
    slug: z.string(),
    name: z.string(),
    intro: z.array(z.string()).default([]),
    info: z
      .object({
        industry: z.string().default(''),
        services: z.string().default(''),
        timeline: z.string().default(''),
        platform: z.string().default(''),
        year: z.string().default(''),
        project: z.string().default(''),
      })
      .default({ industry: '', services: '', timeline: '', platform: '', year: '', project: '' }),
    challenge: z.array(z.string()).default([]),
    solution: z.array(z.string()).default([]),
    result: z.array(z.string()).default([]),
    images: z.enum(['placeholder', 'none']).default('none'),
  }),
});

// Text pages (Privacy Policy, Terms & Delivery Guarantee): Markdown body in content/legal/*.md.
const legal = defineCollection({
  loader: glob({ base: './content/legal', pattern: '*.md' }),
  schema: z.object({
    draft: z.boolean().default(false),
    slug: z.enum(['privacy', 'terms']),
    title: z.string(),
  }),
});

// Shared service page labels and repeated FAQ answers: content/shared.md frontmatter.
const shared = defineCollection({
  loader: glob({ base: './content', pattern: 'shared.md' }),
  schema: z.object({
    servicePage: z.object({
      priceLabel: z.string(),
      timeLabel: z.string(),
      guaranteeLabel: z.string(),
      guaranteeText: z.string(),
      scrollLabel: z.string(),
      familiarHeading: z.string(),
      getHeading: z.string(),
      stepsHeading: z.string(),
      needHeading: z.string(),
      toolsHeading: z.string(),
      priceHeading: z.string(),
      popularLabel: z.string(),
      goesUpHeading: z.string(),
      questionsHeading: z.string(),
      bookLabel: z.string(),
    }),
    casePage: z.object({
      infoHeading: z.string(),
      industry: z.string(),
      services: z.string(),
      timeline: z.string(),
      platform: z.string(),
      year: z.string(),
      project: z.string(),
      challengeHeading: z.string(),
      solutionHeading: z.string(),
      resultHeading: z.string(),
    }),
    faq: z.record(z.enum(['finish', 'deliver', 'faster', 'care', 'credit']), z.object({ q: z.string(), a: z.string() })),
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

export const collections = { site, services, cases, legal, shared, home };
