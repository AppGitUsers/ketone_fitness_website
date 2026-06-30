import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import transformation1 from "../assets/transformations/transformation1.jpeg";
import transformation2 from "../assets/transformations/transformation2.jpeg";
import transformation3 from "../assets/transformations/transformation3.jpeg";

const transformations = [
  {
    name: "Arun Kumar",
    result: "Lost 15 KG in 3 Months",
    duration: "3 Months",
    image: transformation1,
  },
  {
    name: "Manoj",
    result: "Body Fat Reduced by 12%",
    duration: "4 Months",
    image: transformation2,
  },
  {
    name: "Ram",
    result: "Gained 8 KG Muscle Mass",
    duration: "5 Months",
    image: transformation3,
  },
];

function FeaturedTransformations() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SUCCESS STORIES
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Real Transformations,<br />Real Results
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our members have transformed their lives through
            consistency, dedication, and expert guidance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Transformation Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={`${item.name} – ${item.duration} transformation at Ketone Fitness`}
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-72 object-cover"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  TRANSFORMATION
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F1F1F]">{item.name}</h3>
                <p className="text-[#D97706] font-semibold mt-1">{item.result}</p>
                <p className="text-gray-500 text-sm mt-1">Duration: {item.duration}</p>
                <p className="text-gray-600 text-sm mt-3">
                  Through structured training and nutrition guidance, achieved
                  remarkable fitness results and improved overall health.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/transformations")}
            className="bg-[#D97706] hover:bg-[#c26a05] text-white px-8 py-4 rounded-full font-semibold transition cursor-pointer"
          >
            View All Transformations
          </button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedTransformations;
