import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 blur-3xl rounded-full animate-pulse" />
      </div>

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 relative"
      >
        <motion.div
          initial={{
            scale: 0.9,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-12 lg:p-16 text-center text-white shadow-2xl"
        >
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            START TODAY
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready To Transform
            <br />
            Your Body & Life?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-orange-100 mb-10">
            Join Ketone Fitness today and take the first step
            toward a healthier, stronger, and more confident you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {/* Join Now Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg cursor-pointer"
              >
                Join Now
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            {/* Free Trial Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition shadow-lg cursor-pointer"
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