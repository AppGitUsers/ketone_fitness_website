import { Users, Trophy, Dumbbell, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// COUNT UP HOOK
function useCountUp(end, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

function Stats() {
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

  const stats = [
    { icon: <Users size={40} />, number: 500, suffix: "+", title: "Active Members" },
    { icon: <Trophy size={40} />, number: 50, suffix: "+", title: "Transformations" },
    { icon: <Dumbbell size={40} />, number: 10, suffix: "+", title: "Certified Trainers" },
    { icon: <Calendar size={40} />, number: 10, suffix: "+", title: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-[#F7F3EC] relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 blur-3xl rounded-full" />
      </div>

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center mb-16">
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
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const count = useCountUp(item.number);

            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 text-center shadow-xl transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{
                  rotateX: 10,
                  rotateY: -10,
                  scale: 1.05,
                  boxShadow: "0px 25px 50px rgba(0,0,0,0.15)",
                }}
              >

                {/* ICON */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-[#D97706] mb-6"
                >
                  {item.icon}
                </motion.div>

                {/* NUMBER */}
                <h3 className="text-5xl font-bold text-[#1F1F1F]">
                  {count}{item.suffix}
                </h3>

                {/* TITLE */}
                <p className="mt-3 text-gray-600 font-medium">
                  {item.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Stats;