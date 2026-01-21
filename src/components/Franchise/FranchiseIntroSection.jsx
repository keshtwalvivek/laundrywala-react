import { Button } from "@/components/ui/button";

export default function FranchiseIntroSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#082B64] leading-snug">
            <span className="text-[#FFB200] underline decoration-4">Best</span>{" "}
            Laundry Franchise In India
          </h2>

          {/* PARAGRAPHS */}
          <p className="text-[#3D454E] leading-relaxed">
            Laundrywala is one of India’s most{" "}
            <strong className="font-semibold">
              trusted laundry and dry-cleaning brands
            </strong>
            , bringing professional fabric-care services to modern urban
            families. With years of expertise, advanced technology, and a proven
            business model, we’ve made laundry simple, hygienic, and profitable.
            Our focus on{" "}
            <strong className="font-semibold">
              quality, hygiene, and customer convenience
            </strong>{" "}
            has helped us become a preferred choice for thousands of customers
            across India.
          </p>

          <p className="text-[#3D454E] leading-relaxed">
            From daily-wear garments to premium fabrics and delicate
            dry-cleaning, every Laundrywala outlet maintains high standards of
            care and efficiency.
          </p>

          <p className="text-[#3D454E] leading-relaxed">
            Our{" "}
            <strong className="font-semibold">
              laundry franchise in India
            </strong>{" "}
            is designed for aspiring
            <strong className="font-semibold">
              {" "}
              entrepreneurs who want high returns with low investment and
              minimal risk.
            </strong>
            As a Laundrywala partner, you receive{" "}
            <strong className="font-semibold">
              complete branding, store setup, staff training, marketing support,
              and tech-enabled operations.
            </strong>{" "}
            With our digital app and advanced systems, managing your laundry
            business becomes easy and profitable.
          </p>

          <p className="text-[#3D454E] leading-relaxed">
            With{" "}
            <strong className="font-semibold">
              low investment and high ROI
            </strong>
            , along with{" "}
            <strong className="font-semibold">
              dedicated training and continuous support
            </strong>
            , Laundrywala enables you to start your own laundry and dry-cleaning
            franchise and grow confidently in India’s booming cleaning-service
            industry.
          </p>

          {/* CTA BUTTON */}
          <Button className="bg-[#082B64] hover:bg-[#0A3A78] text-white px-6 py-6 rounded-xl text-lg font-medium">
            Get a Franchise Quote
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/AboutImg1.webp" // update your path
            alt="Laundry Franchise"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
