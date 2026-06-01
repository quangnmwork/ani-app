import { Suspense } from "react";
import { notFound } from "next/navigation";
import { anilist } from "@/app/lib/anilist/client";
import { MEDIA_DETAIL_QUERY } from "@/app/lib/anilist/queries";
import type { MediaDetail } from "@/app/lib/anilist/types";
import { getDisplayTitle } from "@/app/lib/utils";

type PageProps = {
  params: Promise<{ id: string }>;
};

async function MangaDetailContent({ params }: PageProps) {
  const { id } = await params;
  const mediaId = Number(id);
  if (Number.isNaN(mediaId)) notFound();

  const data = await anilist<MediaDetail>(MEDIA_DETAIL_QUERY, {
    id: mediaId,
    type: "MANGA",
  });

  const media = data.Media;
  if (!media) notFound();

  const title = getDisplayTitle(media.title);

  return (
    <>
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      {media.averageScore != null && (
        <p className="mt-2 text-green-400">{media.averageScore}% average score</p>
      )}
      {/* TODO: manga-specific layout — chapters, volumes, authors */}
    </>
  );
}

export default function MangaDetailPage({ params }: PageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Suspense fallback={<p className="text-zinc-500">Loading manga...</p>}>
        <MangaDetailContent params={params} />
      </Suspense>
    </main>
  );
}
