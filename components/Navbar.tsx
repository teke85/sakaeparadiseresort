"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import OverlayMenu from "./OverlayMenu1";
import Logo from "./Logo";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isDarkMode?: boolean;
};

const NavLink = ({
  href,
  children,
  className,
  delay = 0,
  isDarkMode = false,
}: NavLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (linkRef.current) {
      gsap.fromTo(
        linkRef.current,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
        }
      );
    }
  }, [delay]);

  return (
    <Link
      href={href}
      className={cn(
        "nav-link text-lg font-medium px-4 py-2 transition-colors duration-300 hover:text-lodge-accent relative group",
        isDarkMode ? "text-[#3C3C3C]" : "text-white",
        className
      )}
      ref={linkRef}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lodge-accent transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

type NavbarProps = {
  isDarkMode?: boolean;
};

const Navbar = ({ isDarkMode = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Animation for the navbar
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        {
          y: -100,
        },
        {
          y: 0,
          duration: 1,
          delay: 2.5,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 w-full z-40 shadow-sm transform -translate-y-full transition-all duration-500 h-16 md:h-20",
          scrolled
            ? "bg-[#FBF8F2] py-2" // White background on scroll
            : isDarkMode
            ? "bg-white py-4" // White background when in dark mode
            : "bg-transparent py-4" // Default transparent dark background
        )}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center h-full">
          <Link href="/" className="mb-4 md:mb-0 flex items-center relative">
            {scrolled ? (
              // Logo image when scrolled
              <div className="w-40 h-auto hidden md:block absolute -top-10 z-50">
                <Logo />
              </div>
            ) : (
              // Text version when not scrolled
              <span
                className={cn(
                  "flex items-center text-3xl font-[family-name:var(--font-ibarra)] font-semibold transition-colors duration-500",
                  isDarkMode && !scrolled ? "text-white" : "text-white"
                )}
              >
                SAKAE
                <span className="text-white text-base font-[family-name:var(--font-jost)]">
                  PARADISE RESORT
                </span>
              </span>
            )}
          </Link>

          <div className="flex items-center">
            <div className="hidden text-base font-[family-name:var(--font-playfair)] md:flex items-center space-x-1 md:space-x-2 mr-4">
              <NavLink
                href="/"
                delay={2.6}
                isDarkMode={isDarkMode}
                className={
                  scrolled
                    ? "text-[#1B4332] hover:text-lodge-accent"
                    : "text-white"
                }
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink
                href="/about"
                delay={2.7}
                isDarkMode={isDarkMode}
                className={
                  scrolled
                    ? "text-[#1B4332] hover:text-lodge-accent"
                    : "text-white"
                }
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink
                href="/accomodations"
                delay={2.8}
                isDarkMode={isDarkMode}
                className={
                  scrolled
                    ? "text-[#1B4332] hover:text-lodge-accent"
                    : "text-white"
                }
              >
                Accommodations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink
                href="/conferences"
                delay={2.9}
                isDarkMode={isDarkMode}
                className={
                  scrolled
                    ? "text-[#1B4332] hover:text-lodge-accent"
                    : "text-white"
                }
              >
                Conferences
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink
                href="/gallery"
                delay={3.0}
                isDarkMode={isDarkMode}
                className={
                  scrolled
                    ? "text-[#1B4332] hover:text-lodge-accent"
                    : "text-white"
                }
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink
                href="/contact"
                delay={3.1}
                isDarkMode={isDarkMode}
                className={
                  scrolled
                    ? "text-[#1B4332] hover:text-lodge-accent"
                    : "text-white"
                }
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </div>

            <button
              onClick={toggleMenu}
              className={cn(
                "flex items-center cursor-pointer justify-center p-2 rounded-full transition-colors duration-300",
                scrolled
                  ? "bg-white text-lodge-primary hover:text-[#E7AE01] hover:bg-lodge-light/80"
                  : "bg-white text-lodge-primary hover:text-[#E7AE01] hover:bg-lodge-light/50"
              )}
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
