"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
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
      <div className="bg-white">
        {/* Pass isDarkMode prop to Navbar */}
        <Navbar isDarkMode={true} />
      </div>
      <main className="pt-24">
        <Contact />
      </main>
    </div>
  );
}
