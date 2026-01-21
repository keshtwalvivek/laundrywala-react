import AboutFooter from "@/components/About/AboutFooter";
import AboutHeroSection from "@/components/About/AboutHeroSection";
import LowerAboutSection from "@/components/About/LowerAboutSection";
import MiddleAboutSection from "@/components/About/MiddleAboutSection";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <AboutHeroSection />
      {/* DIVIDER FOR NEXT SECTION */}
      <div className=" w-full bg-[#08335D] h-2" />
      <MiddleAboutSection />
      <div className=" w-full bg-yellow-400 h-2" />
      <LowerAboutSection />
      <div className=" w-full bg-[#08335D] h-2" />
      <AboutFooter />
    </div>
  );
}
