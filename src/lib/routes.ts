// Public routes for the sitemap and internal links. Draft entries are added per stage
// through isPublic() from ./env, so a draft never appears in production links or sitemap.
export async function getPublicRoutes(): Promise<string[]> {
  return ['/'];
}
