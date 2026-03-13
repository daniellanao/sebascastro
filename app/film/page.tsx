import Image from "next/image";

const FILM_IMAGE =
  "https://jmdxivxptjvdta5b.public.blob.vercel-storage.com/luna_roja_sebastian_castro.png";

export const metadata = {
  title: "Film | Sebastian Castro",
  description: "Film by Sebastian Castro. Luna Roja.",
};

export default function FilmPage() {
  return (
    <section
      id="film"
      className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8"
    >
      <h1 className="font-montserrat text-sm uppercase tracking-[0.4em] text-white/70 mb-8 md:mb-10">
        Coming Soon
      </h1>
      <div className="relative w-full max-w-5xl aspect-[3/4] md:aspect-video max-h-[90vh]">
        <Image
          src={FILM_IMAGE}
          alt="Luna Roja - Sebastian Castro"
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
