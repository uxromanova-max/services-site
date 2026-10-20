# Diana Romanova services site

Static Astro site. Copy lives in `/content`, design tokens in `src/styles/tokens.css`, rules in `CLAUDE.md`.

## Commands
| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node 22+) |
| `npm run dev` | Local dev server |
| `npm run build` | Build to `dist/`, then run the CHECK/TODO guard (warns on previews) |
| `BUILD_TARGET=production npm run build` | Production build: drafts left out, guard fails on any CHECK/TODO |
| `npm run check:markers` | Run the guard in strict mode on an existing `dist/` |

## Environment variables
| Variable | Effect |
|---|---|
| `VERCEL_ENV=production` (set by Vercel) or `BUILD_TARGET=production` | Production build: drafts excluded, guard is strict |
| `ALLOW_INDEXING=true` | Removes the `noindex` meta tag. Only set this on the custom domain, and remove the `X-Robots-Tag` header from `vercel.json` at the same time |
| `SITE_URL` | Absolute base URL for sitemap and robots (defaults to the Vercel production URL) |

## Indexing
While the site is on `.vercel.app`, every page sends `noindex, nofollow` twice: a meta tag and an `X-Robots-Tag` header (`vercel.json`).
