import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
          className="bg-linear-to-r from-orange-500 to-orange-600 rounded-[30px] sm:rounded-[40px] p-7 sm:p-10 lg:p-16 text-center text-white shadow-2xl"
        >
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            START TODAY
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready To Transform
            <br />
            Your Body & Life?
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-orange-100 mb-8 sm:mb-10">
            Join Ketone Fitness today and take the first step
            toward a healthier, stronger, and more confident you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-orange-600 px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg cursor-pointer text-sm sm:text-base"
              >
                Join Now
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border border-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors shadow-lg cursor-pointer text-sm sm:text-base"
              >
                Free Trial
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;