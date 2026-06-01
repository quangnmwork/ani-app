import { Suspense } from "react";
import { anilist } from "@/app/lib/anilist/client";
import { MEDIA_LIST_QUERY } from "@/app/lib/anilist/queries";
import type { MediaSort, PageMedia } from "@/app/lib/anilist/types";
import { MediaGrid } from "@/app/components/media/media-grid";

type PageProps = {
  searchParams: Promise<{
    sort?: string;
    season?: string;
    year?: string;
    type?: string;
  }>;
};

const SORT_MAP: Record<string, MediaSort> = {
  trending: "TRENDING_DESC",
  popular: "POPULARITY_DESC",
  score: "SCORE_DESC",
  newest: "START_DATE_DESC",
};

async function BrowseResults({
  sort,
  season,
  year,
  type,
}: {
  sort: MediaSort;
  season?: string;
  year?: number;
  type: "ANIME" | "MANGA";
}) {
  const data = await anilist<PageMedia>(MEDIA_LIST_QUERY, {
    page: 1,
    perPage: 24,
    sort: [sort],
    season: season?.toUpperCase(),
    seasonYear: year,
    type,
  });

  return <MediaGrid items={data.Page.media} />;
}

async function BrowseContent({ searchParams }: PageProps) {
  const params = await searchParams;
  const sort = SORT_MAP[params.sort ?? "popular"] ?? "POPULARITY_DESC";
  const year = params.year ? Number(params.year) : undefined;
  const type = params.type === "MANGA" ? "MANGA" : "ANIME";

  return (
    <BrowseResults sort={sort} season={params.season} year={year} type={type} />
  );
}

export default function BrowsePage({ searchParams }: PageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-white">Browse</h1>

      {/* TODO: filter sidebar — genre, season, format, status */}
      <Suspense fallback={<p className="text-zinc-500">Loading...</p>}>
        <BrowseContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
