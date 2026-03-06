"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { films } from "@/data/films";
import type { Film } from "@/data/films";

const commercialFilms = films.filter((f) => f.category === "Commercial");

function VideoModal({
  film,
  onClose,
}: {
  film: Film;
  onClose: () => void;
}) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [handleEscape]);

  if (!film.videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Watch ${film.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 animate-[fadeIn_0.25s_ease-out_forwards]"
        onClick={onClose}
        aria-hidden
      />

      {/* Content — smaller so Vimeo controls are visible at first glance */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col rounded-xl bg-zinc-900/95 p-4 shadow-2xl ring-1 ring-white/10 opacity-0 animate-[fadeInZoom_0.3s_ease-out_forwards] md:p-5">
        {/* Close X — top right, always visible */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-zinc-200 md:right-4 md:top-4 md:h-10 md:w-10"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <p className="mb-3 pr-12 text-sm font-medium text-white/90 md:mb-4 md:pr-14 md:text-base">
          {film.title}
        </p>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            src={film.videoUrl}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function Commercials() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const openModal = (e: React.MouseEvent, film: Film) => {
    e.preventDefault();
    if (film.videoUrl) setSelectedFilm(film);
  };

  return (
    <section
      id="commercials"
      className="min-h-screen bg-white px-2 pt-20 pb-16 md:pt-2 md:pb-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {commercialFilms.map((film) => (
            <button
              key={film.id}
              type="button"
              onClick={(e) => openModal(e, film)}
              className="group relative block w-full overflow-hidden rounded-lg bg-zinc-100 text-left shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:ring-black/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={film.image}
                  alt={film.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-colors duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-medium tracking-wide text-white drop-shadow-sm line-clamp-2">
                    {film.title}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedFilm && (
        <VideoModal
          film={selectedFilm}
          onClose={() => setSelectedFilm(null)}
        />
      )}
    </section>
  );
}
