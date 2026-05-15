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

## iPhone mockup audit (4 phones, all 19.5:9)

| # | Mockup | File:approx-line | Outer dims (CSS) | Computed ratio | 390px | 768px | 1024px | 1440px | Inner-bounds OK? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Hero phone | `index.html` `.hero-phone` ~L210 | max-width 280px (1000px breakpoint → 280) (720px breakpoint → 280); `aspect-ratio: 240/520` | **240:520 = 19.5:9** ✓ | _**pending DevTools verify**_ | _pending_ | _pending_ | _pending_ | screen pinned `inset: 8px` + `overflow: hidden`; 6-cell editorial grid sized to fit |
| 2 | QR mockup SELLER | inline SVG inside `<section id="how">` ~L1865 | SVG fixed coords `width=240 height=520` rect (in viewBox 0 0 680 620) | **240:520 = 19.5:9** ✓ (SVG coords are immutable across breakpoints) | _pending_ | _pending_ | _pending_ | _pending_ | SVG fixed-coord rendering — no overflow possible |
| 3 | QR mockup BUYER | inline SVG inside same section | SVG fixed coords `width=240 height=520` rect | **240:520 = 19.5:9** ✓ | _pending_ | _pending_ | _pending_ | _pending_ | SVG fixed-coord — no overflow possible |
| 4 | Storefront phone | `index.html` `.storefront-phone` ~L772 | max-width 280px (1000px → 280, 720px → 240); `aspect-ratio: 240/520` | **240:520 = 19.5:9** ✓ | _pending_ | _pending_ | _pending_ | _pending_ | screen pinned `inset: 8px` + `overflow: hidden`; `<img>` uses `object-fit:cover; object-position:top` |

**Old checkout-phone:** deleted in commit `12732b6` (destructive §03 delete). Confirmed 0 references remain in HTML/CSS/JS.

**To complete the audit visually:** Jeremy to open the preview URL at the 4 breakpoints (Chrome/Safari DevTools responsive mode) and confirm pass/fail per phone. The CSS math + verbatim SVG guarantees ratio; the visual check confirms no surprising clipping on text overflow in real fonts.

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

## One locked-copy note for editorial review

The §"And now for the best part" roman numeral **i.** contains a double-em-dash parenthetical:

> When a sale happens — booth or storefront — inventory updates everywhere in real time.

The global rule in the dispatch says "NO double em-dashes creating parenthetical clauses anywhere." But the locked copy spec explicitly shows this construction in roman i. Per the "verbatim locked copy" directive, I preserved it. Flagging here in case the conflict needs an editorial pass before merge.

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
