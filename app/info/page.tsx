import InfoContactCard from "./InfoContactCard";

export const metadata = {
  title: "Info | Sebastian Castro",
  description: "Sebastian contact information.",
};

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-6 sm:py-10">
      <InfoContactCard />
    </main>
  );
}
