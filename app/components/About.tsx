"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ABOUT_IMAGES = [
  "/about/sebastian_castro_filmmaker.jpg",
  "/about/sebastian_castro_filmmaker2.jpg",
  "/about/sebastian_castro_nike.jpg",
  "/about/sebastian_castro_unicef.jpg",
  "/about/sebastian_castro.jpg"
];

const ROTATE_INTERVAL_MS = 5000;

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ABOUT_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="about"
      className="border-t border-black/10 bg-white px-6 py-6 md:px-12 md:py-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-montserrat font-bold text-xl text-black md:text-2xl">
          ABOUT ME
        </h2>

        <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8 lg:items-start">
          <div className="relative aspect-[3/4] w-full max-w-full overflow-hidden rounded-lg bg-zinc-100 md:max-h-[220px] md:max-w-[200px] lg:max-h-[280px] lg:max-w-[280px]">
            {ABOUT_IMAGES.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt="Sebastian Castro, filmmaker and director"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 200px, 280px"
                className="object-cover transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: index === i ? 1 : 0,
                  zIndex: index === i ? 1 : 0,
                }}
                priority
              />
            ))}
          </div>

          {/* Bio & Approach */}
          <div className="flex min-w-0 flex-col gap-3">
            <div className="space-y-2">
            <h3 className="font-montserrat font-bold text-sm text-black">
                Bio
              </h3>
              <p className="text-sm leading-snug text-neutral-600 sm:text-base">
                Director and producer with over 15 years of experience
                producing high-quality video content for global brands and
                organizations. Strong background in in-house content production,
                post-production, and cinematic storytelling, with a proven
                ability to translate brand strategy into engaging, clear, and
                emotionally resonant video pieces.
              </p>
              <p className="text-sm leading-snug text-neutral-600 sm:text-base">
                Co-founder of an audiovisual production company, with extensive
                hands-on experience across shooting, editing, color grading, and
                creative execution. Comfortable working within brand guidelines,
                tight timelines, and cross-functional teams.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-montserrat font-bold text-sm text-black">
                My Approach
              </h3>
              <p className="text-sm leading-snug text-neutral-600 sm:text-base">
                My approach is rooted in the synergy between creative vision and
                technical mastery. Having co-founded a production house, I
                understand that a great piece of content is born from the
                balance of bold storytelling and efficient execution. I
                specialize in cinematic world-building—using meticulous visual
                language to translate complex brand strategies into elegant,
                high-impact video pieces that resonate on a global scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
