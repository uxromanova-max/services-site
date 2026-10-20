// @ts-check
import { defineConfig } from 'astro/config';

// Absolute URLs (sitemap, robots) use the deployment URL; set SITE_URL once a custom domain exists.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Only the Cal.com embed (stage 6) will ship client JS; keep Astro from adding prefetch scripts.
  prefetch: false,
});
