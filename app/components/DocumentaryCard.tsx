import type { Documentary } from "@/data/documentaries";

export default function DocumentaryCard({ doc }: { doc: Documentary }) {
  return (
    <article className="mx-auto w-full max-w-4xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 shadow-lg ring-1 ring-black/5">
        <iframe
          src={doc.videoUrl}
          title={doc.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </article>
  );
}
