---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
  - "app/lib/**"
---

# Data Fetching

## Server only for initial data

- Fetch in Server Components or `app/lib/` — **never** AniList GraphQL from Client Components for page data.
- Use `anilist()` from `app/lib/anilist/client.ts`.
- Default cache: `revalidate: 3600` (1 hour) — AniList rate limit is 90 req/min.

## Adding new data

1. Query string → `app/lib/anilist/queries.ts`
2. Types → `app/lib/anilist/types.ts`
3. Fetch in Suspense-wrapped Server Component
4. Reuse `AnimeCard`, `MediaGrid`, `MediaCarousel` for display

## Parallel fetches

Independent requests in the same section:

```tsx
const [trending, popular] = await Promise.all([
  anilist<PageMedia>(TRENDING_QUERY, vars1),
  anilist<PageMedia>(MEDIA_LIST_QUERY, vars2),
]);
```

## Advanced: promise to client

Start fetch in Server Component, pass `Promise` to Client child, read with React `use()` inside `<Suspense>`. Prefer server-rendered lists for this project unless interactivity requires streaming to client.

## Client fetch (limited)

Only for: debounced search, infinite scroll, user-triggered refresh — wrap in `'use client'` component.
