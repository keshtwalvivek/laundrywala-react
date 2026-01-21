import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import PickupForm from "./PickupForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const servicesRef = useRef(null);
  const [showPickup, setShowPickup] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Franchise", path: "/franchise" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Laundry Services",
    "Dry Cleaning",
    "Ironing",
    "Shoe Cleaning",
    "Carpet Cleaning",
    "Curtain Cleaning",
    "Home Cleaning",
  ];

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="src/assets/laundrywalaLogo.webp"
              alt="Laundrywala"
              className="h-14 w-44"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-10 items-center relative">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-[#08335d] hover:text-[#0552a0] font-semibold"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Desktop Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              <button className="text-[#08335d] hover:text-[#0552a0] font-semibold">
                Services
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-56 z-[9999]">
                  {services.map((service) => (
                    <NavLink
                      key={service}
                      to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                      className="block px-4 py-2 text-[#08335d] hover:bg-[#08335d]/10"
                    >
                      {service}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <Button
              className="bg-[#08335d] text-white hover:bg-[#0552a0] flex items-center space-x-2"
              onClick={() => {
                setIsOpen(false);
                setShowPickup(!showPickup);
              }}
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-7 h-7 text-[#08335d]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-4 space-y-1 flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-[#08335d] hover:bg-[#08335d]/10 rounded-md"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Services Toggle */}
            <div>
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="block w-full text-left px-3 py-2 text-[#08335d] hover:bg-[#08335d]/10 rounded-md"
              >
                Services
              </button>

              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <NavLink
                      key={service}
                      to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-[#08335d] hover:bg-[#08335d]/10 rounded-md"
                    >
                      {service}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <Button
              className="bg-[#08335d] text-white hover:bg-[#0552a0] flex items-center justify-center space-x-2"
              onClick={() => {
                setIsOpen(false);
                setShowPickup(!showPickup);
              }}
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Pickup Component */}
      {showPickup && <PickupForm onClose={() => setShowPickup(false)} />}
    </nav>
  );
}
