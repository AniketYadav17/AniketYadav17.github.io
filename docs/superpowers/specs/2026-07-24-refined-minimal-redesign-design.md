# Refined-Minimal Portfolio Redesign — Design Spec

**Date:** 2026-07-24
**Status:** Approved by Aniket (chat)
**Scope:** Visual restyle of the whole site (Home, Projects, Contact, Navbar, new Footer). No content changes — copy, projects, metrics, and links stay as shipped on 2026-07-24.

## Goal

Replace the current gradient/glassmorphism look ("pretty basic", emoji card banners, dead "View Details" hover overlay) with a refined-minimal design: strong typography, generous whitespace, one accent colour, hairline borders, quiet hover states.

## Design language

- **Typography:** Inter, loaded via `<link>` in `public/index.html`, falling back to system fonts. Applied as the default font in Tailwind config. Scale: hero name `text-5xl`, section headings `text-3xl`, body `text-base`/`text-lg`. Uppercase letter-spaced eyebrow labels (`text-xs tracking-widest uppercase`) are the single typographic flourish.
- **Colour:** one accent — indigo (`indigo-600` light / `indigo-400` dark). Neutrals: `white` / `gray-950` page backgrounds, `gray-200` / `gray-800` hairline borders, `gray-900` / `gray-100` primary text, `gray-600` / `gray-400` secondary text. Dark-mode toggle behaviour is unchanged (class strategy + localStorage).
- **Buttons:** primary = solid indigo, `rounded-lg`, no scale/bounce animations; secondary = plain accent-coloured text link with `→`.
- **Cards:** hairline border, `rounded-xl`, flat background. Hover: border shifts toward accent + small shadow. No `backdrop-blur`, no translucent fills, no `hover:scale-105`.

### Removed sitewide

Gradient blobs, glassmorphism, gradient text, dotted background pattern, `animate-bounce`/`animate-pulse` decorations, per-card gradient theming, emoji banners, the non-functional "View Details" overlay.

## Components

### Navbar (`src/components/Navbar.js`, `src/App.js`)
- Left: "Aniket Yadav" + small muted "AI Engineer" (the "AN" gradient logo box is removed).
- Right: Home / Projects / Contact links; active link in accent colour.
- The floating fixed dark-mode button moves into the navbar as a small icon button; `App.js` passes `toggleDarkMode` down. Mobile menu keeps current open/close behaviour, restyled.
- Transparent until scroll, then solid background + hairline bottom border.

### Home (`src/pages/Home.js`)
- Left-aligned hero on desktop: text left, photo right (~`w-40`, subtle ring); stacked and centred on mobile.
- Small "Available for opportunities" badge with a green status dot.
- Existing headline/subtitle/paragraph copy unchanged.
- CTAs: solid indigo "Download resume" + text link "View projects →".
- Nothing else on the page.

### Projects (`src/pages/Projects.js`)
- Text-first cards, no image/banner area. Card anatomy top-to-bottom:
  1. Eyebrow category — `AGENTIC RAG` (Sentinel), `ML + GEOSPATIAL` (Neighbourhood Pulse), `COMPUTER VISION` (dissertation)
  2. Title
  3. Description (existing copy)
  4. Metrics row: 3 metrics, large number + small muted label, separated from description by a thin top hairline
  5. Tech list as plain muted text joined with `·` (no pill chips)
  6. Links: "Code →" / "Live demo →" as accent text links; when a project has no public links, the existing `note` renders as one muted italic line
- Responsive grid: 1 / 2 / 3 columns, equal-height cards. Bottom CTA block simplified to match the new language.

### Contact (`src/pages/Contact.js`)
- Three bordered cards (Email / LinkedIn / GitHub): icon or label, one-line description, accent text link. No gradient buttons.
- The two status cards (education / experience) restyled to the card language, content unchanged.
- Closing block shrinks to one short line + one primary button.

### Footer (new `src/components/Footer.js`, rendered in `App.js`)
- Single line: `© Aniket Yadav · GitHub · LinkedIn · Email`, hairline top border, muted text. Replaces the unused legacy `Footer.js`.

## Implementation notes

- `tailwind.config.js`: set Inter as default sans font. No other theme extensions needed — stock indigo/gray palettes.
- `public/index.html`: add Inter `<link>` (preconnect + stylesheet).
- Legacy unused components under `src/components/` (Header, Hero, About, Skills, Projects, Blog, Contact) are untouched — out of scope.

## Verification

1. `npm run build` compiles clean; `npm test` passes (hero test asserts name + "AI Engineer", unaffected).
2. Run locally (`npm start`) and screenshot Home, Projects, Contact in light and dark mode via Chrome; check hairlines, accent usage, card layout, mobile menu.
3. Deploy only after visual check.
