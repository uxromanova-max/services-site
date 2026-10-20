# Open decisions (ask Diana; never decide silently)

Rule for Figma vs /content (decided): Figma wins on layout, structure, visual design and wording of existing blocks; /content wins on facts (prices, timelines, package contents, guarantee rules, tool lists, case roles). Outdated facts in Figma are listed below as Figma fixes. Cases follow the Figma layout, filled only from cases.md; sections without content are hidden. Contact/booking page = CTA form block + inline Cal.com embed + fallback link and email (provisional, no frame). Text page template = Figma 24:2435, also used for thank-you and 404 (provisional).

Copy / design
1. Final stat trio in About block (see home.md).
2. Teardown price block: heading for the "credit" bullet (name undecided).
3. Returning-client discount: DECIDED 15%.
4. Is a quick first look at a store free? Not decided.
5. FAQ answers for the 11 questions in the Figma landing are not written.
6. Figma fixes needed: Teardown card says "mockups for the top three" (remove number); Email Flows card text; Ops & AI position; Delivery Guarantee line near hero; Store link field in form; privacy link on consent checkbox; footer line; The System Club card photo mismatch.
7. Proof screenshots per service (Proof block stays empty without them).
8. ModaBlvck: permission to publish as a case.
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

Not covered by the rule (Diana decides)
- About stats: Figma shows "4+ Years in e-commerce", "2 stores run end to end with AI agents, no team", "7 Years across design, product and operations"; home.md shows a different, not final set (item 1). Which set, and is "2 stores ... no team" a claim you want to make?
- Ops & AI page: Figma merges "Agents I have built" and "Agents I can build" into one list titled "Agents I have built". The structure says one list, the facts say two. How should the can-build agents be marked?
- Home "How a project runs" (home.md) has no block in the Figma landing. By the rule it is left out; confirm.
- Service pages: Figma has no guarantee strip or separate final button (the footer card acts as the CTA). By the rule they are left out; the guarantee line stays in the page top block. Confirm.

Stage 1 (setup)
- LinkedIn URL for the footer link is missing (marked CHECK in content/site.json).
- Heading font JejuMyeongjo (Sandoll / Jeju Province): free for commercial use per its distributors; embedded name table says "All rights reserved". Confirm the licence before launch.
- "Book a call" links point to /contact until the Cal.com link exists (stage 6).

Technical
- Form service choice (verify free limits). Cal.com account/link. Custom domain later.
- Mobile Figma frames to come later.
