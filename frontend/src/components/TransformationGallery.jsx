import { motion } from "framer-motion";


import transformation1 from "../assets/transformations/transformation1.jpeg";
import transformation2 from "../assets/transformations/transformation2.jpeg";
import transformation3 from "../assets/transformations/transformation3.jpeg";
import transformation4 from "../assets/transformations/transformation4.jpeg";
import transformation5 from "../assets/transformations/transformation5.jpeg";
import transformation6 from "../assets/transformations/transformation6.jpeg";
import transformation7 from "../assets/transformations/transformation7.jpeg";
import transformation8 from "../assets/transformations/transformation8.jpeg";
import transformation9 from "../assets/transformations/transformation9.jpeg";
import transformation10 from "../assets/transformations/transformation10.jpeg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

function TransformationGallery() {
  const transformations = [
    {
      name: "Arun Kumar",
      result: "Amazing Result",
      duration: "3 Months",
      image: transformation1,
    },
    {
      name: "Manoj",
      result: "Amazing Result",
      duration: "4 Months",
      image: transformation2,
    },
    {
      name: "Ram",
      result: "Amazing Result",
      duration: "5 Months",
      image: transformation3,
    },
    {
      name: "vijay",
      result: "Amazing Result",
      duration: "6 Months",
      image: transformation4,
    },
    {
      name: "Ajith",
      result: "Amazing Result",
      duration: "4 Months",
      image: transformation5,
    },
    {
      name: "Surya",
      result: "Amazing Result",
      duration: "7 Months",
      image: transformation6,
    },
    // {
    //   name: "Karthik",
    //   result: "Amazing Result",
    //   duration: "5 Months",
    //   image: transformation7,
    // },
    {
      name: "Dhanush",
      result: "Amazing Result",
      duration: "6 Months",
      image: transformation8,
    },
    {
      name: "Vishal",
      result: "Amazing Result",
      duration: "4 Months",
      image: transformation9,
    },
    {
      name: "Sathya",
      result: "Amazing Result",
      duration: "8 Months",
      image: transformation10,
    },
  ];

  return (
    <section className="py-24 bg-[#F7F3EC] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            TRANSFORMATIONS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Before & After Results
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real members. Real transformations. Real results achieved through
            dedication, consistency, and expert guidance.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="gallery-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={`${item.name} – ${item.duration} body transformation at Ketone Fitness`}
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-80 object-cover"
                />

                <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                  TRANSFORMATION
                </span>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {item.name}
                </h3>

                <p className="text-[#D97706] font-semibold">{item.result}</p>

                <p className="text-gray-500 text-sm mt-1">
                  Duration: {item.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TransformationGallery;
