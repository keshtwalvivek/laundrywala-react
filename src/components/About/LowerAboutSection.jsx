// components/OurProcess.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  DoorOpen,
  ArrowRightLeft,
  ThermometerSun,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    icon: DoorOpen,
    title: "Doorstep Pickup",
    description:
      "Book through our App/website or WhatsApp; our team collects your clothes safely and on schedule.",
  },
  {
    icon: ArrowRightLeft,
    title: "Sorting & Washing",
    description:
      "Clothes are carefully sorted by color and fabric, cleaned with eco-detergents and German-grade machines for superior hygiene.",
  },
  {
    icon: ThermometerSun,
    title: "Drying & Quality Check",
    description:
      "Temperature-controlled dryers and multi-stage inspections ensure wrinkle-free and odour-free results.",
  },
  {
    icon: PackageCheck,
    title: "Steam Ironing",
    description:
      "Professional steam-press gives garments a crisp, ready-to-wear finish with zero fabric damage.",
  },
  {
    icon: PackageCheck,
    title: "Doorstep Delivery",
    description:
      "On-time delivery with live tracking via our AI dashboard – freshness guaranteed.",
  },
];

export default function LowerAboutSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50/50 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-medium tracking-wider uppercase text-sm md:text-base">
            SEAMLESS | SMART | SPOTLESS LAUNDRY SERVICE
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Our Process – How Laundrywala Delivers
          </h2>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-blue-700">
            India’s Best Laundry & Dry-Clean Experience
          </h3>

          <p className="mt-6 text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            At{" "}
            <span className="text-yellow-600 font-semibold">Laundrywala</span>,
            we bring India’s most advanced laundry and dry-clean service right
            to your doorstep. Our tech-enabled system ensures hygienic washing,
            eco-friendly cleaning, on-time delivery — with premium detergents,
            AI-tracked orders, and trained fabric experts.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="border border-yellow-200/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-yellow-400/40 transition-all duration-300 bg-white group h-full flex flex-col"
            >
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center flex-1">
                {/* Golden Yellow Square-Rounded Icon Container */}
                <div className="mb-6 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <step.icon
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                    strokeWidth={1.8}
                  />
                </div>

                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-yellow-700 transition-colors">
                  {step.title}
                </h4>

                <p className="text-slate-600 text-base leading-relaxed mt-auto">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative + like your original */}
      <div className="absolute -top-12 right-8 opacity-30 pointer-events-none hidden lg:block">
        <div className="text-9xl font-black text-yellow-400/40">+</div>
      </div>
    </section>
  );
}
