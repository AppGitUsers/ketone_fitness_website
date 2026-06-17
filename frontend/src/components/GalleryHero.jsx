import { motion } from "framer-motion";
import gymBg from "../assets/images/bg2.jpg";

function GalleryHero() {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${gymBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-semibold border border-orange-500/30"
        >
          OUR GALLERY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-black mt-6 text-white"
        >
          Fitness In Action
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg"
        >
          Explore our gym environment, workout sessions,
          equipment, trainers, and member achievements.
        </motion.p>
      </div>
    </section>
  );
}

export default GalleryHero;