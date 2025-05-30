"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ConferencesHero() {
  return (
    <section className="relative pt-32 pb-32 min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/Liseli_conference_hall_qo20mj/liseli-lodge-zambia-conference-venues-2.jpg"
          alt="Conference Facilities at Liseli Lodge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Conference Facilities
          </h1>
          <p className="text-lg md:text-xl font-[family-name:var(--font-jost)]">
            Liseli Lodge in Mongu offers event space for conferences, weddings,
            kitchen parties and birthday parties. Conference rooms are equipped
            with audio-visual equipment, projectors, and Wi-Fi for business
            meetings and presentations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
