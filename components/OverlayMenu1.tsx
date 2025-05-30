"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import Link from "next/link";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms & Suites", href: "/accomodations" },
  { label: "Dining", href: "/dining" },
  { label: "Experiences", href: "/experiences" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  // Create a timeline ref to access it across effects
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuContentRef.current &&
        !menuContentRef.current.contains(event.target as Node)
      ) {
        // Instead of calling onClose directly, play the exit animation first
        if (timelineRef.current) {
          timelineRef.current.reverse().then(() => {
            if (overlayRef.current) {
              gsap.set(overlayRef.current, {
                visibility: "hidden",
                display: "none",
              });
            }
            document.body.style.overflow = "";
            onClose();
          });
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return;

    // Initial setup - menu is invisible
    gsap.set(overlayRef.current, {
      opacity: 0,
      visibility: "hidden",
      display: "none",
    });
    gsap.set(menuRef.current, { opacity: 0, y: -50 });
    gsap.set(itemsRef.current, { opacity: 0, y: 30 });

    // Create a new timeline and store it in the ref
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    // Animation for opening
    tl.to(overlayRef.current, {
      opacity: 1,
      visibility: "visible",
      display: "flex",
      duration: 0.5,
      ease: "power3.inOut",
    })
      .to(
        menuRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .to(
        itemsRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

    if (isOpen) {
      document.body.style.overflow = "hidden";
      tl.play();
    } else {
      // Only call reverse if the timeline exists and has been played
      if (tl.progress() > 0) {
        tl.reverse().then(() => {
          if (overlayRef.current) {
            gsap.set(overlayRef.current, {
              visibility: "hidden",
              display: "none",
            });
          }
          document.body.style.overflow = "";
        });
      } else {
        // If the timeline hasn't been played, just set visibility to hidden
        if (overlayRef.current) {
          gsap.set(overlayRef.current, {
            visibility: "hidden",
            display: "none",
          });
        }
        document.body.style.overflow = "";
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white/95 z-50 flex items-center justify-center"
      aria-hidden={!isOpen}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          // Use the same animation sequence as clicking outside
          if (timelineRef.current) {
            timelineRef.current.reverse().then(() => {
              if (overlayRef.current) {
                gsap.set(overlayRef.current, {
                  visibility: "hidden",
                  display: "none",
                });
              }
              document.body.style.overflow = "";
              onClose();
            });
          }
        }}
        className="absolute top-8 right-8 cursor-pointer text-luxury-light hover:text-luxury-accent transition-colors z-10"
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      <div
        ref={menuRef}
        className="relative z-10 w-full max-w-3xl mx-auto px-4"
      >
        <div ref={menuContentRef} className="w-full">
          <nav className="w-full">
            <ul className="flex flex-col items-center">
              {menuItems.map((item, index) => (
                <li
                  key={item.label}
                  ref={(el) => {
                    if (el) {
                      itemsRef.current[index] = el;
                    }
                  }}
                  className="overflow-hidden mb-6 group"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-4xl text-luxury-light hover:text-luxury-accent transition-colors block relative"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-16 flex flex-col items-center space-y-6">
            <Link
              href="/booking"
              onClick={onClose}
              className="border-2 w-full sm:w-auto bg-transparent font-[family-name:var(--font-jost)] hover:bg-[#e4b642] hover:text-white transition-colors duration-300 bg-[#9A6F00] text-white cursor-pointer text-base md:text-lg px-6 md:px-8 py-5 md:py-4 rounded-md font-medium"
            >
              Book Your Stay
            </Link>

            <Link
              href="/login"
              onClick={onClose}
              className="text-[#8B5A2B] font-medium hover:text-luxury-accent transition-colors relative group"
            >
              Client Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
    </div>
  );
};

export default OverlayMenu;
