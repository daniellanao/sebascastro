"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Advertising", href: "#commercials" },
  { label: "Documentaries", href: "/documentaries" },
  { label: "Fashion Film", href: "/fashion_film" },  
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
  "px-6 py-4 font-display text-sm text-black/70 transition-colors hover:bg-black/5 hover:text-black block w-full text-left";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMenu = () => setOpen(false);

  /** On other pages, anchor links must go to home with hash (e.g. /#commercials). */
  const hrefFor = (href: string) =>
    isAnchor(href) && !isHome ? `/${href}` : href;

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-black/10 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden"
      aria-label="Mobile navigation"
    >
      <Link
        href={hrefFor("#commercials")}
        onClick={closeMenu}
        className="flex flex-col"
      >
        <span className="font-montserrat font-extrabold text-lg text-black">
          Sebastian Castro
        </span>
        <span className="font-montserrat text-xs text-black/70">
          Director & Producer
        </span>
      </Link>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-black/20 text-black transition-colors hover:border-black/50 hover:bg-black/5"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full border-b border-black/10 bg-white/98 backdrop-blur-md transition-[visibility,opacity] duration-200 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-0 py-4">
          {navItems.map((item) => {
            const effectiveHref = hrefFor(item.href);
            const external = item.openInNewTab ?? isExternal(item.href);
            const internal = isInternalRoute(effectiveHref);

            if (internal) {
              return (
                <Link
                  key={item.href}
                  href={effectiveHref}
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                onClick={closeMenu}
                className={linkClass}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
