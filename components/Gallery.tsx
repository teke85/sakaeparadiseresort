import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/Liseli_Lodge_Restaurant_Bar_IMG_8783_-_Copy_rcmyxs/liseli-lodge-zambia-casual-dining-restaurants-0.jpg",
    alt: "Restaurant dining area day view",
  },
  {
    src: "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/Liseli_Lodge_Restaurant_Bar_IMG_8752_a6t2ke/liseli-lodge-zambia-casual-dining-restaurants-15.jpg",
    alt: "Restaurant dining area night view",
  },
  {
    src: "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/Liseli_conference_hall_qo20mj/liseli-lodge-zambia-conference-venues-2.jpg",
    alt: "Conference venue",
  },
  {
    src: "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/Liseli_Lodge_Mongu_mpjx6r/liseli-lodge-zambia-lodges-0.jpg",
    alt: "Lodge exterior",
  },
  {
    src: "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/-Liseli_Lodge_IMG_20220727_115851_765_a1zs54/liseli-lodge-zambia-lodges-4.jpg",
    alt: "lounge area",
  },
  {
    src: "https://res.cloudinary.com/dhsjpmqz9/images/f_auto,q_auto,w_700,h_460,g_auto,c_fill/-Liseli_Lodge_IMG_8839_jq177y/liseli-lodge-zambia-lodges-17.jpg",
    alt: "Lodge activities",
  },
];

interface GalleryItemProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryItem = ({ src, alt, index }: GalleryItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;

    if (item) {
      gsap.fromTo(
        item.querySelector(".image-overlay"),
        { x: "0%" },
        {
          x: "100%",
          duration: 1.2,
          delay: index * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="image-wrapper rounded-lg overflow-hidden shadow-lg aspect-[4/3]"
    >
      <div className="image-overlay"></div>
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        width={500}
        height={500}
      />
    </div>
  );
};

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-lodge-light">
      <div className="container mx-auto">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl text-[#8B5A2B] font-[family-name:var(--font-playfair)] font-bold text-lodge-primary text-center mb-16 opacity-0"
        >
          Experience Sakae Paradise Resort Through Our Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </div>
        {/* View More Button */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="w-full sm:w-auto bg-transparent border font-[family-name:var(--font-jost)] hover:bg-[#e4b642] hover:text-white transition-colors duration-300 bg-[#9A6F00] text-white cursor-pointer text-base md:text-lg px-6 md:px-8 py-5 md:py-4 rounded-md font-medium"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
