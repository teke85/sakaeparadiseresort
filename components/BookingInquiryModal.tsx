// components/BookingInquiryModal.tsx
"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingInquiryModal({
  isOpen,
  onClose,
}: BookingInquiryModalProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      alert("Your inquiry has been received!");
      setMessage("");
      onClose();
    } else {
      alert("Please enter a question before submitting.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
          <Dialog.Title className="text-xl font-playfair font-bold text-lodge-accent">
            Inquire About Booking
          </Dialog.Title>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question here..."
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lodge-accent text-sm"
            rows={4}
          />
          <div className="flex font-jost justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-lodge-secondary text-white"
            >
              Submit
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
