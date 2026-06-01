import { Suspense } from "react";
import { anilist } from "@/app/lib/anilist/client";
import { TRENDING_QUERY } from "@/app/lib/anilist/queries";
import type { PageMedia } from "@/app/lib/anilist/types";
import { MediaCarousel } from "@/app/components/media/media-carousel";

async function TrendingContent() {
  const data = await anilist<PageMedia>(TRENDING_QUERY, {
    page: 1,
    perPage: 12,
  });

  return (
    <MediaCarousel
      title="Trending now"
      items={data.Page.media}
      viewAllHref="/browse?sort=trending"
    />
  );
}

export function TrendingSection() {
  return (
    <Suspense fallback={<SectionSkeleton title="Trending now" />}>
      <TrendingContent />
    </Suspense>
  );
}

function SectionSkeleton({ title }: { title: string }) {
  return (
    <section className="py-6 px-4">
      <h2 className="mb-4 text-lg font-semibold text-white">{title}</h2>
      <div className="flex gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 w-36 shrink-0 animate-pulse rounded-lg bg-zinc-800" />
        ))}
      </div>
    </section>
  );
}
