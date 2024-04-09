import type { Metadata } from "next";
import { Rubik, Poppins } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
  fallback: ["sans-serif"],
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  fallback: ["sans-serif"],
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EddyDevv - Experienced Junior Full-Stack Developer",
  description:
    "EddyDevv - Experienced Junior Fullstack Developer, skilled in crafting efficient and scalable projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
