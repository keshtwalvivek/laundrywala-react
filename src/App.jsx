import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // import your footer
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import FloatingContact from "./components/FloatingContact";
import Frachise from "./pages/Franchise";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        {/* padding top for navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/franchise" element={<Frachise />} />
        </Routes>
      </div>

      {/* Floating WhatsApp & Phone buttons */}
      <FloatingContact />

      {/* Footer will display on every screen */}
      <Footer />
    </Router>
  );
}
