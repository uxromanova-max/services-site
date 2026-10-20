import { getCollection, getEntry } from 'astro:content';
import { isPublic } from './env';

// Links to pages that may be drafts or not built yet. A helper returns null when the page
// must not be linked: a draft in production, or a page whose content does not exist yet.
export async function caseHref(slug: string): Promise<string | null> {
  const entry = await getEntry('cases', slug);
  return isPublic(entry) ? `/work/${slug}` : null;
}

export async function legalHref(page: 'privacy' | 'terms'): Promise<string | null> {
  const entry = await getEntry('legal', page);
  return isPublic(entry) ? `/${page}` : null;
}

export const serviceHref = (slug: string) => `/services/${slug}`;

// Cases built in this build: drafts are left out of production.
export const getBuiltCases = () => getCollection('cases', (c) => isPublic(c));

// Public routes for the sitemap: drafts never appear here, not even in previews.
export async function getPublicRoutes(): Promise<string[]> {
  const services = await getCollection('services');
  const cases = await getCollection('cases', (c) => !c.data.draft);
  const legal = await getCollection('legal', (l) => !l.data.draft);
  return [
    '/',
    ...services.map((s) => serviceHref(s.data.slug)),
    ...cases.map((c) => `/work/${c.data.slug}`),
    ...legal.map((l) => `/${l.data.slug}`),
    '/contact',
  ];
}
