import React from "react";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import WhyLaundrywala from "@/components/WhyLaundrywala";
import HowItWorks from "@/components/HowItWorks";
import PickupForm from "@/components/PickupForm";
import StatsBlock from "@/components/StatsBlock";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      {/* DIVIDER FOR NEXT SECTION */}
      <div className=" w-full bg-[#08335D] h-2" />

      <OurServices />
      {/* DIVIDER FOR NEXT SECTION */}
      <div className=" w-full bg-yellow-400 h-2" />
      <WhyLaundrywala />
      <div className=" w-full bg-[#08335D] h-2" />
      <HowItWorks />
      <div className=" w-full bg-red-800 h-2" />
      <StatsBlock />
      <div className=" w-full bg-green-300 h-2" />
      <Testimonials />
    </div>
  );
}
