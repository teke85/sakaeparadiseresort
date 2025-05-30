import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

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

      gsap.fromTo(
        subheadingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
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
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row">
        {/* Left Column - Heading and Text */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#8B5A2B] font-bold mb-6 opacity-0"
          >
            Connect With Us
          </h2>
          <p
            ref={subheadingRef}
            className="text-lg text-[#3C3C3C] font-[family-name:var(--font-jost)] opacity-0"
          >
            Contact us today to book your stay or ask about our services.
            <br />
            Your oasis awaits!
          </p>

          {/* You can add contact information here if desired */}
          <div className="mt-10 space-y-4 hidden md:block">
            <div>
              <p className="font-medium text-lg text-lodge-dark font-[family-name:var(--font-jost)]">
                Email
              </p>
              <p className="text-[#3c3c3c] font-[family-name:var(--font-jost)]">
                reservations@liselilodge.com
              </p>
            </div>

            <div>
              <p className="font-medium text-lg text-lodge-dark font-[family-name:var(--font-jost)]">
                Phone
              </p>
              <p className="text-[#3c3c3c] font-[family-name:var(--font-jost)]">
                +260974303102 / +260964409805
              </p>
            </div>
            <div>
              <p className="font-medium text-lg text-lodge-dark font-[family-name:var(--font-jost)]">
                Opening hours
              </p>
              <p className="text-[#3c3c3c] font-[family-name:var(--font-jost)]">
                Monday - Sunday: 9:00 AM - 17:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-1/2">
          <form ref={formRef} className="space-y-8 opacity-0">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your name"
                className="w-full py-3 px-1 bg-transparent border-b border-gray-300 focus:border-yellow-600 focus:outline-none placeholder-gray-500 text-[#3C3C3C] font-[family-name:var(--font-jost)]"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-3 px-1 bg-transparent border-b border-gray-300 focus:border-yellow-600 focus:outline-none placeholder-gray-500 text-[#3C3C3C] font-[family-name:var(--font-jost)]"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                className="w-full py-3 px-1 bg-transparent border-b border-gray-300 focus:border-yellow-600 focus:outline-none placeholder-gray-500 text-[#3C3C3C] font-[family-name:var(--font-jost)]"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your message (optional)"
                rows={4}
                className="w-full py-3 px-1 bg-transparent border-b border-gray-300 focus:border-yellow-600 focus:outline-none placeholder-gray-500 text-[#3C3C3C] font-[family-name:var(--font-jost)] resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="bg-[#774f2a] hover:bg-[#a87748] text-white font-medium py-3 px-12 uppercase text-sm tracking-wider"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
