"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Presentation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DATA = [
  {
    title: "Our Focus",
    text: "To lead India's transformation towards tech-driven, sustainable, and convenient laundry solutions — empowering customers and entrepreneurs alike..",
    icon: Users,
  },
  {
    title: "Our Mission",
    text: "To make hygienic, eco-friendly, and affordable laundry & dry-clean services accessible to all, while delivering premium quality, on-time service, and complete satisfaction..",
    icon: ShieldCheck,
  },
  {
    title: "Our Vision Ahead",
    text: "To be India's most admired and trusted laundry brand, enabling aspiring entrepreneurs to build profitable, tech-enabled laundry franchises — scaling India's next laundry revolution..",
    icon: Presentation,
  },
];

export default function AboutFooter() {
  return (
    <div className="space-y-6 p-6">
      {DATA.map((item, i) => {
        const Icon = item.icon;

        const hoverBg =
          i % 2 === 0 ? "hover:bg-yellow-500" : "hover:bg-[#08335d]";
        const hoverText =
          i % 2 === 0
            ? "group-hover:text-[#08335d]"
            : "group-hover:text-yellow-300";

        return (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Card
              className={`group bg-white rounded-2xl border shadow-sm transition-colors duration-200 ${hoverBg}`}
            >
              <CardContent className="flex gap-6 py-6">
                <div className="p-4 bg-white rounded-full shadow flex items-center justify-center">
                  <Icon
                    className={`w-10 h-10 text-[#08335d] transition-colors duration-200 ${hoverText}`}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <h2
                    className={`text-2xl font-semibold text-gray-900 transition-colors duration-200 ${hoverText}`}
                  >
                    {item.title}
                  </h2>

                  <p
                    className={`text-gray-600 leading-relaxed transition-colors duration-200 ${hoverText}`}
                  >
                    {item.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
