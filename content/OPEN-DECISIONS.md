# Open decisions (ask Diana; never decide silently)

Rule for Figma vs /content (decided): Figma wins on layout, structure, visual design and wording of existing blocks; /content wins on facts (prices, timelines, package contents, guarantee rules, tool lists, case roles). Outdated facts in Figma are listed below as Figma fixes. Cases follow the Figma layout, filled only from cases.md; sections without content are hidden. Contact/booking page = CTA form block + inline Cal.com embed + fallback link and email (provisional, no frame). Text page template = Figma 24:2435, also used for thank-you and 404 (provisional).

Copy / design
1. Final stat trio in About block (see home.md).
2. Teardown price block: heading for the "credit" bullet. DECIDED by Figma: "Your teardown pays you back".
3. Returning-client discount: DECIDED 15%.
4. DECIDED: the free mini-look is done by Diana herself inside cold outreach (she reviews the store and writes what is not working and how she can help). It is not offered or promised anywhere on the site. Nothing to build.
5. FAQ answers for the 11 questions in the Figma landing are not written.
6. Figma fixes needed: Teardown card says "mockups for the top three" (remove number); Email Flows card text; Ops & AI position; Delivery Guarantee line near hero; Store link field in form; privacy link on consent checkbox; footer line; The System Club card photo mismatch.
7. Proof screenshots per service (Proof block stays empty without them).
8. ModaBlvck: permission to publish as a case. DECIDED: yes.
9. Which recording tool for Teardown walkthrough (for example Loom).
10. Confirm packages and the Ops & AI price range.
11. Revision rounds count; real availability for "How fast can you start".
12. Booking: separate page or popup.
13. Cost-to-run price table on Ops page: DO NOT publish numbers until verified on vendor pages (Make, ChatGPT, Gemini, Gorgias, Zendesk unchecked).

Legal (not legal advice; needs Polish accountant/lawyer)
- Business registration / registration-free option eligibility; invoicing clients abroad; Ukrainian FOP vs Polish tax residency.
- Terms, guarantee, refund wording; acceptance rule; IP transfer and portfolio rights; data protection (DPA); liability cap.
- Privacy Policy and Terms are outlines only until reviewed. Do not publish as final.

Figma fixes found at stage 0 (content wins; update Figma)
- Store Teardown page (12:948): price says "From $500" and "1 to 3 weeks"; content says From $300, 3 to 5 working days.
- Store Teardown page: How it works labels are Day 1 / Day 2 / Day 3 / Day 5; content has Day 1, Days 2 to 3, Days 3 to 4, Day 5.
- Case template (12:1187): Result block shows +58% / +43% / +36% placeholder metrics. These will never be rendered.
- Already fixed in Figma since the list in item 6: Store link field and the privacy link on the consent checkbox are in the CTA form.

Decided by Diana (stage 1 review)
- About stats: use the Figma set ("4+ Years in e-commerce", "2 stores run end to end with AI agents, no team", "7 Years across design, product and operations"). Replaces item 1.
- Ops & AI page: Figma holds the final content for this page (including the agents list). Build it from the Figma frame 22:1528, not from services/ops-ai-systems.md.
- Home "How a project runs": not on the site for now. Do not add.
- Service pages: no guarantee strip at the bottom. The guarantee is the "Delivery Guarantee" line in the top block; "Delivery Guarantee" links to the Terms & Delivery Guarantee page.

Stage 1 (setup)
- LinkedIn URL: DECIDED, https://www.linkedin.com/in/romanova23/
- Heading font JejuMyeongjo: DECIDED, licence confirmed by Diana (source: https://www.figma.com/fonts/jeju-myeongjo/).
- "Book a call" links point to /contact until the Cal.com link exists (stage 6).

Stage 2 (home)
- DECIDED: "More about me and my CV" will link to the CV file; until the final CV exists it is shown as plain text (not clickable).
- DECIDED: ModaBlvck may be published as a case (item 8).
- DECIDED: "outside Europe" answer: calls from 10:00 to 24:00 Warsaw time, covering Europe and the US. Wording on the site: "Yes, remotely. I take calls from 10:00 to 24:00 Warsaw time, so the hours work for both Europe and the US." Confirm the wording.
- DECIDED: Email Flows card mentions the template system ("... plus reusable email templates."). Figma fix: the Product Page Sprint card repeats this text; the site uses the home.md text.
- DECIDED: The System Club hover text and tags follow Figma. Card photo matches (item 6 resolved for this photo).
- DECIDED: answers for the five missing FAQ questions supplied by Diana.
- DECIDED: FAQ "What if the automation breaks?" on the home page uses the same answer as the Ops & AI page.
- Hover frames 6:146 / 6:195 / 6:224 use other photos than the landing frame. The site keeps the landing photos and adds the dark overlay on hover.
- Service cards have no timeline in Figma, so timelines show only on the service pages.
- Form service and Cal.com are connected at the end of the project (Diana); the form keeps its CHECK marker until then.

Stage 3 (service pages: Teardown, Product Page Sprint, Email Flows, Store Refresh)
- Service copy moved into frontmatter of content/services/*.md; original notes kept below and not rendered. Shared labels and repeated FAQ answers in content/shared.md frontmatter.
- Figma fix: Teardown "What you get" last bullet says "A short video walkthrough and/or a 30-minute call"; the call length depends on the package (Deep = 60 minutes), so the site uses the content bullet "A call or video walkthrough to go through the findings (format depends on the package)."
- DECIDED: the "After" line is not shown on the service pages.
- DECIDED: the price heading is just "Price" as in Figma; the range line is not shown.
- Proof block is hidden on all four pages until real screenshots exist (item 7). "Related work" links are not shown either.
- DECIDED: the banner and side images are placeholders; each service (and case) will get its own images from Diana.
- DECIDED: the care window is a FAQ entry on the four service pages. Question and answer were built from the notes in shared.md: "What happens after handoff?" / "You get a 14-day care window: anything I built that stops working is fixed free. New features and changes caused by your tools or business changing are not included." Confirm the wording.
- DECIDED (for now): Email Flows extras are shown as a note under the price cards.
- Tools for Product Page Sprint, Email Flows and Store Refresh were one sentence in the notes; on the page they are a bullet list with the same words (first letter capitalised, full stop added).
- Package descriptions are split into "- " lines by sentence, as in the Figma Teardown cards.
- Teardown walkthrough recording tool (item 9): the page says "a screen-recording tool" (Figma wording), no tool named.

Stage 4 (Ops & AI page)
- Built from the Figma frame 22:1528 (Diana: Figma has the final content for this page). Copy is in the frontmatter of content/services/ops-ai-systems.md; FAQ answers come from the notes in the same file (Figma has only the questions). Blocks from the notes that are not in Figma (Proof, "Where is the best place to start?", "Will it keep working over time?", the intro line of "What happens when it breaks", "Under the price" line) are not shown.
- The agents list follows Figma: one list titled "Agents I have built", including the agents the notes list under "can build" (Diana's decision for this page).
- Figma fix: step 3 "Accounts and access" repeats the Business core text. The site uses the notes text: "We create or connect the accounts the system runs on (AI platform, automation tool, helpdesk, store). They are in your name."
- Figma fix: step 6 label says "[ weeks 3 ]"; the site uses "[ week 3 ]" (notes).
- DECIDED: "What happens when it breaks?" without the space before the question mark (Figma fix).
- DECIDED: "Make.com" stays plain text, no link (Figma shows an auto-link).
- The page title is "Operations & AI Systems" (Figma); the home grid, form chips and nav keep the short name "Ops & AI Systems".
- The two dark bands ("What an AI system is", "What it costs to run") are Figma shader effects; they are exported from Figma as images (no WebGL, no JS).
- No running-cost numbers are shown (item 13); the Figma cost cards have none.

Stage 5 (case template)
- Case template from the Figma case frame (12:1187), filled with placeholders for now (Diana: copy later, approve the design first). Each case has its own file in content/cases/ with draft: true; all text fields start with "CHECK:" and show in grey in previews. Production builds leave the three case pages out (no links, no sitemap entries, noindex anyway).
- The Figma Result block shows +58% / +43% / +36%; these are placeholders and are never rendered. Result lines must be real, checkable facts.
- Figma fix: "Challange" is spelled "Challenge" on the site.
- Image slots use the Figma placeholder texture until Diana supplies real images per case.
- When the copy arrives: fill the fields in content/cases/<slug>.md (empty fields and sections hide), then set draft: false to publish.

Stage 6 (text pages, contact, thank-you, 404)
- Privacy Policy and Terms & Delivery Guarantee use the Figma text page template (24:2435). Both are drafts (draft: true in content/legal/*.md) with CHECK placeholders from legal-outline.md until a Polish accountant/lawyer reviews them; production builds leave them out, so the footer links, the consent-checkbox link and the "Delivery Guarantee" links appear only in previews for now.
- Terms page title is "Terms and Delivery Guarantee" (footer wording); the Figma frame's "Delivery Guarantee" is a section heading. The section uses the Figma wording (short version) followed by the remaining rules from shared.md verbatim, including the open "20 days (calendar or working days)" question.
- Contact page (/contact, provisional, no frame): CTA form block as the page heading, a booking section with a reserved space for the Cal.com inline embed, a fallback "Book a call directly" link and the email. All "Book a call" buttons on the site point to /contact.
- Email shown on the contact page: uxromanova@gmail.com (home.md notes: replace when a professional address exists).
- Thank-you page (/thanks) and 404 page: built on the text page template, provisional; title and text are CHECK placeholders. Diana: send one or two lines for each.
- Cal.com link and the form service are connected at the end of the project (Diana's decision); the CHECK markers stay until then.

Design review 1 (Diana's 10 points, stage-7-design)
- Done: text page title-to-text gap 40px; layout widened (56px gutters, proportional columns, content up to 1680px); footer full width with 32px inset; hero composition centred as in the updated Figma frame; smooth Selected Works card expansion; scroll reveal on all pages; FAQ: one item open, smooth open/close; price card titles in two lines (balanced wrapping); Ops "What an AI system is" band full width like the footer; "What it costs to run" footnote centred; contact page: booking widget first, no email form, heading "Book a call".
- Figma frames still show the 1280px layout with 104px gutters; the site follows Diana's review instead. Update Figma if it should stay the reference for widths.
- The animation reference site (norvo.framer.website) is blocked by this environment's network policy, so the motion was built from Diana's description and screenshots. Add the domain to Allowed domains if it should be matched more closely.

Design review 2 (stage-7b-states)
- Done: FAQ question column 536px (proportional), 16px padding in each question; scroll reveal 50px with a slower, softer curve; Selected Works: the row keeps the large-card height, so the image below never moves, and the swap is slower (1s) with a symmetric curve; interaction states from the Figma "States" frame (31:2831) for all clickable elements.
- Form error state: the red underline is in place; the small error message under a field ("error text" in Figma) needs copy for each case (empty name, invalid email, consent not ticked). Send it when the form service is connected.

Design review 3 (stage-7c-review3)
- Done: service pages FAQ link reads "Book a call" (Figma: "Book a free call"; Figma fix) with the header animation; proof placeholder images restored between the price block and the FAQ on the four standard service pages; Selected Works: names keep their weight on hover, hover title in regular weight, title at the top and tags at the bottom with 24px inside; services grid "Learn more" in regular; case Project Information values in black; hero elements appear one after another on page load.
- Fix: links that are also scroll-reveal targets kept the reveal transition and lost their hover animation; the reveal styles are now removed once an element has appeared.

Technical
- Form service choice (verify free limits). Cal.com account/link. Custom domain later.
- Mobile Figma frames to come later.
