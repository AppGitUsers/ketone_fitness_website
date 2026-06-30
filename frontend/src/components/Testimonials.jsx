import { motion } from "framer-motion";
import { Star } from "lucide-react";
import review1 from "../assets/reviews/review1.jpeg";
import review2 from "../assets/reviews/review2.jpeg";
import review3 from "../assets/reviews/review3.jpeg";

const reviews = [
  { img: review1, name: "Google Review", label: "Verified Member" },
  { img: review2, name: "Google Review", label: "Verified Member" },
  { img: review3, name: "Google Review", label: "Verified Member" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F3EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            What Our Members Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Real stories from members who transformed their lives through
            dedication, consistency, and expert guidance.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100"
            >
              <img
                src={review.img}
                alt={`Review ${index + 1} – Ketone Fitness member`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />

              {/* Top-right badge */}
              <div className="absolute top-3 right-3 bg-[#D97706] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                {review.name}
              </div>

              {/* Bottom gradient overlay — stars + verified */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent px-4 py-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  {review.label}
                </span>
                <span className="flex items-center gap-0.5 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-[#D97706] text-[#D97706]" />
                  ))}
                  <span className="text-[10px] font-bold text-white ml-1">5.0</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;
