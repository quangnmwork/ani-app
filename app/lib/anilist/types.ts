export type MediaTitle = {
  romaji: string | null;
  english: string | null;
};

export type CoverImage = {
  large: string | null;
  extraLarge: string | null;
  color: string | null;
};

export type MediaCard = {
  id: number;
  title: MediaTitle;
  coverImage: CoverImage;
  averageScore: number | null;
  episodes: number | null;
  status: string | null;
  genres: string[];
  season: string | null;
  seasonYear: number | null;
};

export type PageMediaResult = {
  Page: {
    media: MediaCard[];
  };
};
