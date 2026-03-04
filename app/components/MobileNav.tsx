"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-black/10 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden"
      aria-label="Mobile navigation"
    >
      <a
        href="#home"
        onClick={closeMenu}
        className="font-display text-sm tracking-[0.2em] text-black"
      >
        PORTFOLIO
      </a>

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
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="px-6 py-4 font-display text-sm tracking-[0.25em] text-black/70 transition-colors hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
