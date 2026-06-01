import { Suspense } from "react";
import { anilist } from "@/app/lib/anilist/client";
import { SEARCH_QUERY } from "@/app/lib/anilist/queries";
import type { PageMedia } from "@/app/lib/anilist/types";
import { MediaGrid } from "@/app/components/media/media-grid";

type PageProps = {
  searchParams: Promise<{ q?: string; type?: string }>;
};

async function SearchResults({ query, type }: { query: string; type: "ANIME" | "MANGA" }) {
  if (!query.trim()) {
    return <p className="text-zinc-500">Enter a search term above.</p>;
  }

  const data = await anilist<PageMedia>(SEARCH_QUERY, {
    search: query,
    page: 1,
    perPage: 24,
    type,
  });

  if (data.Page.media.length === 0) {
    return <p className="text-zinc-500">No results for &quot;{query}&quot;</p>;
  }

  return <MediaGrid items={data.Page.media} />;
}

async function SearchContent({ searchParams }: PageProps) {
  const { q = "", type = "ANIME" } = await searchParams;
  const mediaType = type === "MANGA" ? "MANGA" : "ANIME";
  return <SearchResults query={q} type={mediaType} />;
}

export default function SearchPage({ searchParams }: PageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-white">Search</h1>

      {/* TODO: client search form with debounce — app/components/search/search-form.tsx */}
      <form className="mb-8">
        <input
          name="q"
          placeholder="Search anime or manga..."
          className="w-full max-w-md rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white placeholder:text-zinc-500"
        />
      </form>

      <Suspense fallback={<p className="text-zinc-500">Searching...</p>}>
        <SearchContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
