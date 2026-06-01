import { Suspense } from "react";
import { notFound } from "next/navigation";
import { anilist } from "@/app/lib/anilist/client";
import { MEDIA_DETAIL_QUERY } from "@/app/lib/anilist/queries";
import type { MediaDetail } from "@/app/lib/anilist/types";
import { getDisplayTitle } from "@/app/lib/utils";

type PageProps = {
  params: Promise<{ id: string }>;
};

async function AnimeDetailContent({ params }: PageProps) {
  const { id } = await params;
  const mediaId = Number(id);
  if (Number.isNaN(mediaId)) notFound();

  const data = await anilist<MediaDetail>(MEDIA_DETAIL_QUERY, {
    id: mediaId,
    type: "ANIME",
  });

  const media = data.Media;
  if (!media) notFound();

  const title = getDisplayTitle(media.title);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="shrink-0">
        {media.coverImage.large && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.coverImage.large}
            alt={title}
            className="w-48 rounded-lg shadow-lg md:w-56"
          />
        )}
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        {media.averageScore != null && (
          <p className="mt-2 text-green-400">{media.averageScore}% average score</p>
        )}
        {media.genres && (
          <p className="mt-2 text-sm text-zinc-400">{media.genres.join(" · ")}</p>
        )}
        {/* TODO: parse HTML description safely */}
        {media.description && (
          <div
            className="prose prose-invert mt-6 max-w-none text-sm text-zinc-300"
            dangerouslySetInnerHTML={{ __html: media.description }}
          />
        )}
        {/* TODO: characters grid, relations, staff */}
      </div>
    </div>
  );
}

export default function AnimeDetailPage({ params }: PageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Suspense fallback={<p className="text-zinc-500">Loading anime...</p>}>
        <AnimeDetailContent params={params} />
      </Suspense>
    </main>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  try {
    const data = await anilist<MediaDetail>(MEDIA_DETAIL_QUERY, {
      id: Number(id),
      type: "ANIME",
    });
    const title = getDisplayTitle(data.Media.title);
    return { title: `${title} | AniTrack` };
  } catch {
    return { title: "Anime | AniTrack" };
  }
}
