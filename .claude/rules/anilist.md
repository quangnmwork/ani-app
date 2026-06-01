---
paths:
  - "app/lib/anilist/**"
  - "app/**/page.tsx"
  - "app/api/**"
---

# AniList API rules

- Endpoint: `POST https://graphql.anilist.co`
- Use `anilist()` from `app/lib/anilist/client.ts` — server-only
- Add new queries to `app/lib/anilist/queries.ts`
- Add types to `app/lib/anilist/types.ts`
- Rate limit: 90 requests/minute — always cache with `revalidate`
- No auth needed for public anime/manga data
- OAuth docs: https://docs.anilist.co/guide/auth/
- Test queries in Apollo Studio before coding

## Query patterns

```graphql
# List with sort/filter
Page(page: $page, perPage: $perPage) {
  media(type: ANIME, sort: TRENDING_DESC) { ... }
}

# Single item
Media(id: $id, type: ANIME) { ... }

# Search
Page { media(search: $search, type: ANIME) { ... } }
```
