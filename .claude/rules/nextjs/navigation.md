---
paths:
  - "app/**/*.tsx"
---

# Navigation & Metadata

## Links

- Internal routes: `next/link` `<Link href="/anime/1">` — not `<a href="/anime/1">`
- `useRouter` from `next/navigation` (not `next/router`)
- `prefetch={false}` only for rarely-used links

## Server redirects

```tsx
import { redirect, notFound } from "next/navigation";

if (!media) notFound();
if (!authorized) redirect("/login");
```

## Metadata

**Static** — `layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: { default: "AniTrack", template: "%s | AniTrack" },
};
```

**Dynamic** — `generateMetadata`:

```tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const data = await anilist<MediaDetail>(MEDIA_DETAIL_QUERY, { id: Number(id), type: "ANIME" });
    return { title: getDisplayTitle(data.Media.title) };
  } catch {
    return { title: "Anime" };
  }
}
```

Keep metadata fetches minimal — title + description only.
