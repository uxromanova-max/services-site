// Production = the Vercel production deployment (or BUILD_TARGET=production locally).
// Drafts are left out of production builds; previews and dev show them with a banner.
export const isProduction =
  process.env.VERCEL_ENV === 'production' || process.env.BUILD_TARGET === 'production';

// Search indexing stays off until the site moves from .vercel.app to its own domain.
// To launch: set ALLOW_INDEXING=true and remove the X-Robots-Tag header from vercel.json.
export const allowIndexing = process.env.ALLOW_INDEXING === 'true';

export const isPublic = (entry: { data: { draft?: boolean } } | undefined) =>
  !!entry && !(isProduction && entry.data.draft);
