"use client";

const navItems = [
  { label: "Commercials", href: "#commercials" },
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
      <div className="flex flex-1 flex-col items-start justify-center p-8">
        <nav className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col items-start">
            <a
              href="#commercials"
              className="font-montserrat font-extrabold text-2xl text-black"
            >
              Sebastian Castro
            </a>
            <p className="font-montserrat text-sm text-black/70">
              Director & Producer
            </p>
          </div>

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
      </div>
    </aside>
  );
}
