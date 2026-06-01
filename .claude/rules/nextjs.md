---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
---

# Next.js conventions

- Next.js 16 with App Router — read `node_modules/next/dist/docs/` for breaking changes
- Server Components by default; add `"use client"` only when needed (forms, interactivity)
- Use `@/` path alias (maps to project root)
- Wrap async sections in `<Suspense>` with skeleton fallback
- Dynamic routes: `params` and `searchParams` are Promises — always `await`
- Images: use `<img>` for external AniList CDN URLs (or configure `next.config.ts` remotePatterns)
- Dark theme: app uses `dark` class on `<html>`, zinc palette

## File placement

| What | Where |
|------|-------|
| Route page | `app/{route}/page.tsx` |
| Shared UI | `app/components/{category}/` |
| Data layer | `app/lib/anilist/` |
| API routes | `app/api/` |
