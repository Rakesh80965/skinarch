# Skin Arc Clinic — React + Bun

A React + TypeScript port of the Skin Arc single-page site, built with Vite, styled with Tailwind, and run on Bun.

## Quick start

```bash
bun install
bun run dev
```

Then open http://localhost:5173.

## Scripts

| Command            | What it does                          |
| ------------------ | ------------------------------------- |
| `bun run dev`      | Start Vite dev server on port 5173    |
| `bun run build`    | Type-check and produce a prod build   |
| `bun run preview`  | Preview the production build locally  |

## Project structure

```
skin-arch/
├── index.html              Vite entry HTML (fonts preconnect)
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── src/
    ├── main.tsx            React mount
    ├── App.tsx             Composes all sections
    ├── index.css           Tailwind directives + custom styles ported from original
    ├── components/         One file per section
    │   ├── AnnouncementBar.tsx
    │   ├── Header.tsx
    │   ├── MobileNav.tsx
    │   ├── Hero.tsx
    │   ├── Marquee.tsx
    │   ├── About.tsx
    │   ├── Treatments.tsx
    │   ├── WhySkinArch.tsx
    │   ├── Doctors.tsx
    │   ├── Results.tsx
    │   ├── BeforeAfterCard.tsx   Drag-to-reveal slider
    │   ├── Process.tsx
    │   ├── Faq.tsx
    │   ├── Booking.tsx
    │   ├── Visit.tsx
    │   ├── Footer.tsx
    │   └── FloatingCta.tsx
    ├── data/               Static content + SVG icons
    │   ├── treatments.ts
    │   ├── beforeAfter.ts
    │   ├── faq.ts
    │   ├── marquee.ts
    │   └── icons.tsx
    └── hooks/
        ├── useScrollReveal.ts   IntersectionObserver "fade in on scroll"
        ├── useCountUp.ts        Animated stat counter
        └── useHeaderBlur.ts     Sticky header backdrop on scroll
```

## What changed vs. the original HTML

- Tailwind CDN → installed properly via PostCSS; theme tokens moved into `tailwind.config.ts`.
- Inline `<script>` blocks → React state, `useEffect` hooks, and dedicated custom hooks.
- Repeated SVG markup (icons, marquee items, stars, FAQs, etc.) → data files mapped over in components.
- Tabs, mobile nav, header blur, and form state → React state instead of class toggling.
- Before/after drag slider → componentized with pointer + touch handling.

Phone numbers, email, and the WhatsApp link are still placeholders (`+91 XXXXX XXXXX`, `hello@skinarch.in`) — drop the real values into the relevant components when ready.
