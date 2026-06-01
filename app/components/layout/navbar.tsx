import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-blue-400">
          AniTrack
        </Link>
        <Link href="/browse" className="text-sm text-zinc-400 hover:text-white">
          Browse
        </Link>
        <Link href="/search" className="text-sm text-zinc-400 hover:text-white">
          Search
        </Link>
        {/* TODO: OAuth login button — see app/api/auth/callback/route.ts */}
        <div className="ml-auto text-sm text-zinc-500">Login</div>
      </nav>
    </header>
  );
}
