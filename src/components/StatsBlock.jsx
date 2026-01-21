import React from "react";

const stats = [
  { value: "1.2L", label: "Satisfied Customers" },
  { value: "30+", label: "Cities" },
  { value: "45+", label: "Stores" },
  { value: "2.7L", label: "Garments Washed" },
];

export default function StatsBlock() {
  return (
    <section className="bg-[#FEF9F3] py-16">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-[#0B1441]">
          Trusted by thousands of people across the nation.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                className={`text-4xl sm:text-5xl font-extrabold ${
                  index % 2 === 0 ? "text-[#0B1441]" : "text-[#FEC32E]"
                }`}
              >
                {stat.value}
              </span>
              <span className="mt-2 text-sm sm:text-base text-[#FEC32E]/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
