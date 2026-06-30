import { motion } from "framer-motion";
import transformBg from "../assets/images/bg2.jpg";

function TransformationHero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-position-[center_top] sm:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${transformBg})` }}
      />

      {/* DARK OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        animate={{ opacity: [0.6, 0.7, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* FLOATING GLOW ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full"
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center text-white py-16 sm:py-20 lg:py-24">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold"
        >
          REAL RESULTS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold mt-5 sm:mt-6 leading-tight"
        >
          Transformations
          <br />
          That Inspire
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-200 text-sm sm:text-base lg:text-lg px-2"
        >
          Discover the incredible journeys of our members who transformed
          their bodies and lives through dedication, consistency, and expert coaching.
        </motion.p>

      </div>
    </section>
  );
}

export default TransformationHero;