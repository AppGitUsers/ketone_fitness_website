import {
  Dumbbell,
  Activity,
  HeartPulse,
  Users,
  Apple,
  Trophy,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const services = [
  {
    icon: <Activity size={40} />,
    title: "Weight Loss / Weight Gain",
    description:
      "Customized workout plans designed to help you burn fat and achieve your ideal body weight, or build healthy muscle mass effectively.",
    details: [
      "Personalized calorie & macro targets",
      "Progressive workout programs for fat loss or muscle gain",
      "Weekly check-ins and body composition tracking",
      "Diet adjustments based on your progress",
      "Supplement guidance when needed",
    ],
  },
  {
    icon: <Dumbbell size={40} />,
    title: "Strength Training",
    description:
      "Improve endurance, power, and muscle strength using professional training methods.",
    details: [
      "Compound & isolation movement programming",
      "Progressive overload techniques",
      "Form correction and injury prevention",
      "Periodized training cycles",
      "Strength benchmarks and progress tracking",
    ],
  },
  {
    icon: <Users size={40} />,
    title: "Personal Training",
    description:
      "One-on-one coaching sessions tailored to your fitness goals and performance level.",
    details: [
      "Dedicated certified personal trainer",
      "Fully customized workout plan",
      "Real-time form correction every session",
      "Goal-based program redesign every 4 weeks",
      "Direct access to your trainer for questions",
    ],
  },
  {
    icon: <Trophy size={40} />,
    title: "90 Days Transformation Package",
    description:
      "Built to transform you — a structured 90-day program combining training, nutrition, and accountability for real, lasting results.",
    details: [
      "Complete 90-day structured training plan",
      "Custom nutrition & meal plan included",
      "Before & after body composition assessment",
      "Weekly progress photos and measurements",
      "Accountability check-ins every week",
      "Post-program maintenance guidance",
    ],
  },
  {
    icon: <HeartPulse size={40} />,
    title: "HIIT / Group Workouts",
    description:
      "Builds endurance through high-intensity interval training and energetic group sessions that keep you motivated.",
    details: [
      "High-intensity interval training sessions",
      "Energetic group atmosphere for motivation",
      "Cardio endurance & fat burn focused",
      "Multiple sessions weekly at flexible timings",
      "Suitable for all fitness levels",
    ],
  },
  {
    icon: <Apple size={40} />,
    title: "Nutrition Coaching",
    description:
      "Expert diet guidance and meal planning to maximize your fitness results.",
    details: [
      "Personalized meal plan based on your goals",
      "Macro & calorie calculation",
      "Indian diet-friendly food options",
      "Guidance on eating out and cheat meals",
      "Ongoing adjustments as you progress",
    ],
  },
];

function ServiceModal({ service, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10"
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-[#D97706] mb-5">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm mb-6">{service.description}</p>

        {/* Details */}
        <ul className="space-y-3">
          {service.details.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-orange-100 text-[#D97706] flex items-center justify-center shrink-0 font-bold text-xs">
                {i + 1}
              </span>
              {point}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/contact"
          className="mt-8 block text-center bg-[#D97706] hover:bg-[#c26a05] text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Get Started
        </a>
      </motion.div>
    </motion.div>
  );
}

function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

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
                onClick={() => setSelected(service)}
                className="mt-6 inline-flex items-center gap-1 bg-orange-100 hover:bg-[#D97706] text-[#D97706] hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ServiceModal service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

    </section>
  );
}

export default Services;
