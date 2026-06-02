---
paths:
  - "app/**"
---

# File Structure & Naming

## Layout

```
app/
├── (routes)/page.tsx, layout.tsx
├── components/
│   ├── layout/       # navbar, footer
│   ├── media/        # anime-card, carousel, grid
│   ├── sections/     # homepage async sections
│   └── {feature}/    # e.g. search/
├── lib/              # server utilities, API clients
└── api/              # Route Handlers
```

## Naming

| Item       | Convention                               |
| ---------- | ---------------------------------------- |
| Components | `PascalCase` — `AnimeCard`               |
| Files      | `kebab-case.tsx` — `anime-card.tsx`      |
| Hooks      | `use-kebab-case.ts` (client files only)  |
| Routes     | `kebab-case` folders — `app/anime/[id]/` |

## Exports

- **Named exports** for components: `export function AnimeCard`
- **Default export** only for: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`
- Co-locate props types in component file; shared types in `app/lib/`

## Imports

- Use `@/` alias — no deep relative paths like `../../../`
- No barrel files (`components/index.ts`) — import directly
- Import `type` separately when only types needed: `import type { Media } from '...'`
