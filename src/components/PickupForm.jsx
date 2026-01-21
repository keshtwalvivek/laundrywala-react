import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

export default function PickupForm({ onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [service, setService] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name, phone, address, pinCode, service };
    console.log("Form Data:", formData);

    navigate("/thank-you");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Schedule Your Pickup – Easy & Fast!
        </h2>

        <Input
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-3"
          required
        />
        <Input
          placeholder="Phone Number*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-3"
          required
        />
        <Input
          placeholder="Address*"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mb-3"
          required
        />
        <Input
          placeholder="Pin Code*"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          className="mb-3"
          required
        />

        {/* FULL WIDTH SELECT */}
        <Select value={service} onValueChange={setService} required>
          <SelectTrigger className="mb-4 w-full">
            {" "}
            {/* full width */}
            <SelectValue placeholder="Choose Services*" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="laundry-services">Laundry Services</SelectItem>
            <SelectItem value="dry-cleaning">Dry Cleaning</SelectItem>
            <SelectItem value="ironing">Ironing</SelectItem>
            <SelectItem value="shoe-cleaning">Shoe Cleaning</SelectItem>
            <SelectItem value="carpet-cleaning">Carpet Cleaning</SelectItem>
            <SelectItem value="curtain-cleaning">Curtain Cleaning</SelectItem>
            <SelectItem value="home-cleaning">Home Cleaning</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" className="w-full bg-[#08335d]">
          Schedule Pickup
        </Button>
      </form>
    </div>
  );
}
