"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F8F5F0] text-black py-8 sm:py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            <h3 className="text-lg md:text-xl text-[#8B5A2B] font-bold mb-3 md:mb-4 font-[family-name:var(--font-playfair)]">
              Sakae Paradise Resort
            </h3>
            <div className="flex justify-center sm:justify-start mb-3">
              <Image
                src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1748274604/sakae_logo_i0rria.png"
                alt="Liseli Lodge Logo"
                width={120}
                height={36}
                className="h-auto object-contain"
                priority
              />
            </div>
            <p className="text-black/70 text-center text-sm md:text-base font-[family-name:var(--font-jost)]">
              Experience the perfect blend of luxury and wilderness at our
              exclusive resort nestled in the heart of nature.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#8B5A2B] font-[family-name:var(--font-playfair)]">
              Quick Links
            </h3>
            <ul className="space-y-1 md:space-y-2 font-[family-name:var(--font-jost)]">
              <li>
                <Link
                  href="/"
                  className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodations"
                  className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                >
                  Accommodations
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#8B5A2B] hover:text-lodge-accent transition-colors text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#8B5A2B] font-[family-name:var(--font-playfair)]">
              Contact
            </h3>
            <ul className="space-y-1 md:space-y-2 font-[family-name:var(--font-jost)] text-black/70 text-sm md:text-base">
              <li>Limulunga Road, 4.5km from the junction</li>
              <li>Mongu Western Province</li>
              <li>
                <a
                  href="mailto:reservations@liselilodge.com"
                  className="hover:text-lodge-accent transition-colors"
                >
                  reservations@liselilodge.com
                </a>
              </li>
              <li className="text-sm md:text-base">
                <a
                  href="tel:+260974303102"
                  className="hover:text-lodge-accent transition-colors"
                >
                  +260974303102
                </a>
                /
                <a
                  href="tel:+260964409805"
                  className="hover:text-lodge-accent transition-colors"
                >
                  +260964409805
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#8B5A2B] font-[family-name:var(--font-playfair)]">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4 font-[family-name:var(--font-jost)]">
              <a
                href="#"
                className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-black/70 hover:text-lodge-accent transition-colors text-sm md:text-base"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 mt-8 pt-4 text-center text-black/50 text-sm">
          <p className="font-[family-name:var(--font-jost)]">
            &copy; {new Date().getFullYear()} Sakae Paradise Resort. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
