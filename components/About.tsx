"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

// Expanded image paths object to include about section
const IMAGES = {
  about: {
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748468383/SnapInsta.to_485167193_675542658321126_2314865681163441696_n_sarjnz.jpg",
    alt: "Sakae Paradise Resort main view",
  },
  overlay: {
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748468382/SnapInsta.to_275025586_379473564179276_6039117581983171312_n_xypboj.jpg",
    alt: "Resort details",
  },
  // Add a third smaller image for the floating effect
  floating: {
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748468383/SnapInsta.to_104204379_272099863906207_3220744666501970687_n_z8cfxb.jpg",
    alt: "Resort amenities",
  },
};

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const overlayImageRef = useRef<HTMLDivElement>(null);
  const floatingImageRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      // Animate the decorative element
      gsap.fromTo(
        decorRef.current,
        { width: 0 },
        {
          width: "80px",
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the heading
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the subheading
      gsap.fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the text paragraphs
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.7,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the main image (fade in from scale)
      gsap.fromTo(
        mainImageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the overlay image (slide up and fade in)
      gsap.fromTo(
        overlayImageRef.current,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate the floating image (slide up and fade in with slight rotation)
      gsap.fromTo(
        floatingImageRef.current,
        { y: 80, opacity: 0, scale: 0.8, rotation: -5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );

      // Add a subtle floating animation to the floating image
      gsap.to(floatingImageRef.current, {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-4 bg-[#FBF8F2]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            ref={decorRef}
            className="h-[2px] bg-[#B5860C] w-0 mx-auto mb-6"
          ></div>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl text-[#333333] font-ibarra mb-4 opacity-0 font-light"
          >
            Welcome to{" "}
            <span className="font-ibarra italic">Sakae Paradise Resort</span>
          </h2>
          <p
            ref={subheadingRef}
            className="text-lg md:text-xl font-jost italic text-[#333333] opacity-0"
          >
            Where elegance, comfort, and exceptional service come together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={imageWrapperRef}
            className="relative w-full order-2 md:order-1"
          >
            {/* Main Image Container */}
            <div
              ref={mainImageRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full opacity-0"
            >
              <Image
                src={IMAGES.about.src || "/placeholder.svg"}
                alt={IMAGES.about.alt}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Overlay Image - Top Right */}
            <div
              ref={overlayImageRef}
              className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white opacity-0 z-10"
            >
              <Image
                src={IMAGES.overlay.src || "/placeholder.svg"}
                alt={IMAGES.overlay.alt}
                className="object-cover"
                fill
                sizes="360px"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 font-[family-name:var(--font-jost)]">
            <div ref={textRef} className="space-y-5 text-[#4d4c4c] opacity-0">
              <p className="leading-relaxed">
                Situated in Lusaka, 19 km from Lusaka Golf Club, Sakae Paradise
                Resort offers accommodation featuring an outdoor swimming pool,
                complimentary private parking, a garden, and a terrace. The
                property includes room service and a children&apos;s playground
                for guests. The on-site restaurant serves both African and
                international cuisine, and guests can also enjoy cocktails at
                the bar.
              </p>
              <p className="leading-relaxed">
                Each room at the resort is equipped with air conditioning, a
                wardrobe, a flat-screen TV, a private bathroom, bed linen,
                towels, and a balcony with a garden view.
              </p>
              <p className="leading-relaxed">
                Sakae Paradise Resort is located 23 km from Lusaka National
                Museum and 33 km from Lusaka South Country Club. The nearest
                airport is Kenneth Kaunda International, 16 km away, and the
                resort offers a paid airport shuttle service.
              </p>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href="/discover" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-transparent border font-[family-name:var(--font-jost)] hover:bg-[#9A6F00] hover:text-white transition-colors duration-300 bg-[#B5860C] text-white cursor-pointer text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-md font-medium">
                    Discover More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
