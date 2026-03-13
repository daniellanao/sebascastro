import { fashionFilmVideoUrl } from "@/data/fashionFilm";
import FashionFilmHero from "./FashionFilmHero";
import FashionFilmGallery from "./FashionFilmGallery";

export const metadata = {
  title: "Fashion Film | Sebastian Castro",
  description:
    "Fashion film by Sebastian Castro, director and producer. CHICHA.",
};

export default function FashionFilmPage() {
  return (
    <section
      id="fashionfilm"
      className="min-h-screen bg-black"
    >
      {/* Hero: video + title */}
      <FashionFilmHero videoUrl={fashionFilmVideoUrl} />

      {/* Editorial gallery */}
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-white/50 mb-10 md:mb-14">
          Stills
        </p>
        <FashionFilmGallery />
      </div>
    </section>
  );
}
