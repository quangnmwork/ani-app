import { headers } from "next/headers";
import { Suspense } from "react";
import { anilist } from "@/app/lib/anilist/client";
import { MEDIA_LIST_QUERY } from "@/app/lib/anilist/queries";
import type { PageMedia } from "@/app/lib/anilist/types";
import { getCurrentSeason } from "@/app/lib/utils";
import { MediaCarousel } from "@/app/components/media/media-carousel";

async function PopularSeasonContent() {
  await headers();
  const season = getCurrentSeason();
  const year = new Date().getFullYear();

  const data = await anilist<PageMedia>(MEDIA_LIST_QUERY, {
    page: 1,
    perPage: 12,
    sort: ["POPULARITY_DESC"],
    season,
    seasonYear: year,
    type: "ANIME",
  });

  return (
    <MediaCarousel
      title="Popular this season"
      items={data.Page.media}
      viewAllHref={`/browse?season=${season.toLowerCase()}&year=${year}`}
    />
  );
}

export function PopularSeasonSection() {
  return (
    <Suspense fallback={<div className="px-4 py-6 text-zinc-500">Loading season...</div>}>
      <PopularSeasonContent />
    </Suspense>
  );
}
