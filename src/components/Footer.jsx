import React from "react";
import { Link } from "react-router-dom"; // import Link
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

import { Phone, Mail, Italic } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#0B1441] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo + Social + Description */}
        <div>
          <h1 className="text-yellow-400 font-bold text-2xl flex items-center mb-4">
            <span className="mr-2 text-3xl">🌀</span> LAUNDRYWALA
          </h1>

          <p className="text-gray-300 text-sm mb-4">
            Your expert laundry and dry cleaning service. Affordable,
            high-quality care with convenience and efficiency. Trust us for all
            your laundry needs.
          </p>
          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Twitter size={20} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Laundry Service
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Dry Cleaning
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Shoe Cleaning
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Home Cleaning
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Ironing
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Carpet Cleaning
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Curtain Cleaning
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-yellow-400">
                Career
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/franchise" className="hover:text-yellow-400">
                Franchise
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-yellow-400">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact us</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@laundrywala.in
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> 8650865586
            </li>
            <li>
              Registered Office: DobiQueen, C84, Sector - 2, Noida, Uttar
              Pradesh, 201301
            </li>
            <li>
              Corporate Office: B 8, H 64, H Block, Sector - 63, Noida, Uttar
              Pradesh, 201309
            </li>
          </ul>
        </div>
      </div>

      <Separator className="border-gray-700" />

      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-300 text-sm">
        <p className="text-yellow-400 font-semibold mb-2">Now Serving in</p>
        <p className="mb-4">
          Gorakhpur | Bathinda | Sehore | Gwalior | Korba | Balewadi | Wakad |
          Thane | Moradabad | Khargone | Hisar | Deoria | Howrah | Vellore |
          Ahmedabad | Surat | Prayagraj | Yelahanka | Badlapur | Mangaluru |
          Gandhinagar | Electronic City | Hyderabad | Jhansi | Ayodhya |
          Baleswar | Jagiroad | Undri | Solapur | Dibrugarh | Noida | Rajkot |
          Manyata Tech Park | HSR Layout | Katra | Siliguri | Baloda Bazar
        </p>
        <p className="text-yellow-400 font-semibold mb-2">Stores Coming Soon</p>
        <p>
          Mumbai | Hyderabad | Chennai | Nashik | Trichy | Amritsar | Gulbarga |
          Ahmedabad | Tirupati | Varanasi | Udaipur | Bhagalpur | Navsari |
          Pondichéry | Durgapur | Dhanbad | Jammu | Varanasi | Bellari | Mumbai
          | Goa
        </p>
      </div>

      <Separator className="border-gray-700" />

      <div className="text-center py-4 text-gray-500 text-sm">
        © 2025 DobiQueen Solutions Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
