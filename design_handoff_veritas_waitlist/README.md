# Handoff: Veritas Waitlist Landing Page

## Overview
A single-page waitlist site for **Veritas** — an anonymous team-feedback product ("Let your team say what they're afraid to say"). The page collects work emails for a waitlist and communicates the product's three core features: one anonymous link, AI-sorted themes, and weekly summaries.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React, Next.js, Vue, etc.) using its established patterns and libraries. If no environment exists yet, choose the most appropriate framework (a static Next.js/Astro page is a natural fit) and implement the design there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and animations are final. Recreate pixel-perfectly.

## Design Tokens

Colors:
- Primary indigo: `#4438a8`
- Lavender accent: `#a89bff`
- Page background: `#fbfbfd`
- Card background: `#ffffff`
- Text: `#16142b`
- Muted text: `#6f6c8a`
- Faint text: `#a3a0bb`
- Border: `rgba(68,56,168,0.13)` (inputs: `rgba(68,56,168,0.2)`)
- Tint fill (badges, icon chips): `rgba(68,56,168,0.08)`
- Button gradient: `linear-gradient(180deg, #4438a8, rgba(68,56,168,0.85))`
- Button shadow: `0 8px 24px rgba(68,56,168,0.25)` (hover: `0 12px 28px rgba(68,56,168,0.32)`)
- Card shadow (hero card): `0 24px 60px rgba(68,56,168,0.14)`

Typography — **Geist** (Google Fonts), weights 400/500/600/700/800, fallback `system-ui, -apple-system, sans-serif`:
- H1: 62px / 800 / letter-spacing -0.035em / line-height 1.08
- Section heading: 34px / 800 / -0.03em
- Hero paragraph: 20px / 400 / line-height 1.55 / muted
- Card titles: 18px / 700 / -0.01em
- Body/card text: 15px / line-height 1.55 / muted
- Wordmark: 27px / 700 / -0.03em, lowercase "veritas"

Shape:
- Pills everywhere: border-radius 999px (buttons, inputs, badges)
- Cards: radius 16px (feature) / 20px (hero card)
- Icon chips: 44px square, radius 12px, tint background, indigo icon
- Icons: lucide outline style, stroke-width 2, round caps/joins

Layout: max-width 1080px container, 32px side padding, centered.

## Logo
Vector lockup, do NOT use a raster image:
- Two overlapping circles: a filled indigo circle on the left, an indigo ring (border ≈ h*0.15) offset right by ≈ h*0.54, same diameter. Header: 28px circles; footer: 17px.
- Wordmark "veritas" lowercase, Geist 700, sized ≈ circle height, letter-spacing -0.03em, gap 12px.

## Screens / Views (single page, top to bottom)

### 1. Header
Flex row, space-between, padding 28px 0. Left: logo lockup. Right: empty (a "Coming soon" badge was removed intentionally — do not add one).

### 2. Hero
Centered text, padding 84px 0 64px.
- H1 (max-width 760px): `Let your team say what they're afraid to say` — "afraid to say" in primary indigo `#4438a8`.
- Paragraph (max-width 560px, margin-top 26px): `Anonymous team feedback with AI-sorted themes and weekly summaries. No accounts, no names — just the honest signal you're missing.`
- Email form (margin-top 40px): pill email input (width 320px, padding 15px 22px, 16px text, white bg; focus: indigo border + `0 0 0 3px rgba(68,56,168,0.12)` ring) + pill gradient button `Join the waitlist` (padding 15px 30px, 600 weight; hover: translateY(-1px) + deeper shadow). Gap 10px, wraps on small screens.
- Below form (margin-top 18px, 14px faint): `Free while in beta · No credit card`
- **Joined state**: form is replaced by a tint pill with a check icon: `You're on the list — we'll be in touch.`

Background effect (behind hero, pointer-events none, absolutely positioned relative to page):
- Circle A: 780×780px, radial-gradient `rgba(168,155,255,0.5) → rgba(168,155,255,0.18) 55% → transparent`, `filter: blur(60px)`, top -140px, horizontally centered offset -390px, drifts on a 16s ease-in-out loop (translate ~(30px,-40px) and scale 1.08 at midpoint).
- Circle B: 520×520px, radial `rgba(68,56,168,0.28) → transparent`, blur 70px, top 180px, centered offset +40px, 20s loop drifting the opposite direction (translate (-40px,30px), scale 0.94).

### 3. Anonymous message card (demo)
Centered card, 620px wide, white, 20px radius, big soft shadow, padding 28px 32px. Floats gently: translateY 0 → -8px → 0 over 7s ease-in-out, infinite.
- Top: tint pill badge with shield icon: `You're anonymous` (13px, 600, indigo).
- Body (18px, line-height 1.55): typewriter effect typing `We're stretched thin since the reorg — sprint goals feel unrealistic.` — one character per ~55ms, holds ~1.3s when complete, then resets and loops. Caret: 2px indigo bar blinking (step-end, 1.1s).
- Bottom right: non-interactive gradient pill `Send` with send (paper-plane) icon, 15px/600.

### 4. Feature cards
3-column grid, gap 20px, padding-bottom 96px. Each: white card, 16px radius, subtle border, padding 28px, icon chip on top.
1. **link icon** — `One link, zero friction` — `Share a single link with your team. No sign-ups, no installs — anyone can write in seconds.`
2. **sparkle/sun icon** — `AI-sorted themes` — `Every message lands in the right bucket — workload, management, tools, culture — automatically.`
3. **document icon** — `Weekly summaries` — `A short, readable report every week: what changed, what's rising, and what to do about it.`

### 5. Closing CTA
Centered, padding 72px 0 88px, 1px top border `rgba(68,56,168,0.1)`.
- Heading 34px/800: `Hear what your team really thinks.` — "really" in indigo with an **animated hand-drawn underline**: an SVG wavy path under the word (stroke `#a89bff`, width 3.5, round cap), drawn via stroke-dasharray/dashoffset (130 → 0), 3s ease-in-out infinite loop (offset holds until ~55% of the cycle, draws by 85%).
- Sub (17px muted): `Be first in line when we open the doors.`
- Gradient pill button `Join the waitlist` (18px, padding 16px 34px) — scrolls to top and focuses the email input. Shows the "You're on the list" tint pill instead once joined.

### 6. Footer
Flex space-between, top border, padding 26px 0 40px, 14px faint text. Left: small logo + `© 2026 Veritas`. Right: links `Privacy` · `Contact` (indigo, hover lavender-indigo `#6d5fd6`).

## Interactions & Behavior
- Email form: HTML email validation, required; on submit set `joined = true` (both CTA locations react). Prototype has no backend — **wire the submit to a real waitlist endpoint** (DB/email provider) in production.
- Entrance animation on load: h1 → paragraph → form → fine print → hero card rise in sequentially (opacity 0→1, translateY 22px→0, 0.8s `cubic-bezier(0.22,1,0.36,1)`, delays 0 / 0.15 / 0.3 / 0.45 / 0.55s).
- Button hovers: translateY(-1px) + shadow deepen.
- Consider `prefers-reduced-motion` to disable the loops in production.

## State Management
- `email: string`, `joined: boolean` — local state is sufficient.
- Typewriter: interval-driven counter (55ms tick, resets after message length + ~24 hold ticks).

## Assets
- No raster assets needed. Logo is pure CSS/SVG (see Logo section). Icons are lucide-style inline SVGs (shield, check, send, link, document). Font: Geist via Google Fonts.

## Files
- `Veritas Waitlist.dc.html` — the full prototype (markup, styles, logic). All exact values above can be read from it.
