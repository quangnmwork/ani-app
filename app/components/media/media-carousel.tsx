import type { Media } from "@/app/lib/anilist/types";
import { AnimeCard } from "./anime-card";

type MediaCarouselProps = {
  title: string;
  items: Media[];
  viewAllHref?: string;
};

export function MediaCarousel({ title, items, viewAllHref }: MediaCarouselProps) {
  return (
    <section className="py-6">
      <div className="mb-4 flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {viewAllHref && (
          <a href={viewAllHref} className="text-sm text-blue-400 hover:underline">
            View all
          </a>
        )}
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 pb-2">
        {items.map((media) => (
          <AnimeCard key={media.id} media={media} />
        ))}
      </div>
    </section>
  );
}
