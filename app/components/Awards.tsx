import Image from "next/image";
import { awards } from "@/data/awards";

function AwardCard({
  award,
  className = "",
}: {
  award: { title: string; subtitle: string };
  className?: string;
}) {
  return (
    <div className={`flex min-h-[140px] flex-col items-center justify-center text-center md:min-h-[160px] ${className}`}>
      {/* Laurel + title — festival/award style, no box */}
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <Image
          src="/awards/laurel_left.png"
          alt=""
          width={64}
          height={64}
          className="h-10 w-10 flex-shrink-0 object-contain md:h-14 md:w-14"
          aria-hidden
        />
        <p className="font-montserrat text-sm font-bold uppercase leading-tight tracking-[0.2em] text-black md:text-base md:tracking-[0.25em]">
          {award.title}
        </p>
        <Image
          src="/awards/laurel_right.png"
          alt=""
          width={64}
          height={64}
          className="h-10 w-10 flex-shrink-0 object-contain md:h-14 md:w-14"
          aria-hidden
        />
      </div>
      <p className="mt-3 text-xs leading-snug text-neutral-500 md:mt-4 md:text-sm">
        {award.subtitle}
      </p>
    </div>
  );
}

export default function Awards() {
  return (
    <section
      id="awards"
      className="border-t border-black/10 bg-white px-6 py-12 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-montserrat font-bold text-xl text-black md:text-2xl">
          AWARDS
        </h2>

        {/* 3 per row, all same size — 7th award centered */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {awards.map((award, i) => (
            <AwardCard
              key={`${award.title}-${i}`}
              award={award}
              className={i === 6 ? "lg:col-start-2" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
