---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
  - "next.config.ts"
  - "proxy.ts"
---

# Next.js 16 — Overview

**Stack:** Next.js 16 · React 19 · App Router · Turbopack · Tailwind v4 · TypeScript strict · Bun

**Config:** `cacheComponents: true` in `next.config.ts` (Cache Components / PPR)

> Read `node_modules/next/dist/docs/` before coding — this project's Next.js has breaking changes vs older versions.

## Rules index (same folder)

| File | Topic |
|------|--------|
| `rendering.md` | Server vs Client Components |
| `async-apis.md` | `params`, `searchParams`, `cookies`, `headers` |
| `streaming.md` | Suspense, blocking routes |
| `caching.md` | `use cache`, `fetch` revalidate |
| `data-fetching.md` | Server-side data patterns |
| `structure.md` | Folders, naming, exports |
| `typescript-react.md` | Types, React 19 |
| `navigation.md` | Link, redirect, metadata |
| `images.md` | `next/image` vs CDN |
| `styling.md` | Tailwind v4, dark theme |
| `api-routes.md` | Route Handlers, OAuth |
| `anti-patterns.md` | Don'ts + verify commands |

## Project layout

| What | Where |
|------|-------|
| Route page | `app/{route}/page.tsx` |
| Shared UI | `app/components/{category}/` |
| Data layer | `app/lib/anilist/` |
| API routes | `app/api/` |

Path alias: `@/` → project root.
