---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
---

# Rendering — Server & Client Components

## Default: Server Components

- Every `app/` file is a Server Component unless `'use client'` is at the top.
- Fetch data, access secrets, and render static markup on the server.

## When to add `'use client'`

Only at the **leaf** that needs:

- `useState`, `useReducer`, `useEffect`
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`window`, `localStorage`)
- `useSearchParams` for client URL state

```tsx
// ✅ Server page + client leaf
export default function SearchPage() {
  return <SearchForm />;
}

// ❌ 'use client' on a page that only displays server-fetched data
// ❌ Pass functions from Server → Client
<ClientButton onClick={() => {}} />;
```

## Boundaries

- Colocate client files: `app/components/search/search-form.tsx`
- Keep client islands **small** — server fetches, client interacts
- Props to Client Components must be **serializable** (no functions, no class instances)

## Do not

- Mark parent layouts as `'use client'` to fix a child
- Use `useEffect` for initial page data — fetch on server instead
