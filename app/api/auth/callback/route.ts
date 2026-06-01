import { NextResponse } from "next/server";

/**
 * OAuth callback — Authorization Code Grant
 * Setup: https://anilist.co/settings/developer
 * Redirect URL: http://localhost:3000/api/auth/callback
 * Docs: https://docs.anilist.co/guide/auth/
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
  }

  // TODO: exchange code for access token
  // POST https://anilist.co/api/v2/oauth/token
  // Store token in httpOnly cookie

  return NextResponse.redirect(new URL("/", request.url));
}
