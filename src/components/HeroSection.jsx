import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import PickupForm from "./PickupForm";

export default function HeroSection() {
  const [showPickup, setShowPickup] = useState(false);

  return (
    <section className=" min-h-[70vh] bg-gradient-to-r from-yellow-50 to-white px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08335D] leading-snug md:leading-[1.3]">
            Laundrywala – Premium Laundry & Dry Cleaning
            <span className="block">
              Services <span className="text-yellow-400">Near You</span>
            </span>
          </h1>

          <p className="text-[#08335D]/80 font-semibold text-md leading-relaxed">
            Trusted care for every garment — pickup, clean & deliver.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              onClick={() => setShowPickup(true)}
              className="bg-[#08335D] hover:bg-[#0552a0] text-white px-6 py-3"
            >
              Schedule Your Pickup →
            </Button>
            <Button
              variant="outline"
              className="border-yellow-400 text-[#08335D] bg-yellow-400 hover:bg-yellow-500"
            >
              See Our Pricing
            </Button>
          </div>

          {/* FEATURE ICONS */}
          <div className="flex sm:flex-row gap-6 mt-8">
            {[
              {
                img: "/laundrywala-discount-offer-icon.png",
                text: "Customer Support",
              },
              {
                img: "/laundrywala-express-laundry-delivery-icon.png",
                text: "Super Fast Delivery",
              },
              {
                img: "/ChatGPT-Image-Sep-10-2025-04_10_45-PM-removebg-preview.png",
                text: "Fresh & Eco-Friendly",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="rounded-full bg-[#08335D]/10 flex items-center justify-center">
                  <img src={item.img} alt={item.text} className="w-14 h-14" />
                </div>
                <span className="text-[#08335D] font-medium text-center">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/laundrywala-doorstep-laundry-delivery-service.webp"
            alt="Delivery Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Pickup Component */}
      {showPickup && <PickupForm onClose={() => setShowPickup(false)} />}
    </section>
  );
}
