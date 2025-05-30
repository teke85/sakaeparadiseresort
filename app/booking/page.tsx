"use client";

import { useEffect } from "react";

import Image from "next/image";
import BookingForm from "@/components/Booking";
import Navbar from "@/components/Navbar";

export default function BookingPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747090807/vojtech-bruzek-Yrxr3bsPdS0-unsplash_c1k29v.jpg"
          alt="Liseli Lodge Booking"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">
            Book Your Stay
          </h1>
          <p className="text-lg md:text-xl font-jost max-w-2xl">
            Experience the perfect blend of luxury and wilderness at Liseli
            Lodge
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-lodge-accent mb-4">
              Reserve Your Stay at Liseli Lodge
            </h2>
            <p className="text-gray-700 font-jost max-w-2xl mx-auto">
              Fill out the form below to book your stay with us. Our team will
              review your request and contact you shortly to confirm your
              reservation.
            </p>
          </div>

          <BookingForm />

          <div className="mt-12 bg-lodge-bg/50 p-6 rounded-lg border border-lodge-accent/10">
            <h3 className="text-xl font-playfair font-bold text-lodge-accent mb-4">
              Need Assistance?
            </h3>
            <p className="text-gray-700 font-jost mb-4">
              If you prefer to book over the phone or have any questions about
              your stay, our friendly staff is here to help.
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-lodge-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="font-jost text-gray-700">
                  +260974303102 / +260964409805
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-lodge-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="font-jost">reservations@liselilodge.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
