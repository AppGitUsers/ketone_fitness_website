import { motion } from "framer-motion";
import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Member",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      review:
        "I lost 15kg in just 6 months. The trainers are highly supportive and the environment keeps me motivated every day.",
    },
    {
      name: "Priya S",
      role: "Member",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      review:
        "The best fitness center I have ever joined. The workout plans and nutrition guidance helped me achieve my goals.",
    },
    {
      name: "Karthik R",
      role: "Member",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      review:
        "Excellent equipment, professional trainers, and a friendly atmosphere. Highly recommended for anyone serious about fitness.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-[#F7F3EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            What Our Members Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real stories from members who transformed their lives through
            dedication, consistency, and expert guidance.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.3,
                    }}
                    viewport={{ once: true }}
                  >
                    <Star
                      size={18}
                      className="fill-[#D97706] text-[#D97706]"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Review */}
              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                "{item.review}"
              </motion.p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                />

                <div>
                  <h4 className="font-bold text-[#1F1F1F]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
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