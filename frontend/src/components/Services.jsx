import {
  Dumbbell,
  Activity,
  HeartPulse,
  Users,
  Apple,
  Trophy,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ANIMATIONS
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const services = [
    {
      icon: <Activity size={40} />,
      title: "Weight Loss",
      description:
        "Customized workout plans designed to help you burn fat and achieve your ideal body weight.",
    },
    {
      icon: <Dumbbell size={40} />,
      title: "Weight Gain",
      description:
        "Structured training and nutrition programs to build healthy muscle mass effectively.",
    },
    {
      icon: <Users size={40} />,
      title: "Personal Training",
      description:
        "One-on-one coaching sessions tailored to your fitness goals and performance level.",
    },
    {
      icon: <Trophy size={40} />,
      title: "Strength Training",
      description:
        "Improve endurance, power, and muscle strength using professional training methods.",
    },
    {
      icon: <HeartPulse size={40} />,
      title: "Cardio Training",
      description:
        "Enhance stamina, heart health, and overall fitness through guided cardio workouts.",
    },
    {
      icon: <Apple size={40} />,
      title: "Nutrition Coaching",
      description:
        "Expert diet guidance and meal planning to maximize your fitness results.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 blur-3xl rounded-full" />
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Fitness Programs Designed For You
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you're looking to lose weight, gain muscle,
            or improve your overall health, we have a program
            tailored to your fitness journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-[#F7F3EC] p-8 rounded-3xl transition-all duration-300"
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0px 20px 50px rgba(0,0,0,0.12)",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center text-[#D97706] mb-6 transition"
              >
                {service.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* BUTTON */}
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-6 text-[#D97706] font-semibold"
              >
                Learn More →
              </motion.button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;