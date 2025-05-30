"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import GalleryPage from "@/components/GalleryPage";
import PageHeader from "@/components/PageHeader";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
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
      <PageHeader
        title="Gallery"
        subtitle="Step inside Liseli Lodge through our stunning visual collection"
        imageSrc="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092510/20230507_174149_nhrxnn.jpg"
      />
      <main className="pt-24">
        <GalleryPage />
      </main>
    </div>
  );
}
