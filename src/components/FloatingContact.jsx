import React from "react";
import { Phone, MessageCircle } from "lucide-react"; // Using lucide icons

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/911234567890" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-white transition-transform hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+911234567890" // replace with your phone number
        className="bg-blue-600 hover:bg-blue-700 w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-white transition-transform hover:scale-110"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
