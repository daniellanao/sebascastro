"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { fashionFilmImages } from "@/data/fashionFilm";

const gridClasses: Record<number, string> = {
  0: "col-span-2 row-span-2 aspect-[3/4] min-h-[200px] md:min-h-[280px]",
  1: "aspect-[4/5]",
  2: "aspect-[4/5]",
  3: "aspect-[4/5]",
  4: "aspect-[4/5]",
  5: "aspect-[4/5]",
  6: "aspect-[4/5]",
  7: "aspect-[4/5]",
};

export default function FashionFilmGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedIndex !== null) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, closeModal]);

  return (
    <>
      <div className="grid grid-cols-4 gap-3 md:gap-4 lg:gap-5">
        {fashionFilmImages.map((src, i) => {
          const isFirst = i === 0;
          const cellClass = gridClasses[i as keyof typeof gridClasses] ?? "aspect-[4/5]";
          return (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`relative ${cellClass} overflow-hidden rounded-lg bg-black cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
              aria-label={`View still ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Fashion film still ${i + 1}`}
                fill
                sizes={isFirst ? "(max-width: 768px) 66vw, 50vw" : "(max-width: 768px) 33vw, 25vw"}
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                priority={isFirst}
              />
            </button>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <div
            className="relative h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fashionFilmImages[selectedIndex]!}
              alt={`Fashion film still ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}
    </>
  );
}
