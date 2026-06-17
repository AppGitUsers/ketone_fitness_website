import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=112&h=112&q=75&auto=format&fit=crop&face",
    review: "I lost 15kg in just 6 months. The trainers are highly supportive and the environment keeps me motivated every day.",
  },
  {
    name: "Priya S",
    role: "Member",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=112&h=112&q=75&auto=format&fit=crop&face",
    review: "The best fitness center I have ever joined. The workout plans and nutrition guidance helped me achieve my goals.",
  },
  {
    name: "Karthik R",
    role: "Member",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=112&h=112&q=75&auto=format&fit=crop&face",
    review: "Excellent equipment, professional trainers, and a friendly atmosphere. Highly recommended for anyone serious about fitness.",
  },
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

        {/* Testimonials Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#D97706] text-[#D97706]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                "{item.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={`${item.name} – Ketone Fitness member`}
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-[#1F1F1F] text-sm sm:text-base">{item.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;
