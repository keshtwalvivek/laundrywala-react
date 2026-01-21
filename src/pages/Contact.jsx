import { useForm } from "react-hook-form";
import { Phone, Mail, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#F9F4E9] to-white py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Top Heading */}
      <div className="text-center mb-4">
        <p className="text-xs tracking-wider text-[#08335d] font-semibold">
          GET TO KNOW US
        </p>
      </div>

      <h2 className="text-center text-4xl font-bold text-[#08335d] mb-4">
        Have a concern or suggestion?
      </h2>

      <p className="text-center text-[#08335d] mb-10">
        Contact us, and we'll address it promptly.
      </p>

      {/* Two Column Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT FORM */}
        <Card className="rounded-xl overflow-hidden shadow-xl p-0">
          <div className="bg-[#08335d] text-white text-center py-3 font-semibold text-lg">
            FOR <span className="text-[#F4C21B]">FRANCHISE</span> QUERY
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 space-y-4 bg-gradient-to-br from-white to-[#F5F7FA]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <Input
                  placeholder="Your Name*"
                  className="h-12"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Input
                  placeholder="Email*"
                  className="h-12"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile */}
            <div>
              <Input
                placeholder="Your Mobile Number*"
                className="h-12"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10 digit number",
                  },
                })}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <Input
                placeholder="Your City*"
                className="h-12"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <Button className="w-full h-12 bg-[#08335d] hover:bg-[#052B4A] text-white">
              Send Request
            </Button>
          </form>
        </Card>

        {/* RIGHT INFO CARD */}
        <Card className="rounded-xl overflow-hidden shadow-xl p-0">
          <div className="bg-[#08335d] text-white text-center py-3 font-semibold text-lg">
            GET TO <span className="text-[#F4C21B]">KNOW US</span>
          </div>

          <div className="p-6 flex flex-col gap-6 bg-gradient-to-br from-white to-[#F5F7FA]">
            {/* Phone */}
            <Item icon={<Phone />} title="Phone" text="+91 86508-65586" />

            {/* Email */}
            <Item icon={<Mail />} title="Email" text="support@laundrywala.in" />

            {/* Office */}
            <Item
              icon={<Building />}
              title="Corporate Office"
              text="C 84, B 5, Sector 2, Noida – 201301, Uttar Pradesh"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

function Item({ icon, title, text }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-10 h-10 rounded-full bg-[#08335d] flex items-center justify-center">
        {icon && <span className="text-white w-5 h-5">{icon}</span>}
      </div>
      <div>
        <p className="font-bold text-[#08335d]">{title}</p>
        <p className="text-[#08335d] text-sm">{text}</p>
      </div>
    </div>
  );
}
