import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Transformations", path: "/transformations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership", path: "/membership" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#1F1F1F] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ketone Fitness
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premier fitness center in Hosur, Tamil Nadu.
              Transform your body with expert personal training,
              modern equipment, and flexible membership plans.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1Bxp1BczeB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D97706] flex items-center justify-center transition duration-300">
                <FaFacebookF size={15} />
              </a>
              <a href="https://www.instagram.com/_ketone_fitness?utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D97706] flex items-center justify-center transition duration-300">
                <FaInstagram size={15} />
              </a>
              <a href="http://www.youtube.com/@ketonefitness5215" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D97706] flex items-center justify-center transition duration-300">
                <FaYoutube size={15} />
              </a>
              <a href="https://wa.me/917349075482" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D97706] flex items-center justify-center transition duration-300">
                <FaWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#D97706] transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base sm:text-lg">Our Services</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {["Weight Loss", "Weight Gain", "Personal Training", "Strength Training", "Cardio Training", "Nutrition Coaching"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4 text-base sm:text-lg">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-[#D97706] flex-shrink-0 mt-0.5" />
                <span>Lakshmi Complex, 2nd floor, No 42, 3rd cross, Shanthi Nagar, Hosur, Tamil Nadu 635109</span>
              </div>
              <a href="tel:+917349075482" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#D97706] transition">
                <Phone size={16} className="text-[#D97706] flex-shrink-0" />
                +91 73490 75482
              </a>
              <a href="mailto:ketonefitnesshosur@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#D97706] transition">
                <Mail size={16} className="text-[#D97706] flex-shrink-0" />
                ketonefitnesshosur@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Clock size={16} className="text-[#D97706] flex-shrink-0" />
                Mon – Sat: 5:30 AM – 10:00 PM
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Ketone Fitness. All Rights Reserved.</p>
          <p>
            Designed for fitness lovers in{" "}
            <span className="text-[#D97706]">Hosur, Tamil Nadu</span>
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
