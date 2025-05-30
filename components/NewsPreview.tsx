"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "Discover Tranquility at Liseli Lodge",
    excerpt:
      "Escape to the serene suburb of Mongu and experience comfort and modernity at Liseli Lodge. 🌿 Perfectly located just 5km from Mongu town, this lodge offers the best of both worlds – peaceful surroundings and easy access to the city.",
    image:
      "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/-Liseli_Lodge_IMG_20220730_150618_063_ytfvjw/liseli-lodge-zambia-lodges-22.jpg",
    date: "May 10, 2025",
  },
  {
    title: "Looking for a peaceful getaway in Mongu?",
    excerpt:
      "Liseli Lodge is the perfect destination for you! With its tranquil surroundings and modern amenities, you can unwind and relax in style. 🌅 Book your stay today and experience the best of Mongu!",
    image:
      "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/-Liseli_Lodge_IMG_20220727_115851_765_a1zs54/liseli-lodge-zambia-lodges-4.jpg",
    date: "April 28, 2025",
  },
];

export function NewsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl text-[#8B5A2B] font-[family-name:var(--font-playfair)] md:text-4xl font-bold mb-4 font"
          >
            Latest News & Updates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-stone-600 font-[family-name:var(--font-jost)]"
          >
            Stay up to date with the latest happenings and special offers at
            Liseli Lodge.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#8B5A2B] mb-2 font-[family-name:var(--font-playfair)]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-stone-600 font-[family-name:var(--font-jost)]">
                  {item.excerpt}
                </p>
                <Link
                  href="/news"
                  className="text-primary text-[#8B5A2B] font-medium flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link
              className="text-white font-[family-name:var(--font-jost)]"
              href="/news"
            >
              View All News
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
