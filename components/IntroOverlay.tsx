"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IntroOverlayProps {
  onComplete?: () => void;
}

const IntroOverlay = ({ onComplete }: IntroOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Ensure other content is hidden during intro
    document.body.style.overflow = "hidden";

    // Animate logo and tagline
    tl.fromTo(
      logoRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )
      .fromTo(
        taglineRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to([logoRef.current, taglineRef.current], {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.in",
      })
      .to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 1.6,
          ease: "power3.inOut",
          onComplete: () => {
            if (overlayRef.current) {
              overlayRef.current.style.display = "none";
            }
            // Re-enable scrolling
            document.body.style.overflow = "";
          },
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="overlay bg-[#1B4332] w-full h-screen fixed top-0 left-0 z-[100] flex flex-col items-center justify-center transition-transform duration-700"
    >
      <div ref={logoRef} className="opacity-0">
        <h1 className="text-white font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold tracking-tight mb-2">
          Sakae Paradise Resort
        </h1>
      </div>
      <div ref={taglineRef} className="opacity-0 max-w-[50%] text-center">
        <p className="text-white font-[family-name:var(--font-playfair)] text-xl md:text-2xl italic">
          &quot;Experience paradise at Sakae Paradise Resort&quot;
        </p>
      </div>
    </div>
  );
};

export default IntroOverlay;
