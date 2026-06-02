---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
---

# Async Request APIs (Next.js 16)

Synchronous access is **removed**. Always `await`:

| API            | Pattern                            |
| -------------- | ---------------------------------- |
| `params`       | `const { id } = await params`      |
| `searchParams` | `const { q } = await searchParams` |
| `cookies()`    | `const jar = await cookies()`      |
| `headers()`    | `const h = await headers()`        |
| `draftMode()`  | `const draft = await draftMode()`  |

## Page props

```tsx
type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q?: string }>;
};

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { q } = await searchParams;
}
```

Prefer `PageProps<'/anime/[id]'>` after `bunx next typegen`.

## Route Handlers

```tsx
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
```

## ❌ Never

```tsx
const id = params.id; // sync — breaks build
const q = searchParams.q; // sync — breaks build
```
