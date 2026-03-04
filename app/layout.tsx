import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Audiovisual Director",
  description: "Portfolio of an audiovisual director — films, commercials, and visual storytelling.",
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
        <Sidebar />
        <MobileNav />
        <div className="min-h-screen md:pl-56">{children}</div>
      </body>
    </html>
  );
}
