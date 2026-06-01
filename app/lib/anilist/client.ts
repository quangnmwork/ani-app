import "server-only";

const ANILIST_URL = "https://graphql.anilist.co";

type AniListResponse<T> = {
  data: T;
  errors?: { message: string; status?: number }[];
};

export class AniListError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = "AniListError";
  }
}

/** POST to AniList GraphQL API. Server-only — use from Server Components or Route Handlers. */
export async function anilist<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: { revalidate?: number },
): Promise<T> {
  const res = await fetch(ANILIST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: options?.revalidate ?? 3600 },
  });

  const json: AniListResponse<T> = await res.json();

  if (!res.ok || json.errors?.length) {
    throw new AniListError(
      json.errors?.[0]?.message ?? `AniList request failed (${res.status})`,
      json.errors?.[0]?.status ?? res.status,
    );
  }

  return json.data;
}
