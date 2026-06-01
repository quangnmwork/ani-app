import { PopularSeasonSection } from "@/app/components/sections/popular-season-section";
import { TopAnimeSection } from "@/app/components/sections/top-anime-section";
import { TrendingSection } from "@/app/components/sections/trending-section";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl">
      <section className="px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-white">Track, discover, share</h1>
        <p className="mt-2 text-zinc-400">
          Your anime & manga companion — powered by AniList API
        </p>
      </section>

      <TrendingSection />
      <PopularSeasonSection />
      <TopAnimeSection />
    </main>
  );
}
