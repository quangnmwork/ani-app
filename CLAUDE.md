# AniTrack — AI Coding Template

Anime/manga tracker inspired by [anilist.co](https://anilist.co), built with Next.js + AniList GraphQL API.

## Commands

```bash
bun dev          # http://localhost:3000
bun run build
bun run lint
```

## Folder structure

```
app/
├── page.tsx                          # Homepage — carousel sections
├── layout.tsx                        # Root layout (Navbar + Footer)
├── globals.css
│
├── anime/[id]/page.tsx               # Anime detail
├── manga/[id]/page.tsx               # Manga detail
├── search/page.tsx                   # Search results
├── browse/page.tsx                   # Filter & browse
├── user/[name]/page.tsx              # User profile (needs OAuth)
│
├── api/auth/callback/route.ts        # OAuth callback stub
│
├── lib/
│   ├── anilist/
│   │   ├── client.ts                 # GraphQL fetch wrapper (server-only)
│   │   ├── queries.ts                # All GraphQL query strings
│   │   ├── types.ts                  # TypeScript types
│   │   └── index.ts
│   └── utils.ts                      # getDisplayTitle, season helpers
│
└── components/
    ├── layout/                       # Navbar, Footer
    ├── media/                        # AnimeCard, MediaCarousel, MediaGrid
    └── sections/                     # Homepage sections (Trending, etc.)
```

## Conventions for AI

1. **Data fetching**: Always use `anilist()` from `app/lib/anilist/client.ts` in Server Components. Never call API from client unless search debounce.
2. **New queries**: Add GraphQL string to `queries.ts`, type to `types.ts`.
3. **New pages**: Follow existing route pattern under `app/`.
4. **New UI**: Reuse `AnimeCard`, `MediaCarousel`, `MediaGrid` before creating new components.
5. **Cache**: Default `revalidate: 3600` (1h). AniList rate limit is 90 req/min.
6. **Auth**: OAuth only needed for user lists. Public data needs no token.
7. **TODO comments**: Mark incomplete features with `TODO:` — AI should implement these next.

## API reference

- Docs: https://docs.anilist.co
- Endpoint: `POST https://graphql.anilist.co`
- Schema explorer: Apollo Studio

## Implementation phases

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | Homepage sections, anime detail, search, browse | Template ready |
| 2 | Search form (client), browse filters, manga detail UI | TODO |
| 3 | OAuth login, user list, add to list | TODO |

@AGENTS.md
@.claude/rules/anilist.md
@.claude/rules/nextjs.md
