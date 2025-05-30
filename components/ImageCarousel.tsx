"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from "react";

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const carousel = carouselRef.current;

      if (carousel) {
        gsap.fromTo(
          carousel,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: carousel,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const images = [
    {
      src: "/placeholder-resort-lobby.jpg",
      alt: "Elegant resort lobby and reception area",
    },
    {
      src: "/placeholder-resort-pool.jpg",
      alt: "Stunning infinity pool with ocean views",
    },
    {
      src: "/placeholder-resort-suite.jpg",
      alt: "Luxurious suite with panoramic views",
    },
    {
      src: "/placeholder-resort-dining.jpg",
      alt: "Fine dining restaurant with terrace seating",
    },
    {
      src: "/placeholder-resort-spa.jpg",
      alt: "Tranquil spa and wellness center",
    },
    {
      src: "/placeholder-resort-beach.jpg",
      alt: "Private beach access and water activities",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-[family-name:var(--font-playfair)] md:text-4xl font-bold text-[#2C5F41] mb-4">
          Resort Gallery
        </h2>
        <p className="text-slate-600 font-[family-name:var(--font-jost)] max-w-2xl mx-auto">
          Discover the extraordinary at Sakae Resort, where luxury meets
          serenity. Our curated gallery showcases the finest amenities and
          breathtaking landscapes that await you. From world-class
          accommodations to pristine natural beauty, each image captures the
          essence of paradise. Experience the perfect blend of modern comfort
          and tropical elegance that defines the Sakae Resort experience.
        </p>
      </div>

      <div ref={carouselRef}>
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 cursor-pointer" />
          <CarouselNext className="right-2 cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
}
