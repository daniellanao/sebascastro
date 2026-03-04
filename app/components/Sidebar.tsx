"use client";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 z-40 hidden h-full w-56 flex-col border-r border-black/10 bg-white/95 backdrop-blur-md md:flex"
      aria-label="Main navigation"
    >
      <div className="flex flex-1 flex-col justify-between p-8">
        <div>
          <a
            href="#home"
            className="font-display text-xl tracking-[0.2em] text-black"
          >
            PORTFOLIO
          </a>
        </div>
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm tracking-[0.25em] text-black/70 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-xs tracking-widest text-black/40">
          AUDIOVISUAL DIRECTOR
        </div>
      </div>
    </aside>
  );
}
