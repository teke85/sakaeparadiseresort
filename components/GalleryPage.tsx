// app/gallery/page.tsx
"use client";

import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092514/2022-08-10_2_ct1dud.jpg",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092513/unnamed_2_iicprg.webp",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092512/unnamed_1_agsbsn.webp",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092512/liseli-lodge-zambia-casual-dining-restaurants-22_sidmed.webp",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092512/liseli-lodge-zambia-casual-dining-restaurants-18_s5foug.webp",
  "https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092511/liseli-lodge-zambia-casual-dining-restaurants-15_lak6bm.webp",
  // Add more images as needed
];

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function GalleryPage() {
  return (
    <main className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-playfair text-[#8B5A2B] font-bold mb-10 text-center">
        Our Gallery
      </h1>
      <PhotoProvider>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="overflow-hidden break-inside-avoid"
            >
              <PhotoView src={src}>
                <Image
                  src={src}
                  alt={`Liseli Lodge image ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </PhotoView>
            </motion.div>
          ))}
        </div>
      </PhotoProvider>
    </main>
  );
}
