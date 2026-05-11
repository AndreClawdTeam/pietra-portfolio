# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server with Turbopack on http://localhost:3000
- `npm run build` — production build
- `npm run start` — run the built app
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

There are no tests in this repository.

## Environment

Required env vars (see `.env.sample`):

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_USE_CDN` — Sanity CMS client
- `FACEBOOK_DOMAIN_VERIFICATION_ID`, `FACEBOOK_PIXEL_ID`, `GOOGLE_TAG_MANAGER_ID`, `GOOGLE_ANALYTICS_ID` — analytics/tracking injected from `src/app/layout.tsx`

Note: several gtag/GTM/Pixel IDs (`AW-17059362533`, `G-JHGW1PWY5H`, `GTM-MRGMLF5R`) are hardcoded inline in `src/app/layout.tsx` rather than read from env — change them there when needed.

## Architecture

This is a Next.js 15 App Router site for a Brazilian nutritionist (pt-BR, hosted at `nutricionistapietra.com.br`). Content comes from two distinct sources:

1. **Static marketing copy** lives in `src/content/siteContent.ts` — a single typed object consumed directly by the home page and components. The home page (`src/app/page.tsx`) is largely a thin renderer over this object. Edit copy here, not in JSX.
2. **Dynamic content (blog posts + ebooks)** is authored in Sanity Studio (embedded at `/studio`) and fetched at request time.

### Sanity integration pattern

The Sanity → UI flow is intentionally layered and should not be short-circuited:

```
Sanity Studio (src/app/studio + sanity.config.ts)
     │  schemas: src/sanity/schemaTypes/{post,ebook,author,category,blockContent}
     ▼
GROQ queries:      src/sanity/sanity-query.ts
Client + fetcher:  src/sanity/sanity-utils.ts  (createClient, sanityFetch, imageBuilder)
Raw Sanity types:  src/sanity/types.ts         (SanityBlogPost, SanityEbookPost — loose, `any`)
     ▼
Service layer:     src/services/{articles,ebooks}/
                   - types.ts defines a Zod `*Schema` and exports `Article`/`Ebook` (the domain type)
                   - index.ts has `mapSanityToDomain()` + parses through Zod before returning
     ▼
App pages/components consume only the domain types (Article, Ebook) — never SanityBlogPost directly.
```

When adding a new content type: add the schema in `src/sanity/schemaTypes/`, register it in `schemaTypes/index.ts`, add a GROQ query in `sanity-query.ts`, a fetcher in `sanity-utils.ts`, then create a `src/services/<thing>/` module with a Zod schema and a `mapSanityToDomain` adapter. Pages then import only from `@/services/...`.

Routes that read CMS data (`/blog`, `/blog/[id]`, `/ebooks`, `/ebooks/[id]`) set `export const revalidate = 1` and tag fetches via `sanityFetch({ tags })`. The Sanity client perspective is `"published"` and `useCdn` is controlled by `SANITY_USE_CDN`.

### Routing

- `/` — single-page marketing site composed in `src/app/page.tsx` from sections in `src/components/`
- `/blog`, `/blog/[id]` — blog list/detail, own layout with `<Header isBlogLayout />` + `<Footer>`
- `/ebooks`, `/ebooks/[id]` — same shape as blog
- `/studio/[[...tool]]` — embedded Sanity Studio (`force-static`), config in repo-root `sanity.config.ts`
- `/politica-de-privacidade`, `/termos-de-uso`, `not-found.tsx`

### Styling

Tailwind v4 via `@tailwindcss/postcss`. Design tokens are CSS custom properties declared in `@theme { ... }` inside `src/app/globals.css` (`--color-primary`, `--color-accent`, `--color-tertiary`, etc.) — extend palette there, not in a `tailwind.config`. The `.blog-post` class applies typographic defaults to portable-text-rendered articles. Font is Poppins via `next/font/google`, exposed as `--font-poppins`.

### Conventions specific to this repo

- Path alias: `@/*` → `src/*`
- All user-facing copy is Portuguese (pt-BR). The `<html lang="pt-BR">` is set in the root layout.
- Runtime validation uses `zod` (per user's global rule — never `typeof` guards). The service layer already follows this; preserve it when adding new domain mappers.
- Images from Sanity: `next.config.ts` whitelists `cdn.sanity.io`. Build URLs via `imageBuilder(source).url()` from `src/sanity/sanity-utils.ts`.
- Class name composition: use `cn()` from `src/lib/utils.ts`.
- Date formatting: use `formatDate()` from `src/lib/utils.ts` (pt-BR locale, long month).
- Conversion tracking: `reportConversion()` in `src/lib/gtag.ts` fires a hardcoded Google Ads conversion ID — call it from CTA click handlers, don't reinvent.
