"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesPage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize ScrollTrigger for all sections
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => section.classList.add("revealed"),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        <h1 className="text-4xl text-[#3c3c3c] font-[family-name:var(--font-playfair)] font-bold text-center mb-10">
          Our Activities
        </h1>
        <Features />
      </main>

      <Footer />
    </div>
  );
}
