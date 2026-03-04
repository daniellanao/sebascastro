"use client";

const navItems = [
  { label: "Commercials", href: "#commercials" },
  { label: "Awards", href: "#awards" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 z-40 hidden h-full w-56 flex-col border-r border-black/10 bg-white/95 backdrop-blur-md md:flex"
      aria-label="Main navigation"
    >
      <div className="flex flex-1 flex-col items-start justify-center p-8">
        <nav className="flex flex-col gap-2 items-start w-full">
          <div className="flex flex-col items-start mb-4">
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

          {navItems.slice(0, 1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm text-black/70 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://elzorrophotography.mypixieset.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm text-black/70 transition-colors hover:text-black"
          >
            Photography
          </a>
          {navItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm text-black/70 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
