---
paths:
  - "app/**/*.tsx"
---

# Streaming & Suspense

Project uses `cacheComponents: true`. Uncached async work **must** be inside `<Suspense>` or build fails with [blocking-route](https://nextjs.org/docs/messages/blocking-route).

## Pattern (this repo)

```tsx
export default function Home() {
  return (
    <main>
      <h1>Static title</h1>
      <Suspense fallback={<SectionSkeleton />}>
        <TrendingSection />
      </Suspense>
    </main>
  );
}

async function TrendingSection() {
  const data = await anilist(...);
  return <MediaCarousel items={data.Page.media} />;
}
```

## Rules

1. **Page shell sync** — headings, nav, layout render without awaiting fetch.
2. **Fetch inside Suspense children**, not bare at top of `page.tsx`.
3. **Granular boundaries** — one per slow section (carousel), not one full-page skeleton.
4. **Meaningful fallbacks** — skeleton matching final layout (`animate-pulse`, correct dimensions).

## Dynamic time / request data

`new Date()`, `cookies()`, `headers()` before fetch → blocking route.

**Fix:** `await headers()` or `await fetch()` first, then `new Date()`.

## `loading.tsx` vs `<Suspense>`

| | `loading.tsx` | `<Suspense>` |
|---|---------------|--------------|
| Scope | Whole route segment | Per section |
| Use | Simple all-or-nothing routes | Homepage with mixed static + dynamic |

Prefer explicit `<Suspense>` for this project.
