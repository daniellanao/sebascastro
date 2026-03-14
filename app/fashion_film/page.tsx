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

      {/* Description */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-white/50 mb-6 md:mb-8">
          Chicha
        </p>
        <div className="max-w-2xl space-y-4 font-montserrat text-sm md:text-base text-white/90 leading-relaxed">
          <p>
            Beyond the labels of the sensationalist press and kitsch aesthetics lies a set of values that hold a nation together. Chicha is a living system—modern, global, and deeply Andean.
          </p>
          <p>
            We've taken the oral traditions of the street and the humor of the city to create something new. CHICHA mixes the vibrant chaos of the capital with the prestige of Peruvian high-quality fabrics. A collection that is as humorous as it is structured, and as bold as the people who wear it.
          </p>
        </div>
      </div>

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
