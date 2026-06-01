import type { MediaTitle } from "@/app/lib/anilist/types";

/** Prefer english → romaji → native for display titles. */
export function getDisplayTitle(title: MediaTitle): string {
  return title.english ?? title.romaji ?? title.native ?? "Unknown";
}

/** Current anime season based on month. */
export function getCurrentSeason(): "WINTER" | "SPRING" | "SUMMER" | "FALL" {
  const month = new Date().getMonth();
  if (month <= 1 || month === 11) return "WINTER";
  if (month <= 4) return "SPRING";
  if (month <= 7) return "SUMMER";
  return "FALL";
}

export function getNextSeason(
  season: ReturnType<typeof getCurrentSeason>,
): "WINTER" | "SPRING" | "SUMMER" | "FALL" {
  const order = ["WINTER", "SPRING", "SUMMER", "FALL"] as const;
  const i = order.indexOf(season);
  return order[(i + 1) % order.length];
}
