---
paths:
  - "app/**/*.tsx"
  - "app/globals.css"
---

# Styling — Tailwind v4

## Theme

- Dark-first: `<html className="dark">` in root layout
- Palette: **zinc** backgrounds, **blue-400** links/accents, **green-400** scores
- Tokens in `app/globals.css` via `@theme inline`

## Conventions

- Utility-first in components — avoid inline `style={}`
- Mobile-first breakpoints: `sm:`, `md:`, `lg:`
- Card hover: `group` + `group-hover:` — no JS hover state
- Skeletons: `animate-pulse bg-zinc-800` matching final width/height
- Truncate long titles: `truncate`

## Example card

```tsx
<Link className="group block rounded-lg bg-zinc-900 hover:ring-2 hover:ring-blue-500/50">
  <div className="relative aspect-[2/3] bg-zinc-800">...</div>
  <p className="truncate px-2 py-2 text-sm text-zinc-200 group-hover:text-white">...</p>
</Link>
```

## Do not

- CSS modules unless required by dependency
- Hardcoded hex colors — use Tailwind zinc/blue/green scale
- Light-only styles — app is dark by default
