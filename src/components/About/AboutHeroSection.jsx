import React from "react";

// ✅ BEST PRACTICE: import image

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FFF6E8] to-[#EEF5FF]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1441] leading-tight">
            About{" "}
            <span className="text-yellow-500 relative inline-block">
              Laundrywala
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#0B1441] rounded-full" />
            </span>
          </h2>

          <p className="mt-8 text-gray-800 text-base leading-relaxed max-w-xl">
            <strong>Laundrywala</strong> is India's leading tech-driven laundry
            and dry-clean franchise brand, redefining how India does laundry. We
            provide doorstep pickup & delivery, eco-friendly cleaning, and
            steam-press ironing – all powered by automation, AI-tracking, and
            expert fabric-care specialists.
          </p>

          <p className="mt-6 text-gray-800 text-base leading-relaxed max-w-xl">
            With modern machines, eco-conscious detergents, and real-time order
            tracking, Laundrywala ensures spotless results, on-time delivery,
            and a premium experience for every customer. From everyday garments
            to premium fabrics, we deliver hygienic freshness and care beyond
            cleaning.
          </p>
        </div>

        {/* RIGHT IMAGE (BLENDED) */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-lg 
                          h-[320px] md:h-[380px] lg:h-[480px]"
          >
            {/* IMAGE */}
            <img
              src={"/Aboutherosection.webp"}
              alt="Laundrywala Service"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>

      {/* DECORATIVE DOTS */}
      <div className="absolute right-10 top-24 hidden lg:block">
        <div className="grid grid-cols-6 gap-2 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          ))}
        </div>
      </div>
    </section>
  );
}
