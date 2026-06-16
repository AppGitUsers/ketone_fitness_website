import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">

      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Social Media */}
          <div className="flex items-center gap-4">

            <a
              href="#"
              className="hover:text-[#D97706] transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="hover:text-[#D97706] transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="hover:text-[#D97706] transition"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href="#"
              className="hover:text-[#D97706] transition"
            >
              <FaWhatsapp size={18} />
            </a>

          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} Ketone Fitness. All Rights Reserved.
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;