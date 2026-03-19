import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import AppShell from "./components/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.sebascastro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: "Sebastian Castro, Director & Producer",
  description:
    "Director and producer with over 15 years of experience producing high-quality video content for global brands. Cinematic storytelling, commercials, and branded content.",
  openGraph: {
    title: "Sebastian Castro, Director & Producer",
    description:
      "Director and producer with over 15 years of experience producing high-quality video content for global brands. Cinematic storytelling, commercials, and branded content.",
    url: siteUrl,
    siteName: "Sebastian Castro",
    images: [
      {
        url: "/og_sebastian_castro.jpg",
        width: 1200,
        height: 630,
        alt: "Sebastian Castro, filmmaker and director",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian Castro, Director & Producer",
    description:
      "Director and producer with over 15 years of experience producing high-quality video content for global brands.",
    images: ["/og_sebastian_castro.jpg"],    
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}
      >
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  );
}
