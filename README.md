# Nulease Website

Production-ready marketing site built from the Nulease Figma redesign.

## Tech stack

- **Next.js 16** (App Router, RSC) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** + **shadcn/ui** (Radix base, Lucide icons)
- **Framer Motion** — animations
- **React Hook Form + Zod** — forms & validation
- **ESLint + Prettier** — linting & formatting

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Script                 | Description                |
| ---------------------- | -------------------------- |
| `npm run dev`          | Start the dev server       |
| `npm run build`        | Production build           |
| `npm run start`        | Serve the production build |
| `npm run lint`         | ESLint                     |
| `npm run typecheck`    | `tsc --noEmit`             |
| `npm run format`       | Prettier write             |
| `npm run format:check` | Prettier check (CI)        |

## Project structure

```
src/
├─ app/                 # App Router routes, layout, robots.ts, sitemap.ts
├─ components/
│  ├─ ui/               # shadcn/ui primitives
│  ├─ layout/           # Navbar, Footer, shells
│  └─ sections/         # Page sections (Hero, CTA, …)
├─ features/            # Feature-based modules
├─ lib/                 # Shared libs (seo/, utils)
├─ hooks/               # Reusable React hooks
├─ utils/               # Pure utility functions
├─ types/               # Shared TypeScript types
├─ constants/           # Site config & shared constants
├─ data/                # Static structured content
├─ content/             # Long-form / MDX content
└─ styles/              # Additional global styles
public/                 # Static assets (images, icons, fonts)
docs/BRIEF.md           # Original build brief
```

## SEO

- Central config in `src/constants/site.ts`
- `constructMetadata()` in `src/lib/seo/metadata.ts` builds per-page metadata (canonical, Open Graph, Twitter)
- `src/app/robots.ts` and `src/app/sitemap.ts` generate `robots.txt` / `sitemap.xml`
- Set `NEXT_PUBLIC_SITE_URL` in the environment for correct absolute URLs

## Status

Base project scaffolded and building green. **Page implementation is pending
Figma design access** — the connected Figma account (`design@thinkitive.com`)
needs edit access to the _Nulease — Website Redesign_ file before the
pixel-perfect screens can be built.
