"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Indicator from "./Indicator";
import Link from "next/link";

// Image paths object for better maintainability
const IMAGES = {
  hero: {
    background:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748040958/7DEF8727-293B-4458-9C9E-CE403C20C817_ga6l7o.webp",
    // You can add more hero images here as needed
  },
};

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  // Removed unused isMobile variable

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });

    tl.fromTo(
      headingRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    )
      .fromTo(
        subheadingRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 bg-opacity-40 z-10"></div>
        <Image
          src={IMAGES.hero.background || "/placeholder.svg"}
          alt="Liseli Lodge"
          className="w-full h-full object-cover"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto md:mx-0 w-full">
          <h1
            ref={headingRef}
            className="text-white text-center md:text-left font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 leading-tight"
          >
            Luxury and Comfort Await You
          </h1>
          <p
            ref={subheadingRef}
            className="text-white text-center md:text-left font-[family-name:var(--font-jost)] text-base sm:text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 opacity-0"
          >
            Experience tranquility and adventure at Sakae Paradise Resort, where
            every moment is a memory in the making.
          </p>

          <div
            ref={ctaRef}
            className="mt-6 md:mt-10 opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center md:justify-center"
          >
            <Link href="/accomodations" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-transparent border font-[family-name:var(--font-jost)] hover:bg-[#9A6F00] hover:text-white transition-colors duration-300 bg-[#B5860C] text-white cursor-pointer text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-md font-medium">
                Explore Our Rooms
              </Button>
            </Link>
            <Link href="/booking" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-transparent border font-[family-name:var(--font-jost)] hover:bg-white/10 transition-colors duration-300 text-white cursor-pointer text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-md font-medium">
                Book Your Stay
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <Indicator />
        </div>
      </div>
    </section>
  );
};

export default Hero;
