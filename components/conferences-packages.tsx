"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Half-Day Package",
    price: "K450",
    description: "Perfect for short meetings and presentations.",
    features: [
      "Conference room for up to 4 hours",
      "Basic audiovisual equipment",
      "Coffee, tea, and water service",
      "Wi-Fi access",
      "Notepads and pens",
    ],
    popular: false,
  },
  {
    title: "Full-Day Package",
    price: "K850",
    description: "Ideal for day-long conferences and workshops.",
    features: [
      "Conference room for up to 8 hours",
      "Complete audiovisual setup",
      "Morning and afternoon refreshments",
      "Buffet lunch",
      "Wi-Fi access",
      "Notepads and pens",
      "Dedicated event coordinator",
    ],
    popular: true,
  },
  {
    title: "Executive Package",
    price: "K1,250",
    description: "Premium offering for high-level meetings and events.",
    features: [
      "Executive boardroom for up to 8 hours",
      "Advanced audiovisual and conferencing technology",
      "Premium refreshments throughout the day",
      "Gourmet lunch menu",
      "Wi-Fi access",
      "Luxury stationery",
      "Dedicated event coordinator",
      "Post-meeting networking reception",
    ],
    popular: false,
  },
];

export function ConferencesPackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl text-[#8B5A2B] font-bold mb-4 font-[family-name:var(--font-playfair)]"
          >
            Conference Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-jost)]"
          >
            Choose from our range of conference packages designed to meet your
            specific needs and budget.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute font-[family-name:var(--font-jost)] top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 font-[family-name:var(--font-jost)]">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground"> / person</span>
                </div>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-lodge-accent text-white hover:bg-lodge-accent-dark"
                  variant={pkg.popular ? "default" : "outline"}
                >
                  Book This Package
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 font-jost">
            Need a custom package for your specific requirements?
          </p>
          <Button className="font-jost" variant="outline" size="lg">
            Contact Us for Custom Quotes
          </Button>
        </div>
      </div>
    </section>
  );
}
