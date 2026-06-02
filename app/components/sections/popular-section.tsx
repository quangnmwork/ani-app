import Link from "next/link";
import { anilist } from "@/app/lib/anilist/client";
import { POPULAR_QUERY } from "@/app/lib/anilist/queries";
import type { PageMediaResult } from "@/app/lib/anilist/types";
import { AnimeCard } from "@/app/components/media/anime-card";

export async function PopularSection() {
  const data = await anilist<PageMediaResult>(POPULAR_QUERY, { page: 1, perPage: 15 });
  const items = data.Page.media;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between px-4 sm:px-6">
        <h2 className="text-lg font-bold tracking-tight">All Time Popular</h2>
        <Link
          href="/browse?sort=POPULARITY_DESC"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          View all →
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto px-4 pb-3 sm:px-6 [scrollbar-width:none]">
        {items.map((media) => (
          <AnimeCard key={media.id} media={media} />
        ))}
      </div>
    </section>
  );
}
