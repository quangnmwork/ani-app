/** GraphQL queries for AniList API — https://docs.anilist.co/guide/graphql/ */

export const MEDIA_FIELDS = `
  id
  type
  format
  status
  episodes
  chapters
  averageScore
  popularity
  season
  seasonYear
  title { romaji english native }
  coverImage { large medium color }
`;

export const TRENDING_QUERY = `
  query Trending($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total currentPage lastPage hasNextPage perPage }
      media(type: ANIME, sort: TRENDING_DESC) {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

export const MEDIA_LIST_QUERY = `
  query MediaList(
    $page: Int
    $perPage: Int
    $sort: [MediaSort]
    $season: MediaSeason
    $seasonYear: Int
    $type: MediaType
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total currentPage lastPage hasNextPage perPage }
      media(type: $type, sort: $sort, season: $season, seasonYear: $seasonYear) {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

export const MEDIA_DETAIL_QUERY = `
  query MediaDetail($id: Int, $type: MediaType) {
    Media(id: $id, type: $type) {
      ${MEDIA_FIELDS}
      description
      genres
      studios(isMain: true) { nodes { name } }
      characters(page: 1, perPage: 12, sort: ROLE) {
        edges {
          role
          node {
            name { full }
            image { medium }
          }
        }
      }
    }
  }
`;

export const SEARCH_QUERY = `
  query Search($search: String, $page: Int, $perPage: Int, $type: MediaType) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total currentPage lastPage hasNextPage perPage }
      media(search: $search, type: $type, sort: SEARCH_MATCH) {
        ${MEDIA_FIELDS}
      }
    }
  }
`;
