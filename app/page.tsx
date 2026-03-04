import Commercials from "./components/Commercials";
import About from "./components/About";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <>
      <Commercials />
      <About />
      <Awards />

      <section
        id="contact"
        className="min-h-screen border-t border-black/10 bg-white px-8 py-12 md:px-16 md:py-16"
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
