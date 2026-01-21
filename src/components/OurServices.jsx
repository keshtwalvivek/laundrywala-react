import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PickupForm from "./PickupForm";

const services = [
  {
    title: "Laundry",
    desc: "Enjoy fresh, clean, folded laundry — more time for what matters most.",
    img: "src/assets/laundryImg-1.jpg",
  },
  {
    title: "Dry Cleaning",
    desc: "Refresh your garments with our expert dry cleaning — book now!",
    img: "src/assets/service-dry-cleaning.jpg",
  },
  {
    title: "Ironing",
    desc: "Get wrinkle-free perfection — expert ironing that keeps you sharp!",
    img: "src/assets/service-ironing.jpg",
  },
  {
    title: "Shoes Cleaning",
    desc: "Revive your shoes — fresh, spotless, and odor-free.",
    img: "src/assets/service-shoes.jpg",
  },
  {
    title: "Curtain Cleaning",
    desc: "Deep cleaning for curtains — removes dust, stains, and allergens.",
    img: "src/assets/service-curtain-cleaning.jpg",
  },
  {
    title: "Carpet Cleaning",
    desc: "Professional carpet cleaning — deep stain removal and fresh feel.",
    img: "src/assets/service-carpet-cleaning.jpg",
  },
];

export default function OurServices() {
  const [showPickup, setShowPickup] = useState(false);

  return (
    <section className="min-h-[70vh] py-10 bg-white font-poppins overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#08335D]">
            Our Services
          </h2>
          <p className="max-w-md font-semibold text-[#08335D]/70 text-sm md:text-base">
            Discover all that Laundrywala has to offer — tailored cleaning
            services for your wardrobe.
          </p>
        </div>
      </div>

      {/* AUTO SCROLL CAROUSEL */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="relative min-w-[300px] sm:min-w-[340px] lg:min-w-[380px] 
                         h-[400px] rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Purple Hover Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-tr 
                from-purple-900/40 via-purple-700/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="w-12 h-[3px] bg-yellow-400 mb-3" />
                <p className="text-sm text-white/90">{service.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER */}
      <p className="text-center text-[#08335D] font-semibold mt-14 px-4">
        Trusted by Nearly <span className="font-bold">90,000+</span> Happy
        Customers — Choose Laundrywala for Exceptional Care.
      </p>

      {/* CTA */}
      <div className="flex justify-center mt-6">
        <Button
          onClick={() => setShowPickup(true)} // open Pickup on click
          className="bg-[#08335D] hover:bg-[#0552a0] px-10 py-6 text-white rounded-full text-lg"
        >
          Book Now!!
        </Button>
      </div>

      {/* Pickup Component */}
      {showPickup && <PickupForm onClose={() => setShowPickup(false)} />}
    </section>
  );
}
