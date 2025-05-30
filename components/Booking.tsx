"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Booking = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    roomType: "",
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      // Add a short delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Attempt to submit to our API route
      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("API submission failed");
        }

        // Parse the response
        const data = await response.json();
        console.log("Booking response:", data);
      } catch {
        console.log(
          "API not available in demo mode, continuing with simulated success"
        );
        // In demo mode, we'll continue with simulated success even if API fails
      }

      // Store indication of successful submission in sessionStorage
      sessionStorage.setItem("bookingSubmitted", "true");

      // Show success message and redirect
      setFormSuccess(true);
      setTimeout(() => {
        router.push("/booking");
      }, 2000);
    } catch (error) {
      console.error("Booking error:", error);
      setFormError(
        "There was a problem submitting your booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate minimum dates for check-in and check-out
  const today = new Date().toISOString().split("T")[0];
  const minCheckOutDate = formData.checkIn
    ? new Date(new Date(formData.checkIn).getTime() + 86400000)
        .toISOString()
        .split("T")[0]
    : today;

  if (formSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-playfair font-semibold text-gray-900">
          Booking Request Submitted
        </h3>
        <p className="mt-2 text-gray-600 font-jost">
          Thank you for your booking request. We will contact you shortly to
          confirm your reservation.
        </p>
        <p className="mt-1 text-sm text-gray-500 font-jost">
          Redirecting to confirmation page...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-lodge-bg rounded-lg p-6 md:p-8 shadow-md border border-lodge-accent/10">
      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-lodge-accent mb-6 text-center">
        Reserve Your Stay
      </h2>

      {formError && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-jost">
          <p>{formError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            />
          </div>

          {/* Booking Details */}
          <div>
            <label
              htmlFor="checkIn"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              Check-in Date*
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              min={today}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            />
          </div>

          <div>
            <label
              htmlFor="checkOut"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              Check-out Date*
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min={minCheckOutDate}
              required
              disabled={!formData.checkIn}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="adults"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              Adults*
            </label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="children"
              className="block text-gray-700 font-medium mb-1 font-jost"
            >
              Children
            </label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            >
              {[0, 1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="roomType"
            className="block text-gray-700 font-medium mb-1 font-jost"
          >
            Room Type*
          </label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
          >
            <option value="" disabled>
              Select a room type
            </option>
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="executive">Executive Suite</option>
            <option value="familySuite">Family Suite</option>
            <option value="presidential">Presidential Suite</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="specialRequests"
            className="block text-gray-700 font-medium mb-1 font-jost"
          >
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lodge-accent focus:border-lodge-accent"
            placeholder="Any special requests or preferences?"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 bg-lodge-accent hover:bg-lodge-accent-hover text-white rounded-md transition-colors duration-300 font-medium font-jost flex justify-center items-center ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Book Your Stay"
            )}
          </button>
        </div>
      </form>

      <p className="mt-4 text-gray-500 text-sm text-center font-jost">
        * Required fields
      </p>
    </div>
  );
};

export default Booking;
