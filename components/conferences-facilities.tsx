"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Monitor, Wifi, Coffee, Mic, Layout } from "lucide-react";
import BookingInquiryModal from "@/components/BookingInquiryModal";

const facilities = [
  {
    title: "Main Conference Hall",
    description:
      "Our largest venue, perfect for conferences, seminars, and large corporate events. Features state-of-the-art audiovisual equipment and flexible seating arrangements.",
    image:
      "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/Liseli_Conference_2_gpyazo/liseli-lodge-zambia-conference-venues-0.jpg",
    capacity: "Up to 150 people",
    features: [
      "Projector & Screen",
      "Sound System",
      "High-Speed Wi-Fi",
      "Flexible Seating",
      "Climate Control",
      "Catering Options",
    ],
    price: "K5,000 per day",
  },
  {
    title: "Executive Boardroom",
    description:
      "An elegant, intimate space for board meetings, executive discussions, and small presentations. Equipped with premium amenities for productive sessions.",
    image:
      "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/Liseli_Conference_hall_1_dsqsv3/liseli-lodge-zambia-conference-venues-1.jpg",
    capacity: "Up to 20 people",
    features: [
      "Interactive Display",
      "Video Conferencing",
      "High-Speed Wi-Fi",
      "Executive Chairs",
      "Refreshment Service",
      "Natural Lighting",
    ],
    price: "K2,500 per day",
  },
];

const featureIcons = {
  "Projector & Screen": <Monitor className="h-4 w-4 mr-2" />,
  "High-Speed Wi-Fi": <Wifi className="h-4 w-4 mr-2" />,
  "Sound System": <Mic className="h-4 w-4 mr-2" />,
  "Flexible Seating": <Layout className="h-4 w-4 mr-2" />,
  "Refreshment Service": <Coffee className="h-4 w-4 mr-2" />,
  default: <Users className="h-4 w-4 mr-2" />,
};

export function ConferencesFacilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="space-y-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div
                className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl text-[#8B5A2B] font-[family-name:var(--font-jost)] font-bold mb-2">
                  {facility.title}
                </h2>
                <p className="text-muted-foreground font-[family-name:var(--font-jost)] mb-4">
                  {facility.description}
                </p>

                <div className="mb-2">
                  <span className="font-semibold font-[family-name:var(--font-jost)]">
                    Capacity:
                  </span>
                  {facility.capacity}
                </div>

                <div className="mb-2 font-[family-name:var(--font-jost)]">
                  <span className="font-semibold font-[family-name:var(--font-jost)]">
                    Price:
                  </span>
                  {facility.price}
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2 font-[family-name:var(--font-jost)]">
                    Features:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 font-[family-name:var(--font-jost)]">
                    {facility.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-muted-foreground"
                      >
                        {featureIcons[feature as keyof typeof featureIcons] ||
                          featureIcons.default}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => setModalOpen(true)}
                  className="font-[family-name:var(--font-jost)] bg-lodge-secondary hover:bg-lodge-accent-hover text-white rounded-md"
                >
                  Inquire About Booking
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BookingInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
