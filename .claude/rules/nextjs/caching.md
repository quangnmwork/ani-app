---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
  - "next.config.ts"
---

# Caching (Cache Components)

Enabled via `cacheComponents: true` in `next.config.ts`.

## Choose the right tool

| Pattern | When |
|---------|------|
| `fetch(url, { next: { revalidate: N } })` | External APIs (AniList) — default in `lib/anilist/client.ts` |
| `'use cache'` + `cacheLife('hours')` | Stable server functions with serializable I/O |
| `cacheTag` / `revalidateTag` | Invalidate after mutations (OAuth, list updates) |
| `connection()` | Fully dynamic — no static shell |

```tsx
export async function getTrending() {
  'use cache';
  cacheLife('hours');
  return anilist<PageMedia>(TRENDING_QUERY, { page: 1, perPage: 12 });
}
```

## cookies / headers in cached scopes

Read **outside** cached function, pass values as arguments:

```tsx
const userId = (await cookies()).get('userId')?.value;
return <CachedProfile userId={userId} />;
```

## Do not use (deprecated)

- `unstable_cache`
- `unstable_noStore` — use Cache Components APIs instead

## server-only

Mark server modules: `import 'server-only'` at top of `app/lib/**/*.ts` that must never run on client.
