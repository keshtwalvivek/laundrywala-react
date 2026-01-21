import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PickupForm from "./PickupForm";

const steps = [
  {
    title: "Effortless Scheduling",
    desc: "Book Your Laundry Pickup in Just a Few Clicks.",
    img: "/effortless-scheduling.webp",
  },
  {
    title: "Doorstep Pickup",
    desc: "Seamless Pickup at Your Convenience.",
    img: "/doorstep-pickup.webp",
  },
  {
    title: "Professional Cleaning",
    desc: "Eco-Friendly Cleaning for Every Fabric.",
    img: "/professional-cleaning.webp",
  },
  {
    title: "On-Time Delivery",
    desc: "Fresh, Clean Clothes Delivered Right to Your Doorstep.",
    img: "/on-time-delivery.webp",
  },
];

export default function HowItWorks() {
  const [showPickup, setShowPickup] = useState(false);
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADER */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#08335D] leading-tight">
          We Collect, Clean, and Deliver – Laundrywala Makes <br />
          Life Easier!
        </h2>

        <p className="max-w-4xl mx-auto mt-6 text-[#08335D]/80 text-base leading-relaxed">
          At Laundrywala, we offer reliable laundry and{" "}
          <span className="text-blue-500 underline cursor-pointer">
            dry cleaning services
          </span>{" "}
          designed to make your life easier. From careful garment handling to
          on-time delivery at your doorstep, we ensure your clothes are treated
          with the utmost care and professionalism. Experience the convenience
          of premium cleaning services with Laundrywala, where every detail is
          crafted around you.
        </p>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center
                         shadow-[0_0_25px_rgba(255,180,150,0.35)]
                         hover:shadow-[0_0_35px_rgba(255,180,150,0.55)]
                         transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-[#08335D] mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-[#08335D]/70">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            className="bg-[#08335D] hover:bg-[#0552a0] px-10 py-6 rounded-full text-white text-lg"
            onClick={() => setShowPickup(true)} // open Pickup on click
          >
            Schedule Pickup
          </Button>
        </div>

        {/* Pickup Component */}
        {showPickup && <PickupForm onClose={() => setShowPickup(false)} />}
      </div>
    </section>
  );
}
