import { Suspense } from "react";
import { TrendingSection } from "@/app/components/sections/trending-section";
import { PopularSection } from "@/app/components/sections/popular-section";
import { TopSection } from "@/app/components/sections/top-section";

function SectionSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4 sm:px-6">
        <div className="h-6 w-36 animate-pulse rounded bg-muted" />
        <div className="h-4 w-16 animate-pulse rounded bg-muted" />
      </div>
      <div className="flex gap-3 overflow-hidden px-4 sm:px-6">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="w-36 shrink-0 sm:w-40">
            <div className="aspect-[3/4] animate-pulse rounded-md bg-muted" />
            <div className="mt-2 h-3 w-3/4 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 py-8">
      <Suspense fallback={<SectionSkeleton />}>
        <TrendingSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <PopularSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TopSection />
      </Suspense>
    </div>
  );
}
