# Day 3 — Site-Locked Content

**Branch:** `feat/day3-site-locked-content`  
**Base:** `chore/pricing-restructure-marketing`  
**Preview:** _(populated after push — Vercel auto-aliases from branch name)_

Implements the May-15 comprehensive copy + composition dispatch end-to-end. Every section either rewritten to locked copy or built from scratch. No paraphrasing.

---

## Gap report vs base branch

| Section | Status on `chore` base | What changed in this PR |
|---|---|---|
| Top nav | unchanged | unchanged (per non-negotiables) |
| Hero pill `Live · Beta open in LA` | present | **REMOVED** |
| Hero italic subline | present | **REPLACED** with 14-item scrolling marquee |
| Hero headline `Cataloged. / Listed. / Sold. / In one shot.` | present | **REPLACED** with `Shoot it. List it. Sold.` + kicker `Your phone IS your POS.` |
| Hero body paragraph | present | **REPLACED** with locked body (camera-first / four-tiers wrap) |
| Hero dual CTA | present | **REDUCED** to single `Open your store` |
| Hero phone with skull avatar | present | **REPLACED** with `VS` initials + editorial 6-cell grid at 19.5:9 |
| All phones at `380/760` (1:2) | present | **CHANGED** to `240/520` (19.5:9, iPhone 15 Pro) |
| Phone bezel inset 12px | present | **CHANGED** to 8px |
| Section eyebrows `02–08` | present | **REMOVED** (every one) |
| Hairline `.section-divider` component | missing | **ADDED** (60px × 1px #D4CDC0) between every section transition |
| §02 `A new category, on purpose.` subhead | missing | **ADDED** locked subhead |
| §02 body paragraphs | partial | **REWRITTEN** all three with locked bold-lead copy |
| Black banner `You decide what you're worth.` | missing | **ADDED** after §02 |
| §03 `A new way to pay.` section | **missing entirely** | **BUILT** new section with 4 locked paragraphs (incl. `No paper, either.`) + inline-embedded v2 two-phone QR SVG (verbatim from `assets/phone-to-phone-qr-mockup.svg`) |
| §03 fee-math demo (math-card, slider, killshot, checkout-mockup, checkout-phone, afterpay-section) | present | **DELETED** entirely — HTML + JS + ~580 lines of dead CSS |
| New `After they tap pay.` section | missing | **BUILT** with locked intro + 4 brand-colored rail cards (Cash green, Venmo·PayPal·CashApp deep-link blue, Zelle scan purple, Card wallet black) |
| New `Set your price. Net your price.` section | missing | **BUILT** with locked 5 paragraphs + math table ($50/$52/$50, $100/$104/$100, $250/$258/$250) + `Same column twice. By design.` caption |
| §"And now for the best part." | partial | **REWRITTEN** pull quote (forest-italic), 4 locked roman numerals i–iv, `SHOP TIER AND UP` pill |
| Storefront phone | static `/storefront-stitched.jpg` | **REPLACED** with `/assets/storefront-iphone-capture.png` (live capture of swan-test.cheqout.store), `object-fit: cover; object-position: top` inside 19.5:9 frame at 8px inset |
| §"One photo." headline `Every shelf you have.` | present | **CHANGED** to `Everywhere you sell.` (italic forest second line) |
| One-photo body + 4 cards | partial | **REWRITTEN** body + 4 channel cards (POS / Storefront / TikTok / Instagram) with locked copy |
| Closing banner `Other platforms make you sync.` | inline callout | **REWORKED** as proper black-banner-2 with locked phrasing + `See Empire tier` CTA |
| Stacks 3 paragraphs | partial | **REWRITTEN** with locked `Move them to whatever bank accounts you want` (Level-1-honest, NOT auto-routing) |
| Stacks 5-stack visual amounts | partial | **UPDATED** to locked: Sales Tax 9%/$256, Quarterly 16%/$454, Rainy Day 15%/$426, Equipment 10%/$284, Operating 50%/$1,420 |
| Stacks `Live · X sales today` badge | present | **CONFIRMED** at `Live · 12 sales today` |
| Pricing 4 tier prices `$0/$89/$149/$299` | present (chore branch) | unchanged |
| Pricing subhead | partial | **REWRITTEN** with locked subhead (Pro-and-up email marketing tease) |
| Pricing per-tier descriptions + features | partial | **REBUILT** each tier; added Stacks-count rows; removed deferred features |
| Tier card `Most Popular` / `Flagship` pills | missing | **ADDED** to Pro (black border + `Most Popular`) + Empire (`Flagship` via existing `::before`) |
| Tier CTA labels | partial | **CHANGED** to `I Hustle / Open Shop / Go Pro / Build your Empire` |
| FAQ — 7 items on chore | partial | **EXPANDED** to 8 (6 rewrites + 2 new: CHEQout inbox + sales tax). Removed Hustle-economics FAQ from chore (content folded into Q6) |
| Founder note | missing | **ADDED** new section between FAQ and CTA footer (locked v2 copy, 640px max-width letter-style, italic forest signature, no card chrome) |
| CTA footer headline | partial | **VERIFIED** matches `Build your POS. Run your business. Own your life.`; button label updated `Start free` → `Open your store`; meta line collapsed to single line per locked |
| Skull watermark in CTA footer | present | preserved |
| Checkout phone | deleted | confirmed 0 references remain |

---

## iPhone mockup audit (4 phones, all 19.5:9) — completed static audit 5/15

Headless-browser screenshot tooling was blocked (puppeteer install denied; only system Chrome available). Audit is verified via CSS computed-value inspection and SVG fixed-coordinate analysis — every ratio + inner-bounds claim below is verifiable from `index.html` source. Real-device visual confirmation on iPhone is your last step.

| # | Mockup | File:line | Outer dims (effective per breakpoint) | Ratio | 390px | 768px | 1024px | 1440px | Inner-bounds OK? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Hero phone | `index.html` `.hero-phone` L210 | 280px max-width at ALL breakpoints (no @720 narrowing); `aspect-ratio: 240/520` | **9:19.5** ✓ | ✓ 280×607 (≈72% of viewport, inside hero section's 20px padding → 70px spare) | ✓ 280×607 (under 280px max, breakpoint reorders hero to single column) | ✓ 280×607 (hero side-by-side returns at >1000px) | ✓ 280×607 (full desktop) | screen pinned `inset: 8px` + `overflow: hidden`; `.hero-phone-cell-title` has `white-space:nowrap; overflow:hidden; text-overflow:ellipsis` — text can't overflow horizontally |
| 2 | QR mockup SELLER | inline SVG in `<section id="how">` L1865 | SVG `<rect width=240 height=520>` inside `viewBox="0 0 680 620"`; wrapper `.qr-mockup-wrap` max-width 680px width 100% | **9:19.5** ✓ (SVG coords immutable across all breakpoints — rendering scales the entire viewBox uniformly) | ✓ scales to ~390px wide × proportional height | ✓ scales to ~680px wide × 620 | ✓ stays at 680px max | ✓ stays at 680px max | SVG fixed-coord — content cannot overflow phone rect bounds geometrically |
| 3 | QR mockup BUYER | inline SVG same section | same SVG, BUYER phone rect at `x=380 width=240 height=520` | **9:19.5** ✓ (same) | ✓ | ✓ | ✓ | ✓ | SVG fixed-coord — rail-card 2 main label "Direct transfer" sits in 192px×58px rect; subtitle "Venmo · Zelle · PayPal · Cash App" in 10px font fits the 192px width — no overflow |
| 4 | Storefront phone | `index.html` `.storefront-phone` L772 | 280px max-width base + 1000px breakpoint (still 280px); 720px breakpoint NARROWS to 240px max-width; `aspect-ratio: 240/520` | **9:19.5** ✓ | ✓ 240×520 (narrower per @720 rule) | ✓ 280×607 (above @720 cutoff) | ✓ 280×607 | ✓ 280×607 | screen pinned `inset: 8px` + `overflow: hidden`; PNG (1320×2868 source) uses `object-fit:cover; object-position:top` — image crops to fit frame, never overflows |

**Edge cases I cannot rule out statically:**
- Hero phone cell titles at extreme font-rendering on certain system fonts (e.g., narrow Pro Display Mono) could theoretically push the 9px text past the 1-line ellipsis on certain locales. CSS guards are in place but the rendering engine has final say.
- iOS Safari's rubber-band scroll at 390px could momentarily show the body behind the phone if the page has wrapped content. Not a phone-frame issue per se.

**Old checkout-phone:** deleted in commit `12732b6`. Confirmed 0 references remain in HTML/CSS/JS.

**Final visual confirmation:** Jeremy on iPhone with the unlocked preview. Surface any phone-frame clipping you see and I'll iterate.

---

## Commits in this PR (in order)

| # | SHA | Subject |
|---|---|---|
| 1 | `d41880d` | feat(dividers,eyebrows): add 60px hairline section-divider + strip all eyebrow numbers |
| 2 | `51e1a81` | feat(hero): marquee, headline+kicker+body, single CTA, hero phone rebuilt with VS avatar |
| 3 | `1a49727` | feat(section-02,banner-1): rewrite category section + add 'You decide what you're worth' black banner |
| 4 | `12732b6` | delete(section-03): remove fee-math demo, killshot, checkout-mockup, checkout-phone, afterpay-section (HTML + JS + dead CSS, -860 lines) |
| 5 | `b3d1c1e` | feat(new-way-to-pay,after-tap,set-your-price): three new sections replacing §03 incl. inline-embedded v2 QR SVG |
| 6 | `15ed056` | fix(24-7-store): rewrite 'And now for the best part' + storefront phone repointed to /assets/storefront-iphone-capture.png |
| 7 | `84afa50` | fix(one-photo,banner-2): rename 'Every shelf you have' → 'Everywhere you sell' + 'Other platforms make you sync' banner |
| 8 | `2ca3aa3` | fix(stacks): Level-1-honest 'Move them to whatever bank accounts you want' rewrite + 5-stack visual update |
| 9 | `2b186e5` | fix(pricing): rebuild 4 tier cards with locked features + Most Popular/Flagship pills + CTA labels |
| 10 | `f1d6aac` | fix(faq): 8 FAQ items (6 rewrites + 2 new: CHEQout inbox + sales tax) |
| 11 | `5000f75` | feat(founder-note,cta-footer): new founder-note section + CTA footer cleanups |

Original dispatch suggested 17 commits; consolidated to 11 where tightly-coupled changes shared the same file region (e.g., the three new sections + inline SVG paste as one commit because splitting would obscure the 511-line insertion diff).

---

## One locked-copy note — RESOLVED 5/15

The §"And now for the best part" roman numeral **i.** contains a double-em-dash parenthetical:

> When a sale happens — booth or storefront — inventory updates everywhere in real time.

The global rule in the dispatch said "NO double em-dashes creating parenthetical clauses anywhere." But the locked copy spec explicitly showed this construction in roman i. **Jeremy's call:** locked copy wins where it conflicts with the global rule. One clean parenthetical that earns its place in a ~3K-word site doesn't trigger the AI-tell pattern. The rest of the site has the discipline. Kept verbatim. No code change.

---

## Files touched

- `index.html` (every section)
- `assets/phone-to-phone-qr-mockup.svg` (added — v2 widget, verbatim from your drop)
- `assets/storefront-iphone-capture.png` (added — your swan-test iPhone capture, 1320×2868)

---

## Non-negotiables honored

- [x] No em-dashes added beyond locked copy
- [x] No paraphrasing of locked copy
- [x] No reordering of paragraphs within a section
- [x] No SVG modifications (embedded verbatim from `assets/`)
- [x] No headless screenshot attempts on swan-test (used the PNG you AirDropped)
- [x] One commit at 511-line insertion was the SVG-embed commit; the bulk is verbatim asset paste, not new logic. Flagged inline.

## Out of scope (per dispatch)

- Not merging to main or to chore branch
- Edge Middleware passcode gate untouched
- Top nav untouched (items, ordering, CTA pill)

Ready for your review on iPhone with passcode `cheq2026`.
