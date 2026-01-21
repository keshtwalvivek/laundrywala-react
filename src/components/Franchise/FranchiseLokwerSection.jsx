import { Card } from "@/components/ui/card";
import {
  Image as LucideImage,
  MapPin,
  Users,
  TrendingUp,
  Megaphone,
  MessageCircleHeart,
} from "lucide-react";

const data = [
  {
    icon: LucideImage,
    title: "Complete Store Setup",
    text: "Laundrywala provides full Laundry Franchise Setup in India – ready-to-launch premium stores.",
  },
  {
    icon: MapPin,
    title: "Prime Location Support",
    text: "Get expert help to find Best Laundry Franchise Locations in India for high customer reach.",
  },
  {
    icon: Users,
    title: "Skilled staff & Training",
    text: "Professional Laundrywala Franchise Training and Staff Support for smooth operations.",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Business Support",
    text: "Continuous Franchise Assistance & Laundry Business Support in India for growth.",
  },
  {
    icon: Megaphone,
    title: "Brand Growth & Marketing",
    text: "Complete Laundry Franchise Marketing & Brand Promotion Support to attract leads.",
  },
  {
    icon: MessageCircleHeart,
    title: "Customer Engagement",
    text: "Laundrywala ensures strong Customer Retention & Loyalty Program Support for your franchise.",
  },
];

export default function FranchiseLokwerSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FEF6E8] to-[#F2F6FF]">
      <div className="max-w-7xl mx-auto text-center px-6 space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold text-[#082B64]">
          Support We{" "}
          <span className="text-[#FFB200] underline decoration-[6px] underline-offset-4">
            Will Provide
          </span>
        </h2>
        <p className="text-[#3D454E] max-w-3xl mx-auto">
          From store setup to training and daily operations — everything you
          need to build and grow a successful laundry franchise business in
          India.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {data.map((item, i) => (
          <Card
            key={i}
            className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 shadow-sm bg-white"
          >
            <item.icon className="w-10 h-10 text-[#082B64]" />

            <div>
              <h3 className="text-xl font-semibold text-[#082B64]">
                {item.title}
              </h3>
              <p className="text-[#3D454E] text-sm mt-1 leading-relaxed">
                {item.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
