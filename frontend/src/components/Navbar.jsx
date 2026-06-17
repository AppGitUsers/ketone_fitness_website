import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D97706] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              <img src={logo} alt="Ketone Fitness logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-bold text-[#1F1F1F] leading-tight">
                Ketone Fitness
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Transform Your Body
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 text-sm xl:text-base ${
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-[#D97706] hover:bg-[#c26a05] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-full font-semibold transition text-sm xl:text-base"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#1F1F1F] hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium transition ${
                    isActive
                      ? "text-[#D97706] bg-orange-50"
                      : "text-[#1F1F1F] hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-[#D97706] hover:bg-[#c26a05] text-white py-3 rounded-full font-semibold text-center transition"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
