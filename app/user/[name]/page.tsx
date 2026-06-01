import { Suspense } from "react";

type PageProps = {
  params: Promise<{ name: string }>;
};

/**
 * User profile page — requires AniList OAuth for private data.
 * Public profile: query User(name: $name) { id name avatar { large } statistics { anime { count } manga { count } } }
 * Docs: https://docs.anilist.co/guide/auth/
 */
async function UserProfileContent({ params }: PageProps) {
  const { name } = await params;

  return (
    <>
      <h1 className="text-2xl font-bold text-white">@{name}</h1>
      <p className="mt-4 text-zinc-500">
        TODO: fetch user profile from AniList GraphQL — User query
      </p>
      {/* TODO: anime list, manga list, favorites, activity feed */}
    </>
  );
}

export default function UserProfilePage({ params }: PageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Suspense fallback={<p className="text-zinc-500">Loading profile...</p>}>
        <UserProfileContent params={params} />
      </Suspense>
    </main>
  );
}
