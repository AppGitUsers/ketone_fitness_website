import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Transformations", path: "/transformations" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership", path: "/membership" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F3EC]/95 backdrop-blur-md border-b border-gray-200">
      {/* // <header className="sticky top-0 z-50 bg-[#D97706]/95 backdrop-blur-md border-b border-gray-200"> */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#D97706] flex items-center justify-center text-white font-bold text-lg">
              <img src={logo} alt="logo" className="w-full h-full object-cover rounded-full" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#1F1F1F]">
                Ketone Fitness
              </h1>

              <p className="text-xs text-gray-500">
                Transform Your Body
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-[#D97706]"
                      : "text-[#1F1F1F] hover:text-[#D97706]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">

            {/* <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-[#1F1F1F] font-medium"
            >
              <Phone size={18} />
              +91 98765 43210
            </a>*/}
            
            <button className="bg-[#D97706] hover:bg-[#c26a05] text-white px-6 py-3 rounded-full font-semibold transition">
              <Link to="/contact">Join Now</Link>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-[#1F1F1F] font-medium"
              >
                {link.name}
              </NavLink>
            ))}

            <button className="bg-[#D97706] text-white py-3 rounded-full font-semibold">
              Join Now
            </button>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;