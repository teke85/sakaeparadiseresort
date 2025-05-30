import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Luxury Accommodation",
    description:
      "Experience our bespoke suites that are carefully fitted with high end natural pieces and luxurious designer bathrooms with a nature viewing windows. - Sakae Paradise Resort is a captivating destination that blends smoothly with its natural surroundings like no other.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748468376/SnapInsta.to_272963222_356533776015090_4314854765339037276_n_zdpece.jpg",
    alt: "Luxury hotel suite with natural elements",
  },
  {
    title: "Fine Dining",
    description:
      "Fine dining experience . A bespoke escape to Sakae Paradise - a perfect place to unwind and experience a peaceful moment to calm the mind, reflect and appreciate the artisanal beauty of nature.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748472268/SnapInsta.to_263979129_317789726656851_2493943016651511726_n_dy95nk.jpg",
    alt: "Elegant fine dining restaurant setup",
  },
  {
    title: "Restaurant & Bar",
    description:
      "Join us for refreshing Drinks at our bar. Experience a bespoke escape to Sakae - a perfect place to unwind and experience a peaceful moment to calm the mind, reflect and appreciate the artisanal beauty of nature",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748472390/SnapInsta.to_263785791_1350931042020561_7847770559428759198_n_wnplzm.jpg",
    alt: "Modern bar with cocktails and ambient lighting",
  },
  {
    title: "Conference Venue",
    description:
      "The clearest way to success is always being one with nature. That’s why we have created “The Mkutano”, our state-of-the-art business boardroom, offering functional, comfortable & tranquil spaces for working & interacting with others. For conferencing, meetings, focus group and workshop space, get in touch with us",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748472591/SnapInsta.to_313217621_1132688270704115_1762907861537137575_n_lq6tqj.jpg",
    alt: "Modern conference room with presentation setup",
  },
  {
    title: "Swimming Pool",
    description:
      "Cool off in our infinity pool with breathtaking views of the surrounding landscape.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748468381/SnapInsta.to_274927576_5363907503654126_7038262719269253345_n_tyebii.jpg",
    alt: "Infinity pool with scenic landscape view",
  },
  {
    title: "Animal Sanctuary",
    description: "Take time off to enjoy the wilderness.",
    image:
      "https://res.cloudinary.com/dpeg7wc34/image/upload/v1748468383/SnapInsta.to_484916501_675542618321130_1075775463653807146_n_jic7dy.jpg",
    alt: "Wildlife in natural sanctuary setting",
  },
];

const FeatureCard = ({
  title,
  description,
  image,
  alt,
  index,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    const titleEl = titleRef.current;
    const descEl = descriptionRef.current;

    if (card && img && titleEl && descEl) {
      // Set initial states
      gsap.set([img, titleEl, descEl], { opacity: 0 });
      gsap.set(img, { scale: 1.1 });
      gsap.set([titleEl, descEl], { y: 30 });

      // Create timeline for staggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        delay: index * 0.15,
      });

      // Image fade in with subtle scale
      tl.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        // Title slides up
        .to(
          titleEl,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        // Description slides up
        .to(
          descEl,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );

      // Card hover animation
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(card, {
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        duration: 0.3,
        ease: "power2.out",
      });

      const handleMouseEnter = () => hoverTl.play();
      const handleMouseLeave = () => hoverTl.reverse();

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg border border-lodge-primary/10 overflow-hidden group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          ref={imageRef}
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width="400"
          height="300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <h3
          ref={titleRef}
          className="text-xl text-[#8B5A2B] font-[family-name:var(--font-playfair)] font-bold text-lodge-primary mb-3"
        >
          {title}
        </h3>
        <p
          ref={descriptionRef}
          className="text-[#3c3c3c] font-[family-name:var(--font-jost)] leading-relaxed"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      // Set initial states
      gsap.set([headingRef.current, subheadingRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create timeline for header animations
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      headerTl
        .to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto">
        <h2
          ref={headingRef}
          className="text-3xl text-[#4d4c4c] md:text-4xl font-[family-name:var(--font-playfair)] font-bold text-lodge-primary text-center mb-4"
        >
          Experience the Best of Sakae Paradise Resort
        </h2>

        <p
          ref={subheadingRef}
          className="text-[#3c3c3c] font-[family-name:var(--font-jost)] text-xl text-center max-w-3xl mx-auto mb-16"
        >
          Discover the range of experiences and amenities that make your stay
          with us unforgettable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              alt={feature.alt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
