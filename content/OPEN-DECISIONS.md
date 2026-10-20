# Open decisions (ask Diana; never decide silently)

Rule for Figma vs /content (decided): Figma wins on layout, structure, visual design and wording of existing blocks; /content wins on facts (prices, timelines, package contents, guarantee rules, tool lists, case roles). Outdated facts in Figma are listed below as Figma fixes. Cases follow the Figma layout, filled only from cases.md; sections without content are hidden. Contact/booking page = CTA form block + inline Cal.com embed + fallback link and email (provisional, no frame). Text page template = Figma 24:2435, also used for thank-you and 404 (provisional).

Copy / design
1. Final stat trio in About block (see home.md).
2. Teardown price block: heading for the "credit" bullet (name undecided).
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

Technical
- Form service choice (verify free limits). Cal.com account/link. Custom domain later.
- Mobile Figma frames to come later.
