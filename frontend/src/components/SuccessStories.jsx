import { motion } from "framer-motion";
import gymBg from "../assets/images/bg2.jpg";

function SuccessStories() {
  const stories = [
    {
      name: "Arun Kumar",
      story:
        "Lost 15 KG through consistent workouts, nutrition coaching, and lifestyle changes.",
    },
    {
      name: "Priya S",
      story:
        "Improved strength, reduced body fat, and gained confidence through personalized training.",
    },
    {
      name: "Karthik R",
      story:
        "Built lean muscle mass and transformed his physique with expert guidance.",
    },
  ];

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${gymBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Orange Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            MEMBER TRANSFORMATIONS
          </span>

          <h2 className="text-4xl lg:text-6xl font-black text-white">
            Success Stories
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Real transformations achieved through dedication,
            discipline, and expert coaching.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.04,
              }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-orange-400 font-bold mb-4">
                "
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {story.name}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {story.story}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;