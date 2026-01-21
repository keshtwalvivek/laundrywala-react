import React from "react";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import WhyLaundrywala from "@/components/WhyLaundrywala";
import HowItWorks from "@/components/HowItWorks";
import PickupForm from "@/components/PickupForm";
import StatsBlock from "@/components/StatsBlock";
import Testimonials from "@/components/Testimonials";
import FranchiseHeroSection from "@/components/Franchise/FranchiseHeroSection";
import FranchiseIntroSection from "@/components/Franchise/FranchiseIntroSection";
import FranchiseLokwerSection from "@/components/Franchise/FranchiseLokwerSection";
import FeanchiseFooter from "@/components/Franchise/FeanchiseFooter";

export default function Frachise() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <FranchiseHeroSection />
      {/* DIVIDER FOR NEXT SECTION */}
      <div className=" w-full bg-[#08335D] h-2" />
      <FranchiseIntroSection />
      <div className=" w-full bg-[#08335D] h-2" />
      <FranchiseLokwerSection />
      <div className=" w-full bg-yellow-400 h-2" />
      <FeanchiseFooter />
    </div>
  );
}
