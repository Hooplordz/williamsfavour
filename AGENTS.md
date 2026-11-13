# AGENTS.md — WILFA TECH portfolio

A single-page portfolio for Favour Williams (founder of WILFA TECH) built with TanStack Start, React 19, TypeScript and Tailwind CSS v4, and deployed on Netlify. It has no backend, database or forms.

## Architecture

- `src/content/portfolio.ts`: **the single source of all copy and data** (hero, stats, ticker, projects, expertise, about, collaboration, contact, links). Components never hard-code user-facing content, so keep it that way.
- `src/routes/__root.tsx`: the HTML shell, metadata, an inline script that adds `html.js`, the scroll-progress bar, the header and the footer.
- `src/routes/index.tsx`: composes the sections in order and calls `useScrollReveal()`.
- `src/components/sections/*`: one component per page section (Hero, Numbers, TickerStrip, Work + ProjectRow, Expertise, About, Collaborate, Contact).
- `src/components/ui/*`: reusable primitives (ArrowLink, DoubleRule, WordWall, SplitHeading, Eyebrow, Ticker, StatCounter, StackList).
- `src/lib/image.ts`: helpers for Netlify Image CDN URLs (`cdn`, `cdnSrcSet`). Always use these for images in `public/img/`.
- `src/styles.css`: brand tokens (`ink`, `charcoal`, `graphite`, `bone`, `ash`, `line`, `signal`), fonts, and every animation keyframe and reveal state.

## Conventions and non-obvious decisions

- **Honesty rule:** do not invent achievements. Stats with `value: null` render an `XX` placeholder. Projects default to `status: 'sample'`, which shows a visible label. Links set to `null` render a disabled "coming soon" state. Only change these when the owner supplies real data.
- **Animations** are plain CSS. Scroll reveals use `data-reveal="up|stamp|draw|wipe|letters"`, and the hook adds `data-shown`. Hidden states only apply under `html.js`, so content is never invisible without JS. Stagger uses the `--i` CSS variable (and `--l` per letter). Everything respects `prefers-reduced-motion`.
- **Word-wall texture** is a tiled SVG (`public/texture-words.svg`), not inline text, which keeps the HTML light.
- Tailwind v4 translate/scale/rotate utilities use individual CSS properties, so they don't clash with keyframe `transform`s.
- About uses `overflow-x-clip`, not `overflow-hidden`, so its sticky column keeps working.
- Accent colour (`signal`, #ff6a2b) is deliberately rare: diamonds, small badges, hover bars, one headline line.
- Images in `public/img/` were generated as engraved ink-on-black concept visuals and are labelled "Concept visual" on the site.
- TypeScript stays on 6.x because the Netlify adapter tooling needs it. `src/routeTree.gen.ts` is generated, so don't edit it.
