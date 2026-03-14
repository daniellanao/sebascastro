"use client";

export default function FashionFilmHero({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="relative w-full bg-black">
      <div className="mx-auto max-w-[1400px] px-4 pt-20 pb-8 md:pt-8 md:pb-12 md:px-8 lg:px-12">
        <h1 className="font-montserrat font-bold text-2xl text-white mb-6 md:text-3xl lg:text-4xl tracking-tight">
          CHICHA
        </h1>
        <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/70 mb-8 md:mb-10">
          Fashion Film
        </p>
      </div>
      <div className="relative aspect-video w-full max-w-[1400px] mx-auto overflow-hidden">
        <video
          src={videoUrl}
          loop
          playsInline
          autoPlay
          controls
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="CHICHA fashion film"
        />
      </div>
      <div className="h-12 md:h-16 bg-black" aria-hidden />
    </div>
  );
}
