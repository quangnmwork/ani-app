import { Suspense } from "react";
import { anilist } from "@/app/lib/anilist/client";
import { MEDIA_LIST_QUERY } from "@/app/lib/anilist/queries";
import type { PageMedia } from "@/app/lib/anilist/types";
import { MediaCarousel } from "@/app/components/media/media-carousel";

async function TopAnimeContent() {
  const data = await anilist<PageMedia>(MEDIA_LIST_QUERY, {
    page: 1,
    perPage: 10,
    sort: ["SCORE_DESC"],
    type: "ANIME",
  });

  return (
    <MediaCarousel
      title="Top anime"
      items={data.Page.media}
      viewAllHref="/browse?sort=score"
    />
  );
}

export function TopAnimeSection() {
  return (
    <Suspense fallback={<div className="px-4 py-6 text-zinc-500">Loading top anime...</div>}>
      <TopAnimeContent />
    </Suspense>
  );
}
