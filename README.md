# WILFA TECH — Favour Williams

The personal portfolio of **Favour Williams**, founder of **WILFA TECH**, covering robotics, artificial intelligence, the Internet of Things and software engineering.

It is a single editorial page with a dark black-and-charcoal palette, oversized condensed type, ruled dividers, textures made from walls of tiny words, a continuously moving ticker, animated statistics and an editorial project list. A single signal-orange accent is used sparingly throughout.

## Sections

1. **Introduction**: the headline, a short introduction, the WILFA TECH emblem with a rotating text ring, and calls to action.
2. **By the numbers**: four giant animated statistics. They show `XX` placeholders until real figures are supplied.
3. **Moving text strip**: two tickers running in opposite directions (Robotics, AI, IoT, Engineering, Innovation, Software Development).
4. **Selected work**: editorial project rows. Each has a category, role, description, stack, concept visual, live link and case-study link.
5. **Technical expertise**: a 2×2 grid of disciplines with their skills.
6. **About**: the engineering journey, key facts (education, location), ambition and the WILFA TECH mission.
7. **Collaboration and contact**: an invitation to collaborate, plus email, GitHub and LinkedIn.

## Editing content

**All copy lives in one file: `src/content/portfolio.ts`.**

- **Statistics**: set `value` to a real number (for example `{ value: 12, suffix: '+', label: '…' }`) and the count-up animation runs automatically.
- **Projects**: replace the sample entries. Set `status` to `'in-progress'` or `'completed'`, fill in `role`, and add `liveUrl` and `caseStudyUrl`. While a link is `null`, a "coming soon" state is shown.
- **About facts**: replace the `null` values for education and location.
- **LinkedIn**: set `links.linkedin` to your profile URL.
- **Images**: put files in `public/img/` and reference them as `/img/your-file.png`. They are resized and converted to WebP automatically by the Netlify Image CDN.

## Tech stack

- React 19 + TypeScript on TanStack Start (server-rendered, deployed on Netlify)
- Tailwind CSS v4 with brand tokens in `src/styles.css`
- Fonts (self-hosted via Fontsource): Big Shoulders Display, Manrope and JetBrains Mono
- Animations built with CSS and a single IntersectionObserver hook, with no animation library. Reduced-motion preferences are respected.
- Images served through the Netlify Image CDN

## Running locally

```bash
pnpm install
netlify dev        # or: pnpm dev (images load via the Image CDN only under netlify dev / on Netlify)
```

## Possible next steps

- Swap the sample projects for real ones as evidence becomes available, and add individual case-study pages.
- Add a portrait photo to the hero or About section.
- Add a contact form (Netlify Forms) alongside the email link.
