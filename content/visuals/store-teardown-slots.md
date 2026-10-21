# Store Teardown: content for visuals (slots 1 and 3)

Purpose: this is the DATA for the images. A design agent builds the visuals from it. Do not rewrite or add findings.
Sample store: ORA Studio (Diana's own brand), page: Morning Journal product page.
Always label the visuals: "Sample report on my own store, ORA Studio."
CHECK before publishing (Diana): every finding against the live store; Effort and Impact scores are Diana's judgment, not measured.
Style: black / white / #F7F7F7, red #E5392B only for numbered markers, Geist + JejuMyeongjo (see Figma page "Content").

---

## SLOT 1 (main image): report page "Findings, ranked"

Format: one report page. Left: real screenshot of the product page (full height) with red numbered markers. Right: ranked list.

Header: STORE TEARDOWN · SAMPLE REPORT
Title: Six findings on one product page
Subtitle: Ranked by what is most likely to help people buy, weighing effort against impact.
Footer: Sample report on my own store, ORA Studio · Morning Journal product page

### Group A: Fix first
| # | Finding | What is wrong | Fix | Effort | Impact | Marker position on screenshot |
|---|---|---|---|---|---|---|
| 1 | Social proof is too thin for the price | The page shows one anonymous review ("1 review") and no review section. The home page repeats the same "1 review". | Collect reviews from early buyers and the creator community. Add a rating summary next to the price and a photo-review block below the description. | Medium | High | Star rating under the product title |
| 2 | Price and shipping tell different stories | Price is shown in zł, shipping is quoted in euros. The top banner and the text near the buy button list different free-shipping countries. | Show one currency logic and one list of countries, the same in the banner and on the page. | Low | High | Price and the shipping line under the buy button |
| 3 | Returns promise sits far from the buy button | "14-day returns" is mentioned, but the details are only in the footer. | Add one short returns line directly under the buy button, linking to the full policy. | Low | Medium | Area under the buy button |

### Group B: Fix next
| # | Finding | What is wrong | Fix | Effort | Impact | Marker position |
|---|---|---|---|---|---|---|
| 4 | Only "Buy now", no "Add to cart" | The only button skips the cart, so a visitor cannot keep browsing or add a second product. | Add "Add to cart" next to "Buy now". | Low | Medium | Buy button |
| 5 | Scarcity line may hurt trust | The page says "16 copies left". CHECK (Diana): is this a real inventory count? If it is static text, remove it. If it is real, keep it and say where the number comes from. | Tie the line to real inventory or remove it. | Low | Medium | Line under the buy button |

### Group C: Fix later
| # | Finding | What is wrong | Fix | Effort | Impact | Marker position |
|---|---|---|---|---|---|---|
| 6 | Key benefits live in images with empty alt text | The main benefits are inside images. The alt text is empty, so screen readers and search engines miss them. | Write alt text for the benefit images and repeat the top three benefits as real text. | Low | Low | Benefit images in the gallery |

Note for the agent: marker numbers 1 to 3 must match the Figma slide "Teardown sample / 2 Finding" (finding 1 = social proof).

---

## SLOT 3 (square): Effort / Impact matrix

Format: square chart. X axis = Effort (Low to High), Y axis = Impact (Low to High). Each finding is a numbered black dot, the same numbers as in slot 1. Dot labels: number only, short names in a legend on the side.
Scale: 0 to 10 on both axes.

| # | Short name | Effort (x) | Impact (y) |
|---|---|---|---|
| 1 | Add reviews | 6 | 9 |
| 2 | One price and shipping story | 2 | 9 |
| 3 | Returns near the button | 2 | 6 |
| 4 | Add to cart button | 2 | 5 |
| 5 | Scarcity line | 1 | 4 |
| 6 | Alt text for benefits | 1 | 2 |

Quadrant labels (light gray, small caps):
- Top left (low effort, high impact): DO FIRST
- Top right (high effort, high impact): PLAN IT
- Bottom left (low effort, low impact): FILL IN
- Bottom right (high effort, low impact): SKIP FOR NOW (empty in this sample)

Title: What to fix first
Subtitle: Each dot is one finding. Top left comes first.
Footer: Sample on my own store, ORA Studio. Scores are my judgment for this store.
Rule: dots 1 to 3 in black, 4 to 6 in gray, so the "fix first" group is visible.
