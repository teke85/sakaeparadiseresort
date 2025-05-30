import type { Metadata } from "next";
import {
  Lora,
  Inter,
  Playfair_Display,
  Ibarra_Real_Nova,
  Aboreto,
  Jost,
  Cormorant_Garamond,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/Scroll-to-top";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aboreto",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const ibarra = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibarra",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sakae Paradise Resort | Luxury Island Getaway",
  description:
    "Experience paradise at Sakae Paradise Resort - Premium beachfront accommodation with world-class amenities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} ${jost.variable} ${cormorant.variable} ${aboreto.variable} ${ibarra.variable} ${inter.variable} ${lora.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
