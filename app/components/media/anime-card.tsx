import Link from "next/link";
import type { Media } from "@/app/lib/anilist/types";
import { getDisplayTitle } from "@/app/lib/utils";

type AnimeCardProps = {
  media: Media;
};

export function AnimeCard({ media }: AnimeCardProps) {
  const href = media.type === "MANGA" ? `/manga/${media.id}` : `/anime/${media.id}`;
  const title = getDisplayTitle(media.title);

  return (
    <Link
      href={href}
      className="group block w-36 shrink-0 overflow-hidden rounded-lg bg-zinc-900 transition hover:ring-2 hover:ring-blue-500/50"
    >
      <div className="relative aspect-[2/3] bg-zinc-800">
        {media.coverImage.large ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.coverImage.large}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-zinc-500">
            No cover
          </div>
        )}
        {media.averageScore != null && (
          <span className="absolute right-1 top-1 rounded bg-black/70 px-1.5 py-0.5 text-xs font-medium text-green-400">
            {media.averageScore}%
          </span>
        )}
      </div>
      <p className="truncate px-2 py-2 text-sm text-zinc-200 group-hover:text-white">
        {title}
      </p>
    </Link>
  );
}
