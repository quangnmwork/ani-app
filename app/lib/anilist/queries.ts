const MEDIA_CARD_FRAGMENT = `
  fragment MediaCardFields on Media {
    id
    title { romaji english }
    coverImage { large extraLarge color }
    averageScore
    episodes
    status
    genres
    season
    seasonYear
  }
`;

export const TRENDING_QUERY = `
  ${MEDIA_CARD_FRAGMENT}
  query TrendingAnime($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: TRENDING_DESC, isAdult: false) {
        ...MediaCardFields
      }
    }
  }
`;

export const POPULAR_QUERY = `
  ${MEDIA_CARD_FRAGMENT}
  query PopularAnime($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
        ...MediaCardFields
      }
    }
  }
`;

export const TOP_QUERY = `
  ${MEDIA_CARD_FRAGMENT}
  query TopAnime($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: SCORE_DESC, isAdult: false) {
        ...MediaCardFields
      }
    }
  }
`;
