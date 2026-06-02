---
paths:
  - "app/**/*.tsx"
  - "next.config.ts"
---

# Images

| Source          | Approach                                               |
| --------------- | ------------------------------------------------------ |
| Local `/public` | `next/image` with `width`/`height` or `fill` + `sizes` |
| AniList CDN     | `<img>` or add `remotePatterns` then `next/image`      |

## AniList covers (current pattern)

```tsx
// eslint-disable-next-line @next/next/no-img-element
<img
  src={media.coverImage.large}
  alt={title}
  className="h-full w-full object-cover"
  loading="lazy"
/>
```

## Rules

- Always meaningful `alt` — use `getDisplayTitle(media.title)`
- Fixed aspect: `aspect-[2/3]` for anime covers — prevent layout shift
- `loading="lazy"` for below-fold carousel images

## Optional: next/image for CDN

```ts
// next.config.ts
images: {
  remotePatterns: [{ protocol: 'https', hostname: 's4.anilist.co' }],
},
```

Then use `<Image src={url} width={200} height={300} alt={title} />`.
