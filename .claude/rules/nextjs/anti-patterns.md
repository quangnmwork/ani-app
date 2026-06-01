---
paths:
  - "app/**"
  - "next.config.ts"
---

# Anti-patterns & Verification

## Do not

| Avoid | Do instead |
|-------|------------|
| `'use client'` on data-only pages | Server Component + Suspense |
| `useEffect` for initial data | Server `fetch` / `anilist()` |
| Sync `params` / `searchParams` | `await params` |
| Barrel `index.ts` exports | Direct imports |
| Large Client Components | Split server/client |
| `middleware.ts` (new code) | `proxy.ts` |
| Pages Router (`getServerSideProps`) | App Router only |
| `unstable_cache` | `'use cache'` / `fetch` revalidate |
| `enum` | `as const` objects |
| Default export components | Named exports |

## Build errors to fix (not suppress)

| Error | Fix |
|-------|-----|
| `blocking-route` | Wrap async fetch in `<Suspense>` |
| `prerender-current-time` | `await headers()` or fetch before `new Date()` |
| Async API warning | `await params`, `cookies()`, etc. |

## Verify before done

```bash
bun run build
bun run lint
```

After adding routes: `bunx next typegen` for `PageProps<'/route'>` types.
