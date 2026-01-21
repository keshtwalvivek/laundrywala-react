import { useState } from "react";

export default function FranchiseHeroSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10-digit mobile number";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter valid email address";
    if (!form.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#FEF6E8] to-[#F2F6FF] py-16 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#082B64] leading-tight">
            Franchise for Laundry
            <br />
            and Dry Cleaning
          </h1>

          <h2 className="text-3xl font-bold text-[#FFB200]">
            <span className="border-b-4 border-[#FFB200]">Service</span>
          </h2>

          <p className="text-[#3D454E] max-w-xl">
            High ROI, Low Investment, and Complete Tech Support. Start your
            journey with Laundrywala today.
          </p>

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3 max-w-md border border-gray-200">
            <h3 className="text-lg font-semibold text-[#082B64]">
              Fill Your Details to Apply for Laundrywala Franchise
            </h3>

            <div>
              <input
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Your Mobile Number"
                className="w-full px-4 py-3 rounded-xl border"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Your City"
                className="w-full px-4 py-3 rounded-xl border"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#082B64] text-white py-3 rounded-xl font-semibold hover:bg-[#0B377A]"
            >
              SEND REQUEST
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Single Image */}
        <div className="flex justify-center items-center">
          <img
            src="src/assets/Aboutherosection.webp"
            className="rounded-2xl object-cover w-full md:w-[70%]"
            alt="Laundry Franchise"
          />
        </div>
      </div>
    </section>
  );
}
