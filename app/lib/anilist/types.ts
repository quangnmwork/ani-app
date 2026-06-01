/** AniList GraphQL types — extend as needed. Docs: https://docs.anilist.co */

export type MediaTitle = {
  romaji: string | null;
  english: string | null;
  native: string | null;
};

export type CoverImage = {
  large: string | null;
  medium: string | null;
  color: string | null;
};

export type Media = {
  id: number;
  type: "ANIME" | "MANGA";
  format: string | null;
  status: string | null;
  episodes: number | null;
  chapters: number | null;
  averageScore: number | null;
  popularity: number | null;
  season: string | null;
  seasonYear: number | null;
  description: string | null;
  genres: string[] | null;
  title: MediaTitle;
  coverImage: CoverImage;
};

export type PageMedia = {
  Page: {
    pageInfo: {
      total: number | null;
      currentPage: number;
      lastPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    media: Media[];
  };
};

export type MediaDetail = {
  Media: Media & {
    studios?: { nodes: { name: string }[] };
    characters?: {
      edges: {
        role: string;
        node: { name: { full: string }; image: { medium: string | null } };
      }[];
    };
  };
};

export type MediaSort =
  | "TRENDING_DESC"
  | "POPULARITY_DESC"
  | "SCORE_DESC"
  | "START_DATE_DESC"
  | "TITLE_ROMAJI";

export type MediaSeason = "WINTER" | "SPRING" | "SUMMER" | "FALL";
