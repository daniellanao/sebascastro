"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Advertising", href: "#commercials" },
  { label: "Documentaries", href: "/documentaries" },
  { label: "Fashionfilm", href: "#fashionfilm" },
  { label: "Film", href: "#film" },
  { label: "Photography", href: "https://elzorrophotography.mypixieset.com/", openInNewTab: true },
  { label: "Awards", href: "#awards" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function isAnchor(href: string) {
  return href.startsWith("#");
}

const linkClass =
  "font-display text-sm text-black/70 transition-colors hover:text-black";

export default function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  /** On other pages, anchor links must go to home with hash (e.g. /#commercials). */
  const hrefFor = (href: string) =>
    isAnchor(href) && !isHome ? `/${href}` : href;

  return (
    <aside
      className="fixed left-0 top-0 z-40 hidden h-full w-56 flex-col border-r border-black/10 bg-white/95 backdrop-blur-md md:flex"
      aria-label="Main navigation"
    >
      <div className="flex flex-1 flex-col items-start justify-center p-8">
        <nav className="flex flex-col gap-2 items-start w-full">
          <div className="flex flex-col items-start mb-4">
            <Link
              href={hrefFor("#commercials")}
              className="font-montserrat font-extrabold text-2xl text-black"
            >
              Sebastian Castro
            </Link>
            <p className="font-montserrat text-sm text-black/70">
              Director & Producer
            </p>
          </div>

          {navItems.map((item) => {
            const effectiveHref = hrefFor(item.href);
            const external = item.openInNewTab ?? isExternal(item.href);
            const internal = isInternalRoute(effectiveHref);

            if (internal) {
              return (
                <Link
                  key={item.href}
                  href={effectiveHref}
                  className={linkClass}
                >
                  {item.label}
                </Link>
              );
            }

            if (external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <a
                key={item.href}
                href={effectiveHref}
                className={linkClass}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
