import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/about_us.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

function About() {
  return (
    <motion.section
      className="py-16 sm:py-20 lg:py-24 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeLeft}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={aboutImg}
              alt="Ketone Fitness gym trainer coaching a member"
              width={900}
              height={700}
              loading="lazy"
              decoding="async"
              initial={{ scale: 1.15, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="rounded-[30px] w-full h-[280px] sm:h-[380px] lg:h-[520px] object-cover shadow-xl"
            />

            {/* EXPERIENCE BADGE */}
            <motion.div
              className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-[#D97706] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg"
              animate={{ y: [0, -6, 0], rotate: [0, 0.5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold">10+</h3>
              <p className="text-xs sm:text-sm">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 sm:mt-0"
          >
            {/* BADGE */}
            <motion.span
              variants={fadeUp}
              className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 sm:mb-5"
            >
              ABOUT US
            </motion.span>

            {/* TITLE */}
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight"
            >
              Transforming Lives Through{" "}
              <span className="text-[#D97706]">Fitness & Discipline</span>
            </motion.h2>

            {/* PARAGRAPHS */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base sm:text-lg mt-5 sm:mt-6 leading-relaxed"
            >
              At Ketone Fitness, we believe fitness is more than just working out.
              Our mission is to help individuals achieve their goals through expert guidance,
              personalized training programs, and a motivating environment.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base"
            >
              Whether your goal is weight loss, muscle gain, strength improvement,
              or overall wellness, our experienced trainers are here to guide you
              every step of the way.
            </motion.p>

            {/* FEATURES */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {[
                "Certified Professional Trainers",
                "Modern Fitness Equipment",
                "Personalized Workout Plans",
                "Nutrition & Lifestyle Guidance",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3"
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                    <CheckCircle className="text-[#D97706] flex-shrink-0" size={20} />
                  </motion.div>
                  <span className="text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* MISSION & VISION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-[#F7F3EC] p-5 sm:p-6 rounded-2xl"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">
                  To inspire and empower people to lead healthier, stronger,
                  and more confident lives.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-[#F7F3EC] p-5 sm:p-6 rounded-2xl"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  To become the most trusted fitness destination helping members
                  achieve lasting results.
                </p>
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;
