import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // shadcn Avatar
import PickupForm from "./PickupForm";

const testimonials = [
  {
    name: "Naman Pandey",
    role: "Our Customer",
    image: "src/assets/naman.jpg",
    text: "The curtains and sofa covers I sent were returned spotless, neatly packed, and smelling wonderfully fresh. Dust and dullness vanished without harming fabric colour or texture. Laundrywala made my home feel brighter, cleaner, refreshed with real care!",
    rating: 4,
  },
  {
    name: "Himanshu Yadav",
    role: "Our Customer",
    image: "src/assets/himanshu.jpg",
    text: "I absolutely loved how fresh and neatly folded my clothes arrived. There was no harsh smell, no wrinkles, and the fabric felt softer than before. Laundrywala has genuinely made weekly wash stress-free and premium. I’m definitely sticking with them.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Our Customer",
    image: "src/assets/amit.jpg",
    text: "Laundrywala provides excellent service. My clothes always come back clean, fresh, and handled with care. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [showPickup, setShowPickup] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-[#0B1441]">
          Our clients praise us for great service. 😍
        </h2>

        <div className="overflow-hidden">
          {/* Motion container for infinite horizontal scroll */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {testimonials.concat(testimonials).map((t, index) => (
              <div
                key={index}
                className="bg-white border border-yellow-400 rounded-xl p-6 min-w-[300px] max-w-sm shadow-md flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-3">
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h3 className="font-semibold text-[#0B1441]">{t.name}</h3>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-3">{t.text}</p>

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < t.rating ? "text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => setShowPickup(true)} // open Pickup on click
            className="bg-[#0B1441] text-white px-8 py-4 rounded-full hover:bg-[#1a245d] transition"
          >
            Schedule Pickup
          </button>
        </div>
      </div>
      {/* Pickup Component */}
      {showPickup && <PickupForm onClose={() => setShowPickup(false)} />}
    </section>
  );
}
