import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import heroBg from "../assets/images/bg2.jpg";

import Gym1 from "../assets/images/img1.jpeg";
import Gym2 from "../assets/images/img2.jpeg";
import Gym3 from "../assets/images/img3.jpeg";
import Gym4 from "../assets/images/img4.jpeg";
import Gym5 from "../assets/images/img5.jpeg";
import Gym6 from "../assets/images/img6.jpeg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

function Hero() {
  const images = [Gym1, Gym2, Gym3, Gym4, Gym5, Gym6];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-orange-500/20 backdrop-blur-md text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-400/30"
            >
              🔥 Transform Your Fitness Journey
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-bold leading-tight text-white"
            >
              Build Your
              <span className="text-[#D97706]"> Dream Body </span>
              With Expert Guidance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-gray-200 text-lg mt-6 max-w-xl leading-relaxed"
            >
              Achieve your fitness goals with personalized training,
              modern equipment, and certified fitness experts.
              Join the strongest fitness community today.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="bg-[#D97706] hover:bg-[#c26a05] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
                Join Now
                <ArrowRight size={20} />
              </button>

              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300">
                <Play size={18} />
                Watch Video
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={container}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <motion.div variants={fadeUp}>
                <h3 className="text-4xl font-bold text-[#D97706]">
                  500+
                </h3>
                <p className="text-gray-300">Members</p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-4xl font-bold text-[#D97706]">
                  50+
                </h3>
                <p className="text-gray-300">Transformations</p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-4xl font-bold text-[#D97706]">
                  10+
                </h3>
                <p className="text-gray-300">Trainers</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image Slider */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#D97706] rounded-[40px] rotate-6 opacity-20"></div>

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-[600px] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gym ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImage === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </motion.div>

            {/* Slider Dots */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full transition-all ${
                    currentImage === index
                      ? "bg-[#D97706] w-8"
                      : "bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl"
            >
              <h4 className="font-bold text-lg text-[#1F1F1F]">
                Free Trial Available
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Start your fitness journey today.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;