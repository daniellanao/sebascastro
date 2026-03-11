import Image from "next/image";
import {
  fashionFilmVideoUrl,
  fashionFilmImages,
} from "@/data/fashionFilm";
import FashionFilmHero from "./FashionFilmHero";

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
        <div className="grid grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          <div className="relative col-span-2 row-span-2 aspect-[3/4] min-h-[200px] overflow-hidden rounded-lg bg-black md:min-h-[280px]">
            <Image
              src={fashionFilmImages[0]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 66vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              priority
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src={fashionFilmImages[1]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src={fashionFilmImages[2]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src={fashionFilmImages[3]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src={fashionFilmImages[4]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src={fashionFilmImages[5]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src={fashionFilmImages[6]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
            <Image
              src={fashionFilmImages[7]!}
              alt="Fashion film still"
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
