import Image from "next/image";
import Link from "next/link";
import type { MediaCard } from "@/app/lib/anilist/types";

type Props = {
  media: MediaCard;
};

export function AnimeCard({ media }: Props) {
  const title = media.title.english ?? media.title.romaji ?? "Unknown";
  const cover = media.coverImage.extraLarge ?? media.coverImage.large;

  return (
    <Link href={`/anime/${media.id}`} className="group flex w-36 shrink-0 flex-col gap-2 sm:w-40">
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
        {cover && (
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 640px) 144px, 160px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {media.averageScore !== null && (
          <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-xs font-semibold text-white">
            ★ {(media.averageScore / 10).toFixed(1)}
          </span>
        )}
      </div>
      <p className="line-clamp-2 text-xs font-medium leading-tight text-foreground">{title}</p>
    </Link>
  );
}
