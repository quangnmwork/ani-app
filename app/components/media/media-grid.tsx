import type { Media } from "@/app/lib/anilist/types";
import { AnimeCard } from "./anime-card";

type MediaGridProps = {
  items: Media[];
};

export function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {items.map((media) => (
        <AnimeCard key={media.id} media={media} />
      ))}
    </div>
  );
}
