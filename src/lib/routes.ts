// Links to pages that may be drafts or not built yet. A helper returns null when the page
// must not be linked: a draft in production (see isPublic in ./env), or a page whose
// content does not exist yet. Cases and legal pages are wired up in stages 5 and 6.
export async function caseHref(_slug: string): Promise<string | null> {
  return null;
}

export async function legalHref(_page: 'privacy' | 'terms'): Promise<string | null> {
  return null;
}

export const serviceHref = (slug: string) => `/services/${slug}`;

// Public routes for the sitemap.
export async function getPublicRoutes(): Promise<string[]> {
  return ['/'];
}
