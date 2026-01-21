import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PickupForm from "./PickupForm";

export default function WhyLaundrywala() {
  const [showPickup, setShowPickup] = useState(false);

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08335D] leading-tight">
            Laundrywala – Your <br />
            Clothes, Our Care.
          </h2>

          {/* Divider */}
          <div className="w-full h-px bg-[#6A5ACD]" />

          <p className="text-[#08335D]/80 text-base leading-relaxed max-w-xl">
            At Laundrywala, we go beyond just cleaning clothes. We offer a
            seamless experience tailored to your unique needs. From eco-friendly
            processes to professional care, every step is focused on delivering
            excellence.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-[#6A5ACD]" />

          <p className="text-yellow-500 font-semibold text-lg">
            Trusted by 90,000+ happy customers, we’re ready to serve you too!
          </p>

          <p className="text-[#08335D] font-medium mt-2">
            Schedule Your Laundry Pickup Today!
          </p>

          <div className="mt-4">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-[#08335D] px-8 py-6 rounded-full text-lg font-semibold"
              onClick={() => setShowPickup(true)} // open Pickup on click
            >
              Schedule Pickup
            </Button>
          </div>
        </div>

        {/* RIGHT ICON GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
          {[
            {
              img: "/Eco-friendly.webp",
              title: "Eco-Friendly Cleaning Machines",
              desc: "Gentle on clothes, kind to the planet.",
            },
            {
              img: "/woolmark.webp",
              title: "Certified Wool Care Technology",
              desc: "Special care for delicate fabrics.",
            },
            {
              img: "/expert-specialist.webp",
              title: "Expert Fabric Specialists",
              desc: "Experience you can trust.",
            },
            {
              img: "/sustainable-cleaning.webp",
              title: "Sustainable Cleaning Solutions",
              desc: "Clean clothes, cleaner future.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              <h3 className="text-[#08335D] font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-[#08335D]/70 text-sm max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Pickup Component */}
      {showPickup && <PickupForm onClose={() => setShowPickup(false)} />}
    </section>
  );
}
