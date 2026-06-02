import Link from "next/link";
import { Search } from "lucide-react";

const navLinks = [
  { href: "/browse?type=ANIME", label: "Anime" },
  { href: "/browse?type=MANGA", label: "Manga" },
  { href: "/browse", label: "Browse" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Ani<span className="text-primary">Track</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <Link
          href="/search"
          className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
