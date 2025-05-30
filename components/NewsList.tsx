"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "New Conference Facilities Now Open",
    excerpt:
      "We're excited to announce the opening of our new state-of-the-art conference facilities, perfect for business meetings and events.",
    content:
      "Liseli Lodge is proud to announce the grand opening of our new conference facilities, designed to meet the needs of modern businesses and organizations. The new facilities include a main conference hall that can accommodate up to 150 people, an executive boardroom for intimate meetings, and a versatile training room. All spaces are equipped with the latest audiovisual technology, high-speed internet, and can be configured to suit various event formats. Our dedicated events team is ready to assist with planning and execution to ensure your event is a success. Contact us today to schedule a tour or make a booking.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    date: "May 10, 2025",
    author: "David Mwanawasa",
  },
  {
    title: "Special Summer Packages Available",
    excerpt:
      "Take advantage of our special summer packages, including discounted rates and complimentary activities for the whole family.",
    content:
      "As the summer season approaches, Liseli Lodge is delighted to offer special packages designed for families, couples, and solo travelers looking to explore the beauty of Mongu and Western Province. Our Summer Escape package includes accommodation in a room of your choice, daily breakfast, one complimentary dinner, and a guided tour of local attractions. Families can enjoy our Family Fun package, which includes spacious family suites, kids' activities, and special meal options for children. Book before June 30th to receive an additional 15% discount on these packages. Terms and conditions apply.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "April 28, 2025",
    author: "Grace Banda",
  },
  {
    title: "Liseli Lodge Receives Excellence in Hospitality Award",
    excerpt:
      "We are honored to announce that Liseli Lodge has been recognized with the Excellence in Hospitality Award for the third consecutive year.",
    content:
      "Liseli Lodge is proud to have been awarded the Excellence in Hospitality Award by the Zambia Tourism Board for the third consecutive year. This prestigious recognition highlights our commitment to providing exceptional service, comfortable accommodations, and authentic Zambian hospitality to all our guests. The award was presented at the annual Tourism Excellence Gala held in Lusaka last week, where our General Manager, David Mwanawasa, accepted the award on behalf of the entire Liseli Lodge team. We would like to express our sincere gratitude to our dedicated staff whose hard work and passion make this achievement possible, and to our valued guests whose continued support and feedback help us improve and excel.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "March 15, 2025",
    author: "Natasha Mulenga",
  },
  {
    title: "New Executive Chef Joins Liseli Lodge",
    excerpt:
      "We are delighted to welcome Chef Michael Lubinda to our team, bringing his culinary expertise to enhance your dining experience.",
    content:
      "Liseli Lodge is excited to announce the appointment of Michael Lubinda as our new Executive Chef. With over 15 years of experience in prestigious restaurants across Africa and Europe, Chef Michael brings a wealth of culinary expertise and creativity to our kitchen. Chef Michael is known for his innovative approach to traditional Zambian cuisine, blending local flavors with international techniques to create unique and delicious dishes. He is passionate about using fresh, locally-sourced ingredients and supporting local farmers and producers. Under Chef Michael's leadership, our restaurant will be introducing a new menu featuring both beloved classics and exciting new creations. We invite all our guests to come and experience the exceptional culinary delights that await at Liseli Lodge.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2077&q=80",
    date: "February 20, 2025",
    author: "Grace Banda",
  },
];

export function NewsList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div ref={ref} className="space-y-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              <div
                className={`relative h-[300px] rounded-lg overflow-hidden shadow-lg ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    {item.content.substring(0, 200)}...
                  </p>
                </div>
                <Button variant="outline" className="flex items-center">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
