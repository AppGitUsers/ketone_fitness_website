import { Users, Trophy, Dumbbell, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function useCountUp(end, duration = 1200, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration, started]);

  return count;
}

function StatCard({ item }) {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(item.number, 1200, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 text-center shadow-xl"
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      whileHover={{
        rotateX: 10,
        rotateY: -10,
        scale: 1.05,
        boxShadow: "0px 25px 50px rgba(0,0,0,0.15)",
      }}
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-[#D97706] mb-6"
      >
        {item.icon}
      </motion.div>

      <h3 className="text-5xl font-bold text-[#1F1F1F]">
        {count}{item.suffix}
      </h3>

      <p className="mt-3 text-gray-600 font-medium">
        {item.title}
      </p>
    </motion.div>
  );
}

function Stats() {
  const stats = [
    { icon: <Users size={40} />, number: 299, suffix: "+", title: "Active Members" },
    { icon: <Trophy size={40} />, number: 25, suffix: "+", title: "Transformations" },
    { icon: <Dumbbell size={40} />, number: 3, suffix: "+", title: "Certified Trainers" },
    { icon: <Calendar size={40} />, number: 4, suffix: "+", title: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-[#F7F3EC] relative overflow-hidden">

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Fitness Success In Numbers
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real results from real people who transformed their fitness journey
            with dedication and expert guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;