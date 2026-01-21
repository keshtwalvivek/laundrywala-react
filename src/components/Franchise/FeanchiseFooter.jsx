import { TrendingUp, PiggyBank, Star, Users, BarChart3 } from "lucide-react";

export default function FeanchiseFooter() {
  const items = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Growing Demand",
      desc: "Laundry services are essential, and rising urban lifestyles create steady, year-round demand for a laundry franchise business.",
    },
    {
      icon: <PiggyBank className="w-12 h-12" />,
      title: "Low Investment, high Returns",
      desc: "A smart business model offering low setup cost, strong margins, and fast ROI — perfect for new franchise owners.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Established Brand Recognition",
      desc: "Get instant customer trust with a well-known brand, polished identity, and an established franchise presence across India.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Streamlined Operations",
      desc: "Simplified processes, tech-enabled systems, and smooth daily operations that help franchise owners run the business easily.",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Scalability",
      desc: "A flexible model that makes it easy to expand into new locations and grow your franchise network over time.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#FEF6E8] to-[#F2F6FF] py-20 relative select-none">
      <div className="max-w-7xl mx-auto text-center px-6 space-y-4">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#082B64] leading-tight">
          Invest in a Recession-Proof Business Model with
        </h2>

        <h3 className="text-4xl md:text-5xl font-bold text-[#FFB200] inline-flex gap-2 items-center">
          High ROI
          <span className="block w-28 h-1 bg-[#FFB200] rounded mt-3"></span>
        </h3>

        {/* SUBTEXT */}
        <p className="text-[#3D454E] max-w-3xl mx-auto">
          A fast-growing business opportunity with strong demand, high returns,
          and a proven franchise model for long-term success.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center space-y-3"
            >
              <div className="text-[#082B64]">{item.icon}</div>
              <h4 className="text-lg font-semibold text-[#082B64]">
                {item.title}
              </h4>
              <p className="text-[#3D454E] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
