import { documentaries } from "@/data/documentaries";
import DocumentaryCard from "../components/DocumentaryCard";

export const metadata = {
  title: "Documentaries | Sebastian Castro",
  description:
    "Documentary films by Sebastian Castro, director and producer.",
};

export default function DocumentariesPage() {
  return (
    <section
      id="documentaries"
      className="min-h-screen bg-white px-6 pt-20 pb-16 md:pt-4 md:pb-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <h2 className="font-montserrat font-bold text-xl text-black mb-2 md:text-2xl">
          DOCUMENTARIES
        </h2>
        <div className="mt-10 flex flex-col gap-2 md:mt-12">
          {documentaries.map((doc) => (
            <DocumentaryCard key={doc.id} doc={doc} />
          ))}
        </div>
        {documentaries.length === 0 && (
          <p className="font-display text-sm text-black/60">
            Documentary work will be added here.
          </p>
        )}
      </div>
    </section>
  );
}
