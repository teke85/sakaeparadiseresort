"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [storyRef, valuesRef, amenitiesRef, teamRef];

    sections.forEach((sectionRef) => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-white">
      <Navbar />
      <PageHeader
        title="About Liseli Lodge"
        subtitle="Discover our story and commitment to excellence"
        imageSrc="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092513/unnamed_4_c0yspr.webp"
      />

      {/* Our Story Section - Two column layout with image and text */}
      <section
        ref={storyRef}
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[#E7AE01] mb-8"></div>
            <p className="text-gray-700 mb-6 font-[family-name:var(--font-jost)]">
              Liseli Lodge was founded with a vision to create a serene and
              stylish getaway that redefines comfort and hospitality. Since
              opening in 2010, it has become a cherished destination known for
              its refined atmosphere and exceptional service.
            </p>
            <p className="text-gray-700 mb-6 font-[family-name:var(--font-jost)]">
              The name &quot;Liseli&quot;, meaning &quot;light&quot; in the
              local dialect, reflects our mission to offer a welcoming space
              that brings warmth, clarity, and elevated experiences to every
              guest. What began as a humble lodge has grown into a sought-after
              destination for travelers seeking quality and tranquility.
            </p>
            <p className="text-gray-700 font-[family-name:var(--font-jost)]">
              Today, Liseli Lodge is a symbol of modern Zambian
              hospitality—where timeless design, personalized service, and
              thoughtful amenities come together to offer a truly memorable
              stay.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092512/unnamed_1_agsbsn.webp"
              alt="The story of Liseli Lodge"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values - Three column feature section */}
      <section ref={valuesRef} className="py-20 bg-amber-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-[#E7AE01] mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto font-[family-name:var(--font-jost)]">
              At Liseli Lodge, our values guide everything we do. We believe in
              creating exceptional experiences while honoring our commitment to
              sustainability, authenticity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#E7AE01] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-4">
                Excellence
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-jost)]">
                We strive for excellence in every detail, from our
                accommodations to our service, ensuring each guest experiences
                the very best we have to offer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#E7AE01] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-4">
                Sustainability
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-jost)]">
                We are committed to preserving the natural environment and
                supporting local communities through responsible practices and
                partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#E7AE01] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-4">
                Authenticity
              </h3>
              <p className="text-gray-700 font-[family-name:var(--font-jost)]">
                We celebrate the unique culture and heritage of our region,
                offering genuine experiences that connect our guests with the
                heart of our destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Features - Similar to Kozo's image grid section */}
      <section
        ref={amenitiesRef}
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
            Amenities & Features
          </h2>
          <div className="w-20 h-1 bg-[#E7AE01] mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-3xl font-[family-name:var(--font-jost)] mx-auto">
            Discover the exceptional facilities and services that make Liseli
            Lodge a premier destination for discerning travelers seeking both
            adventure and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092509/2022-09-12_gtytgj.jpg"
              alt="Luxury Accommodations"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-30 flex items-end">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Luxury Accommodations
                </h3>
                <p className="text-white text-sm font-jost opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Our elegantly appointed rooms and suites offer the perfect
                  blend of comfort and style.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092512/liseli-lodge-zambia-casual-dining-restaurants-17_wrbz49.webp"
              alt="Fine Dining"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-30 flex items-end">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Fine Dining
                </h3>
                <p className="text-white text-sm font-jost opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Savor exquisite cuisine prepared with locally sourced
                  ingredients by our talented chefs.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092513/unnamed_2_iicprg.webp"
              alt="Wellness Spa"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-30 flex items-end">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Swimming Pool
                </h3>
                <p className="text-white font-jost text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Take a dive in our amazing swimming pool.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747521467/conference-hall_lag4dd.webp"
              alt="Adventure Activities"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-30 flex items-end">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Conference Venue
                </h3>
                <p className="text-white font-jost text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Our conference venue is equipped with state-of-the-art
                  technology and can accommodate up to 200 guests.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092514/2021-11-20_m7kgbc.jpg"
              alt="green environment"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-30 flex items-end">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Nice Spacious Gardens
                </h3>
                <p className="text-white font-jost text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Enjoy the beauty of our lush gardens, perfect for relaxation
                  and family gatherings.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="group relative h-80 overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747392688/20180701_161308_uuetan.jpg"
              alt="Private Events"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-30 flex items-end">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                  Private Events
                </h3>
                <p className="text-white font-jost text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Host unforgettable celebrations and gatherings in our elegant
                  event spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Similar to Kozo's team section */}
      <section ref={teamRef} className="py-20 bg-amber-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-[#E7AE01] mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to providing
              exceptional service and creating memorable experiences for our
              guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image
                  src="/assets/about/team-1.jpg"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-[#E7AE01] font-[family-name:var(--font-jost)] font-medium mb-4">
                  General Manager
                </p>
                <p className="text-gray-700 text-sm font-[family-name:var(--font-jost)]">
                  With over 15 years of experience in luxury hospitality, Sarah
                  ensures every aspect of your stay exceeds expectations.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image
                  src="/assets/about/team-2.jpg"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-1">
                  Michael Chen
                </h3>
                <p className="text-[#E7AE01] font-[family-name:var(--font-jost)] font-medium mb-4">
                  Executive Chef
                </p>
                <p className="text-gray-700 text-sm">
                  Chef Michael blends international techniques with local
                  flavors to create unforgettable culinary experiences.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image
                  src="/assets/about/team-3.jpg"
                  alt="Elena Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-1">
                  Elena Rodriguez
                </h3>
                <p className="text-[#E7AE01] font-[family-name:var(--font-jost)] font-medium mb-4">
                  Spa Director
                </p>
                <p className="text-gray-700 text-sm font-[family-name:var(--font-jost)]">
                  Elena&apos;s expertise in wellness and holistic therapies
                  ensures a rejuvenating experience for all our guests.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-80">
                <Image
                  src="/assets/about/team-4.jpg"
                  alt="David Okafor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-1">
                  David Okafor
                </h3>
                <p className="text-[#E7AE01] font-[family-name:var(--font-jost)] font-medium mb-4">
                  Head of Activities
                </p>
                <p className="text-gray-700 font-[family-name:var(--font-jost)] text-sm">
                  Born and raised locally, David shares his deep knowledge of
                  the region through expertly guided adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Similar to Kozo's call to action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
          Experience Liseli Lodge
        </h2>
        <p className="text-gray-700 font-[family-name:var(--font-jost)] max-w-2xl mx-auto mb-8">
          We invite you to discover the magic of Liseli Lodge. Book your stay
          today and embark on an unforgettable journey of luxury, adventure, and
          relaxation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/booking" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-transparent border font-[family-name:var(--font-jost)] bg-[#8B5A2B] hover:bg-[#6d4621] transition-colors duration-300 text-white cursor-pointer text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-md font-medium">
              Book Your Stay
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
}
