import React from "react";

// import image properly

export default function MiddleAboutSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#FFF6E8] to-[#EEF5FF]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1441] mb-6">
              Who We Are
            </h2>

            <p className="text-gray-800 text-base leading-relaxed max-w-xl">
              At{" "}
              <span className="text-yellow-500 font-semibold">Laundrywala</span>
              , we believe laundry should be smart, simple, and sustainable.
              We’ve built India’s most advanced tech-enabled laundry ecosystem,
              blending AI automation, modern machinery, and fabric science to
              make laundry more reliable, affordable, and hygienic for homes and
              businesses alike.
            </p>

            <p className="mt-6 text-gray-800 text-base leading-relaxed max-w-xl">
              Every process is designed for efficiency and perfection — from
              eco-friendly detergents to temperature-controlled drying and
              steam-press technology. This commitment has made Laundrywala a
              trusted name across metro cities and tier-2 towns with rapidly
              expanding franchise outlets across India.
            </p>

            <p className="mt-6 text-gray-800 text-base leading-relaxed max-w-xl">
              Thinking of entering the ₹36 Billion laundry industry? Join{" "}
              <span className="text-yellow-500 font-semibold">
                Laundrywala’s franchise program
              </span>{" "}
              — a low-investment, high-ROI business model with complete setup,
              marketing support, and training assistance.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-lg 
                          h-[320px] md:h-[400px] lg:h-[520px]"
            >
              <img
                src={"src/assets/AboutImg1.webp"}
                alt="Laundrywala Store"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative dots (right side) */}
        <div className="absolute right-10 top-32 hidden lg:block">
          <div className="grid grid-cols-6 gap-2 opacity-30">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#FFF6E8] to-[#EEF5FF]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE — moved to first position */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="relative w-full max-w-lg 
                        h-[320px] md:h-[400px] lg:h-[520px]"
            >
              <img
                src="src/assets/AboutImg2.webp" // ← adjust path if using import → src={AboutImg1}
                // src={AboutImg1}                     // ← use this line if you imported it
                alt="Laundrywala Store Interior"
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* RIGHT CONTENT — moved to second position */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1441] mb-6">
              Why Choose Us
            </h2>

            <p className="text-gray-800 text-base leading-relaxed max-w-xl">
              Choosing Laundrywala means trusting India’s most reliable and
              fastest-growing laundry and dry-clean franchise brand. We deliver
              premium laundry services through doorstep pickup and delivery,
              ensuring every garment is hygienic, spotless, and fresh. With
              advanced washing machines and eco-friendly detergents, we redefine
              professional fabric-care standards across India.
            </p>

            <p className="mt-6 text-gray-800 text-base leading-relaxed max-w-xl">
              As a tech-enabled laundry service brand, Laundrywala integrates
              AI-based laundry management systems, real-time order tracking, and
              automated quality checks for unmatched precision. From wash & fold
              to steam ironing and premium dry-cleaning, our trained
              professionals deliver fabric-safe, odor-free, and long-lasting
              results using sustainable cleaning technology that protects both
              clothes and the environment.
            </p>

            <p className="mt-6 text-gray-800 text-base leading-relaxed max-w-xl">
              Thinking of entering the ₹36 Billion laundry industry? Join{" "}
              <span className="text-yellow-500 font-semibold">
                Laundrywala’s franchise program
              </span>{" "}
              — a low-investment, high-ROI business model with complete setup,
              marketing support, and training assistance.
            </p>
          </div>
        </div>

        {/* Decorative dots — moved to left side since layout is flipped */}
        <div className="absolute left-10 top-32 hidden lg:block">
          <div className="grid grid-cols-6 gap-2 opacity-30">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
