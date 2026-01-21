import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
  city: z.string().min(2, "City is required"),
  pincode: z.string().regex(/^\d{6}$/, "Enter valid 6-digit pincode"),
  services: z.array(z.string()).min(1, "Select at least one service"),
});

export default function HeroSection() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      pincode: "",
      services: [],
    },
  });

  const serviceValue = watch("services");
  const servicesList = [
    "Dry Cleaning",
    "Laundry",
    "Shoes Cleaning",
    "Home Cleaning",
    "Ironing",
  ];

  const onSubmit = (data) => {
    console.log("Submitted Form Data:", data);
  };

  const toggleService = (service) => {
    const current = serviceValue || [];
    if (current.includes(service)) {
      setValue(
        "services",
        current.filter((s) => s !== service),
      );
    } else {
      setValue("services", [...current, service]);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-[#FFF5E8] to-[#F1F7FF] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT SECTION */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A295C] leading-tight">
            Premium Laundry Services Near You — Fast & Affordable by
          </h1>
          <h2 className="text-4xl font-bold text-[#FFB200] underline decoration-4">
            Laundrywala
          </h2>
          <p className="text-gray-600">
            Trusted care for every garment — pickup, clean & deliver.
          </p>
          <div className="flex gap-3">
            <Button className="bg-[#0A295C] hover:bg-[#0F3A7A] text-white">
              Schedule Your Pickup →
            </Button>
            <Button variant="secondary" className="border-[2px]">
              See Our Pricing
            </Button>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="bg-white rounded-2xl shadow-lg px-6 py-6 border">
          <h3 className="text-xl font-semibold text-[#0A295C] mb-3">
            Request Pickup
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Name" {...register("name")} />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input placeholder="Phone Number" {...register("phone")} />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Input placeholder="City" {...register("city")} />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <Input placeholder="Pincode" {...register("pincode")} />
                {errors.pincode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pincode.message}
                  </p>
                )}
              </div>
            </div>

            {/* SERVICES CHECKBOX */}
            <div>
              <label className="font-medium text-sm">Select Services</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {servicesList.map((service) => (
                  <div key={service} className="flex gap-2 items-center">
                    <Checkbox
                      checked={serviceValue?.includes(service)}
                      onCheckedChange={() => toggleService(service)}
                    />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.services.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full bg-[#0A295C] text-white">
              Submit <Send size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
