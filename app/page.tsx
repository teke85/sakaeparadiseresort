"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroOverlay from "@/components/IntroOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import ImageCarousel from "@/components/ImageCarousel";
import { NewsPreview } from "@/components/NewsPreview";
import { TestimonialsSection } from "@/components/WhatOurGuestsSay";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
      <IntroOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <ImageCarousel />
        <Gallery />
        <NewsPreview />
        <TestimonialsSection />
      </main>
    </div>
  );
}
