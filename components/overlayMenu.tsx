"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { gsap } from "gsap";

type OverlayMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Accommodations", href: "/accommodations" },
  { title: "Activities", href: "/activities" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // GSAP animations setup
  useEffect(() => {
    if (isOpen) {
      // Animate the overlay in
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
        onStart: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "flex";
          }
        },
      });

      // Animate each link
      const links = linksRef.current?.children;
      if (links) {
        gsap.fromTo(
          links,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      // Animate footer
      gsap.fromTo(
        footerRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.6,
          ease: "power2.out",
        }
      );
    } else if (overlayRef.current) {
      // Animate the overlay out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
          }
        },
      });
    }
  }, [isOpen]);

  // Close on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-lodge-dark bg-opacity-95 backdrop-blur-sm flex-col overflow-hidden"
      style={{ display: "none", opacity: 0 }}
    >
      <div className="container mx-auto px-4 py-8 h-full flex flex-col">
        {/* Header with close button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-lodge-light cursor-pointer p-2 hover:text-lodge-accent transition-colors"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>

        {/* Menu links */}
        <div
          className="flex-grow flex flex-col items-center justify-center"
          ref={menuRef}
        >
          <nav className="text-center">
            <ul ref={linksRef} className="space-y-6 md:space-y-8">
              {menuLinks.map((link) => (
                <li key={link.title} className="overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "text-4xl md:text-3xl lg:text-4xl font-serif text-lodge-light",
                      "hover:text-lodge-accent transition-colors duration-300",
                      "block py-2 relative"
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer info */}
        <div
          ref={footerRef}
          className="mt-auto text-center text-lodge-light py-6"
        >
          <p className="text-sm md:text-base opacity-80">
            Liseli Lodge | Where nature meets luxury
          </p>
          <p className="text-sm opacity-70 mt-2">
            © 2025 Liseli Lodge. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
