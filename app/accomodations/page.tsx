"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { format } from "date-fns";
import { CalendarIcon, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

// Room data
const rooms = [
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    description:
      "Our spacious deluxe suite offers breathtaking views of the surrounding wilderness with a private balcony.",
    longDescription:
      "Experience the ultimate in luxury with our spacious Deluxe Suite. This elegantly appointed accommodation features a king-size bed with premium linens, a separate living area, and a private balcony offering breathtaking views of the surrounding wilderness. The en-suite bathroom includes a deep soaking tub and a separate rainfall shower. Modern amenities ensure your comfort throughout your stay.",
    price: 350,
    currency: "USD",
    capacity: 2,
    size: "55 m²",
    bedType: "King",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    amenities: [
      "King-size bed",
      "Private balcony",
      "Air conditioning",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Mini bar",
      "Coffee machine",
      "In-room safe",
      "Luxury bathroom amenities",
      "Bathrobe and slippers",
    ],
  },
  {
    id: "family-villa",
    name: "Family Villa",
    description:
      "Perfect for families, our villa features two bedrooms, a spacious living area, and a private garden.",
    longDescription:
      "Our Family Villa is the perfect retreat for families or small groups seeking both space and privacy. The villa features two separate bedrooms with en-suite bathrooms, a spacious living and dining area, and a fully equipped kitchenette. Step outside to your private garden with outdoor seating where you can enjoy meals or simply relax surrounded by nature. The master bedroom has a king-size bed, while the second bedroom offers two twin beds, accommodating up to 4 guests comfortably.",
    price: 550,
    currency: "USD",
    capacity: 4,
    size: "95 m²",
    bedType: "1 King & 2 Twin",
    images: [
      "/assets/rooms/family-1.png",
      "/assets/rooms/family-2.png",
      "/assets/rooms/family-3.png",
    ],
    amenities: [
      "Two bedrooms",
      "Two bathrooms",
      "Private garden",
      "Living area",
      "Kitchenette",
      "Dining area",
      "Air conditioning",
      "Free Wi-Fi",
      "Flat-screen TVs",
      "Outdoor furniture",
      "In-room safe",
      "Luxury bathroom amenities",
    ],
  },
  {
    id: "safari-tent",
    name: "Luxury Safari Tent",
    description:
      "Experience glamping in our luxury safari tents with all the comforts of a hotel room in a natural setting.",
    longDescription:
      "Experience the magic of the wilderness without sacrificing comfort in our Luxury Safari Tents. These spacious canvas accommodations are built on elevated wooden platforms and feature a queen-size bed with premium linens, elegant furnishings, and a private deck overlooking the landscape. The en-suite bathroom includes a shower with hot water. Fall asleep to the gentle sounds of nature while enjoying modern amenities like electricity, lighting, and charging stations. This is glamping at its finest.",
    price: 275,
    currency: "USD",
    capacity: 2,
    size: "40 m²",
    bedType: "Queen",
    images: [
      "/assets/rooms/safari-1.png",
      "/assets/rooms/safari-2.png",
      "/assets/rooms/safari-3.png",
    ],
    amenities: [
      "Queen-size bed",
      "Private deck",
      "En-suite bathroom",
      "Hot water shower",
      "Electricity",
      "Charging stations",
      "Fan",
      "Mosquito nets",
      "Outdoor seating",
      "Daily housekeeping",
    ],
  },
  {
    id: "honeymoon-suite",
    name: "Honeymoon Suite",
    description:
      "Our romantic honeymoon suite features a four-poster bed, private plunge pool, and stunning views.",
    longDescription:
      "Celebrate your love in our exquisite Honeymoon Suite, designed specifically for romantic getaways. This intimate retreat features a luxurious four-poster king-size bed, a spacious living area, and floor-to-ceiling windows offering panoramic views. Step outside to your private terrace with a plunge pool where you can enjoy a refreshing dip while taking in the breathtaking scenery. The lavish bathroom includes a double vanity, a deep soaking tub for two, and a separate rainfall shower. Special touches like champagne on arrival and romantic turndown service make this the perfect choice for honeymooners and couples.",
    price: 450,
    currency: "USD",
    capacity: 2,
    size: "70 m²",
    bedType: "King four-poster",
    images: [
      "/assets/rooms/honeymoon-1.png",
      "/assets/rooms/honeymoon-2.png",
      "/assets/rooms/honeymoon-3.png",
    ],
    amenities: [
      "Four-poster king bed",
      "Private plunge pool",
      "Terrace with views",
      "Air conditioning",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Mini bar",
      "Champagne on arrival",
      "Romantic turndown service",
      "Luxury bathroom amenities",
      "Double vanity bathroom",
      "Soaking tub for two",
    ],
  },
];

// Reviews data
const initialReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2023-10-15",
    roomType: "Deluxe Suite",
    comment:
      "Our stay at Liseli Lodge was absolutely magical! The Deluxe Suite exceeded our expectations with its stunning views and luxurious amenities. The staff went above and beyond to make our anniversary special. We can't wait to return!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "2023-09-22",
    roomType: "Family Villa",
    comment:
      "The Family Villa was perfect for our vacation with the kids. Spacious, comfortable, and the private garden was a huge plus. The only small issue was the WiFi being a bit spotty, but that's to be expected in such a remote location. Overall, a wonderful experience.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 3,
    name: "Elena and David Rodriguez",
    rating: 5,
    date: "2023-11-05",
    roomType: "Honeymoon Suite",
    comment:
      "We spent our honeymoon at Liseli Lodge and it was the best decision ever! The Honeymoon Suite is absolutely stunning, and the private plunge pool was magical, especially at sunset. The champagne on arrival and romantic dinner under the stars made our stay unforgettable.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 4,
    name: "James Wilson",
    rating: 5,
    date: "2023-08-17",
    roomType: "Luxury Safari Tent",
    comment:
      "The Luxury Safari Tent was an incredible experience! Falling asleep to the sounds of nature while still enjoying all the comforts of a luxury hotel is something everyone should experience. The staff was knowledgeable and friendly, and the guided safari exceeded our expectations.",
    avatar: "/assets/reviews/avatar-4.jpg",
  },
];

export default function AccommodationsPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    roomType: "",
    comment: "",
  });

  const roomsRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    const sections = [roomsRef, bookingRef, reviewsRef];

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

  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length
    );
  };

  // Handle booking form submission
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, you would send this data to your backend
    const bookingData = {
      room: selectedRoom.id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: Number.parseInt(guests),
    };

    console.log("Booking submitted:", bookingData);
    alert(
      "Thank you for your booking request! We will contact you shortly to confirm your reservation."
    );

    // Reset form
    setCheckInDate(undefined);
    setCheckOutDate(undefined);
    setGuests("2");
  };

  // Handle review submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReviewData = {
      id: reviews.length + 1,
      ...newReview,
      date: format(new Date(), "yyyy-MM-dd"),
      avatar: "/assets/reviews/avatar-default.jpg",
    };

    setReviews([newReviewData, ...reviews]);

    // Reset form
    setNewReview({
      name: "",
      rating: 5,
      roomType: "",
      comment: "",
    });

    alert("Thank you for your review!");
  };

  return (
    <main className="bg-white">
      <Navbar />
      {/* Page Header */}
      <PageHeader
        title="Accommodations"
        subtitle="Experience luxury and comfort in the heart of nature"
        imageSrc="https://res.cloudinary.com/dpeg7wc34/image/upload/v1747092514/2022-08-10_2_ct1dud.jpg"
      />

      {/* Room Listings */}
      <section
        ref={roomsRef}
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
            Our Rooms & Suites
          </h2>
          <div className="w-20 h-1 bg-[#E7AE01] mx-auto mb-8"></div>
          <p className="text-gray-700 font-[family-name:var(--font-jost)] max-w-3xl mx-auto">
            Choose from our selection of luxurious accommodations, each designed
            to provide the perfect blend of comfort, elegance, and connection
            with nature.
          </p>
        </div>

        <Tabs
          defaultValue={rooms[0].id}
          onValueChange={(value) => {
            const room = rooms.find((r) => r.id === value);
            if (room) {
              setSelectedRoom(room);
              setCurrentImageIndex(0);
            }
          }}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {rooms.map((room) => (
              <TabsTrigger
                key={room.id}
                value={room.id}
                className="text-sm md:text-base text-gray-700 font-[family-name:var(--font-jost)] py-4 px-6 rounded-lg hover:bg-[#E7AE01] hover:text-white transition-colors duration-200"
              >
                {room.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedRoom.id} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Room Images */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={
                    selectedRoom.images[currentImageIndex] || "/placeholder.svg"
                  }
                  alt={selectedRoom.name}
                  fill
                  className="object-cover"
                />

                {/* Image Navigation */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={prevImage}
                    className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                    aria-label="Previous image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
                    aria-label="Next image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {selectedRoom.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Room Details */}
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#8B5A2B] mb-4">
                  {selectedRoom.name}
                </h3>
                <p className="text-gray-700 font-[family-name:var(--font-jost)] mb-6">
                  {selectedRoom.longDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-amber-50 p-4 rounded-lg font-[family-name:var(--font-jost)]">
                    <p className="text-sm text-gray-500">Price per night</p>
                    <p className="text-xl font-bold text-[#8B5A2B]">
                      {selectedRoom.currency} {selectedRoom.price}
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg font-[family-name:var(--font-jost)]">
                    <p className="text-sm text-gray-500">Capacity</p>
                    <p className="text-xl font-bold text-[#8B5A2B]">
                      {selectedRoom.capacity}{" "}
                      {selectedRoom.capacity === 1 ? "Person" : "People"}
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg font-[family-name:var(--font-jost)]">
                    <p className="text-sm text-gray-500">Room Size</p>
                    <p className="text-xl font-bold text-[#8B5A2B]">
                      {selectedRoom.size}
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg font-[family-name:var(--font-jost)]">
                    <p className="text-sm text-gray-500">Bed Type</p>
                    <p className="text-xl font-bold text-[#8B5A2B]">
                      {selectedRoom.bedType}
                    </p>
                  </div>
                </div>

                <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#8B5A2B] mb-4">
                  Amenities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {selectedRoom.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center font-[family-name:var(--font-jost)]"
                    >
                      <Check className="h-5 w-5 text-[#E7AE01] mr-2" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="bg-[#8B5A2B] font-[family-name:var(--font-jost)] hover:bg-[#6d4621] text-white w-full py-6 text-lg"
                  onClick={() => {
                    const bookingElement =
                      document.getElementById("booking-section");
                    if (bookingElement) {
                      bookingElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Book This Room
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Booking Section */}
      <section
        id="booking-section"
        ref={bookingRef}
        className="py-20 bg-amber-50"
      >
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
              Reserve Your Stay
            </h2>
            <div className="w-20 h-1 bg-[#E7AE01] mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto font-[family-name:var(--font-jost)]">
              Book your perfect getaway at Liseli Lodge. Fill out the form below
              to check availability and make a reservation.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-[#8B5A2B] font-[family-name:var(--font-jost)]">
                Booking Request
              </CardTitle>
              <CardDescription className="font-[family-name:var(--font-jost)]">
                Please fill out the form below to request a reservation. Our
                team will contact you to confirm availability and process your
                booking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="room-type">Room Type</Label>
                    <Select defaultValue={selectedRoom.id}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a room" />
                      </SelectTrigger>
                      <SelectContent>
                        {rooms.map((room) => (
                          <SelectItem key={room.id} value={room.id}>
                            {room.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="check-in">Check-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkInDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkInDate
                            ? format(checkInDate, "PPP")
                            : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="check-out">Check-out Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOutDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOutDate
                            ? format(checkOutDate, "PPP")
                            : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          initialFocus
                          disabled={(date) =>
                            !checkInDate || date <= checkInDate
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      placeholder="Enter your country"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 font-[family-name:var(--font-jost)]">
                  <Label htmlFor="special-requests">Special Requests</Label>
                  <Textarea
                    id="special-requests"
                    placeholder="Any special requests or requirements?"
                    className="min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[#8B5A2B] font-[family-name:var(--font-jost)] hover:bg-[#6d4621] text-white w-full py-6 text-lg"
                >
                  Request Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        ref={reviewsRef}
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
            Guest Reviews
          </h2>
          <div className="w-20 h-1 bg-[#E7AE01] mx-auto mb-8"></div>
          <p className="text-gray-700 font-[family-name:var(--font-jost)] max-w-3xl mx-auto">
            Read what our guests have to say about their experiences at Liseli
            Lodge, or share your own review.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#8B5A2B] mb-6">
              What Our Guests Say
            </h3>

            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="border-amber-100">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="font-[family-name:var(--font-jost)]">
                        <CardTitle className="text-lg text-[#8B5A2B]">
                          {review.name}
                        </CardTitle>
                        <CardDescription>
                          Stayed in {review.roomType} • {review.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? "text-[#E7AE01] fill-[#E7AE01]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 font-[family-name:var(--font-jost)]">
                      {review.comment}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader className="font-[family-name:var(--font-jost)]">
                <CardTitle className="text-[#8B5A2B]">Leave a Review</CardTitle>
                <CardDescription>
                  Share your experience at Liseli Lodge to help other travelers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="review-name">Your Name</Label>
                    <Input
                      id="review-name"
                      value={newReview.name}
                      onChange={(e) =>
                        setNewReview({ ...newReview, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="review-room">Room Type</Label>
                    <Select
                      value={newReview.roomType}
                      onValueChange={(value) =>
                        setNewReview({ ...newReview, roomType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white shadow-md border border-gray-200">
                        {rooms.map((room) => (
                          <SelectItem key={room.id} value={room.name}>
                            {room.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="review-rating">Rating</Label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              rating <= newReview.rating
                                ? "text-[#E7AE01] fill-[#E7AE01]"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 font-[family-name:var(--font-jost)]">
                    <Label htmlFor="review-comment">Your Review</Label>
                    <Textarea
                      id="review-comment"
                      value={newReview.comment}
                      onChange={(e) =>
                        setNewReview({ ...newReview, comment: e.target.value })
                      }
                      placeholder="Share your experience..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#8B5A2B] font-[family-name:var(--font-jost)] hover:bg-[#6d4621] text-white w-full"
                  >
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-[#E7AE01] mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto font-[family-name:var(--font-jost)]">
              Find answers to common questions about our accommodations and
              booking process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#8B5A2B] font-[family-name:var(--font-jost)]">
                  What is the check-in/check-out time?
                </CardTitle>
              </CardHeader>
              <CardContent className="font-[family-name:var(--font-jost)]">
                <p className="text-gray-700">
                  Check-in time is from 2:00 PM, and check-out time is until
                  11:00 AM. Early check-in or late check-out may be available
                  upon request, subject to availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#8B5A2B] font-[family-name:var(--font-jost)]">
                  Is breakfast included?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-[family-name:var(--font-jost)]">
                  Yes, all our room rates include a complimentary full breakfast
                  featuring both local and international cuisine, served at our
                  main restaurant.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#8B5A2B] font-[family-name:var(--font-jost)]">
                  Do you offer airport transfers?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we provide airport transfers for an additional fee.
                  Please provide your flight details when booking or contact our
                  concierge to arrange transportation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#8B5A2B] font-[family-name:var(--font-jost)]">
                  What is your cancellation policy?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-[family-name:var(--font-jost)]">
                  Reservations can be cancelled free of charge up to 14 days
                  before arrival. Cancellations made within 14 days of arrival
                  are subject to a charge of one night&apos;s stay.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-6">
          Ready to Experience Liseli Lodge?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-jost)]">
          Book your stay today and embark on an unforgettable journey of luxury,
          adventure, and relaxation in the heart of nature.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-[#8B5A2B] font-[family-name:var(--font-jost)] hover:bg-[#6d4621] text-white px-8 py-6 text-lg"
            onClick={() => {
              const bookingElement = document.getElementById("booking-section");
              if (bookingElement) {
                bookingElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book Your Stay
          </Button>
          <Button
            variant="outline"
            className="border-[#8B5A2B] font-[family-name:var(--font-jost)] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
}
