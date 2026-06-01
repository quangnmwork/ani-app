---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
---

# TypeScript & React 19

## TypeScript

- `strict: true` — no `any`; use `unknown` + narrow
- Props: `type AnimeCardProps = { media: Media }`
- `value != null` for nullable numbers; optional chaining for API nesting
- Prefer `type` over `interface` for component props
- Use `as const` instead of `enum`

```tsx
export function AnimeCard({ media }: AnimeCardProps) { ... }
```

## React 19

- Named imports only: `import { useState } from 'react'` — no default React import
- **Forms:** `<form action={serverAction}>` or `useActionState` for mutations
- **Keys:** `key={media.id}` — never array index on dynamic lists
- **Refs:** pass `ref` as prop (no `forwardRef` unless required)
- **No `useEffect` for data** — server fetch; effects only for subscriptions / DOM / 3rd party

## Server Actions (when added)

- Mark with `'use server'` in dedicated file or inline in Server Component
- Validate input; revalidate with `revalidateTag` after mutations
- Never expose secrets in client-callable actions
