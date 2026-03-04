import Commercials from "./components/Commercials";

export default function Home() {
  return (
    <>
      <Commercials />

      <section
        id="about"
        className="min-h-screen border-t border-black/10 bg-white px-8 py-24 md:px-16"
      >
        <h2 className="font-display text-3xl tracking-[0.2em] text-black md:text-4xl">
          ABOUT
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
            Director with a focus on narrative and visual craft. Every project
            is approached with a clear vision and attention to detail, from
            concept to final cut.
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
            Experience across commercials, short films, music videos, and
            branded content. Collaborating with agencies and brands to create
            work that stands out.
          </p>
        </div>
      </section>

      <section
        id="awards"
        className="min-h-screen border-t border-black/10 bg-white px-8 py-24 md:px-16"
      >
        <h2 className="font-display text-3xl tracking-[0.2em] text-black md:text-4xl">
          AWARDS
        </h2>
        <ul className="mt-12 space-y-8 md:max-w-2xl">
          {[
            { title: "Best Director", festival: "Film Festival Name", year: "2024" },
            { title: "Gold Award — Commercial", festival: "Advertising Awards", year: "2023" },
            { title: "Best Short Film", festival: "Indie Film Fest", year: "2023" },
          ].map((award) => (
            <li
              key={award.title}
              className="flex flex-wrap items-baseline justify-between gap-4 border-b border-black/10 pb-6"
            >
              <span className="font-medium text-black">{award.title}</span>
              <span className="text-zinc-500">
                {award.festival} · {award.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        className="min-h-screen border-t border-black/10 bg-white px-8 py-24 md:px-16"
      >
        <h2 className="font-display text-3xl tracking-[0.2em] text-black md:text-4xl">
          CONTACT
        </h2>
        <div className="mt-12 flex flex-col gap-6">
          <a
            href="mailto:hello@example.com"
            className="text-xl text-amber-700 underline decoration-amber-700/30 underline-offset-4 transition-colors hover:text-amber-800"
          >
            hello@example.com
          </a>
          <a
            href="#"
            className="text-xl text-zinc-600 transition-colors hover:text-black"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-xl text-zinc-600 transition-colors hover:text-black"
          >
            Vimeo
          </a>
        </div>
      </section>
    </>
  );
}
