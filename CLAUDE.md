# CLAUDE.md — Diana Romanova services site

## What this is
A simple, fast, non-animated multi-page services/portfolio site for Diana Romanova (Warsaw, remote). It sells fixed-scope services to DTC / e-commerce brands. It is separate from her heavy Next.js portfolio. Traffic comes from cold outreach and job/client applications, so clarity and trust beat flashiness.

Language of the site: English. First person ("I"), one person, not an agency.

## Pages
- Home (nav, hero, about strip with 3 stat columns, selected work, services grid, how I work, FAQ, CTA form, footer)
- 5 service pages: Store Teardown, Product Page Sprint, Email Flows, Store Refresh, Ops & AI Systems (the last one is a LONG page with its own layout)
- 3 case pages: ORA Studio, ModaBlvck, The System Club
- Text pages: Privacy Policy, Terms & Delivery Guarantee
- Booking: Cal.com embedded widget (page or popup, undecided; build as popup + fallback link)

## Source of truth
1. **Design:** Figma file key `https://www.figma.com/design/iZyXFbTsyWM6F1Bl3BenCd/Services-website?node-id=0-1&t=FQ62Y5TOMWg2VayR-1` (Landing page node `10-797`, 1280px desktop). Also frames for: service template, Ops & AI service page, case template, text pages. Pull tokens (colors, type, spacing) from Figma; do not guess.
2. **Copy:** everything in `/content`. Never invent or rewrite copy, prices, numbers, tool names, claims or testimonials. If copy is missing, leave a visible `CHECK:` marker in the content file and ask Diana.
3. If Figma and `/content` disagree (rule set by Diana):
   - **Figma wins** on layout, structure, visual design and the wording of existing blocks.
   - **/content wins** on facts: prices, timelines, package contents, guarantee rules, tool lists, case roles.
   - Where Figma has outdated facts, use `/content` and list the Figma fix in `content/OPEN-DECISIONS.md`.
   - Anything this rule does not cover: do not guess, list it for Diana in `content/OPEN-DECISIONS.md`.
4. Placeholder text in Figma frames (case and text page templates) is layout only; never copy it.

## Mobile
Designs are **desktop only for now**. Mobile frames will be added by Diana later. Build responsive with sensible fluid layouts (single column stacking, no horizontal scroll), but mark mobile as provisional and do not polish it to pixel level until mobile frames exist.

## Stack (proposal, confirm with Diana at stage 0)
- Astro, static output, minimal client JS, no animation libraries.
- Motion (changed by Diana at the design review): subtle scroll reveal on all pages, smooth FAQ accordion (one item open at a time), smooth expansion of the Selected Works cards. CSS transitions plus small inline/vanilla scripts only; everything respects `prefers-reduced-motion` and works without JS.
- Layout (Diana, design review): side gutters 56px on desktop (never smaller), wider than the 1280px Figma frame; columns are proportional to the Figma 1072px content column. Footer card and full-width bands use a 32px inset on the sides and bottom.
- Content in `/content` (Markdown with frontmatter / JSON) rendered through templates in `/src`. Templates: `ServicePage`, `OpsServicePage`, `CasePage`, `TextPage`, `Home`.
- Deploy: Vercel on a `.vercel.app` URL for now (no custom domain yet). Add `noindex` (meta robots + `X-Robots-Tag`) while on `.vercel.app`.
- Form: Formspree or Web3Forms (verify current free-tier limits before choosing). Fields: service chips, Name, Email, Store link (to add), Project details, consent checkbox that links to Privacy Policy, Submit.
- Booking: Cal.com embed. No analytics, so no cookie banner is needed. Do not add analytics or third-party trackers without asking.
- Build guard: a script that fails the build if any string `CHECK` or `TODO` appears in rendered output.
- Accessibility: semantic HTML, visible focus, alt text, contrast checked, forms with labels.

## Process
Work stage by stage, one commit per stage, and after each stage take screenshots and compare with Figma:
0. Read this file, `/content`, inspect Figma frames, propose structure and plan. **Wait for approval.**
1. Project setup, tokens, layout shell (nav, footer), build guard, noindex.
2. Home.
3. Service template + 4 service pages.
4. Ops & AI long page.
5. Case template + 3 cases.
6. Text pages + form + Cal.com.
7. QA: links, a11y, performance, Figma comparison, mobile pass (when frames exist).

## Honesty rules (hard)
- No invented metrics, clients, testimonials, logos or tools. Use only what is in `/content`.
- Guarantee is for **delivery, not business results**. Never write "guaranteed growth/conversion/revenue".
- Case roles: ORA Studio = Diana's own brand (founder, solo). ModaBlvck = employment (AI & E-commerce Operations Specialist, Sept 2024 to Apr 2026); publication permission confirmed by Diana. The System Club = founder, closed Oct 2026, shown as a build case.
- Diana writes Shopify Liquid and custom sections/pages. Do not write "no custom code" on the site.
- Stats on the About strip are not final (see OPEN-DECISIONS). Do not add "UGC videos made" or "AI agents built" counts.

## Drafts
Pages with `draft: true` (cases and legal pages until their copy is final) are left out of production builds: they never appear in nav, footer, sitemap or links, and always carry `noindex`. Preview builds show them with a banner. The CHECK/TODO guard still fails a production build if a page with markers is made public.

## Git
Commit messages end with:
```
Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_016LQZt2F487BrNs7z6izoNo
```
One branch per stage, based on `main` (`stage-1-setup`, `stage-2-home`, ...). Open a PR for each; Diana reviews and merges before the next stage starts. Do not force-push.

## Owner
Diana Romanova, uxromanova@gmail.com. She reviews in Russian; site copy stays in English. Keep questions short and ask only when blocked.
