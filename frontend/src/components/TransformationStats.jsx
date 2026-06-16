import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Counter({ end, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, inView]);

  return <>{count}</>;
}

function TransformationStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Success Stories",
    },
    {
      number: 1000,
      suffix: "+",
      label: "Active Members",
    },
    {
      number: 95,
      suffix: "%",
      label: "Goal Achievement",
    },
    {
      number: 10,
      suffix: "+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#111111] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Our Achievements
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Numbers that reflect our commitment to fitness excellence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.08,
              }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center overflow-hidden shadow-lg"
            >
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-300/30 rounded-full blur-2xl" />

              <h3 className="text-5xl lg:text-6xl font-black text-orange-400 drop-shadow-lg">
                <Counter end={item.number} inView={inView} />
                {item.suffix}
              </h3>

              <p className="text-gray-300 mt-3 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransformationStats;