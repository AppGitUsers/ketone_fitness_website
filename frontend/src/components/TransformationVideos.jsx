import { motion } from "framer-motion";

import gymBg from "../assets/images/bg2.jpg";

import video1 from "../assets/videos/Tran1.mp4";
import video2 from "../assets/videos/Tran2.mp4";
import video3 from "../assets/videos/Tran3.mp4";
import video4 from "../assets/videos/Tran4.mp4";

function TransformationVideos() {
  const videos = [
    {
      title: "Transformation 1",
      src: video1,
    },
    {
      title: "Transformation 2",
      src: video2,
    },
    {
      title: "Transformation 3",
      src: video3,
    },
    {
      title: "Transformation 4",
      src: video4,
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${gymBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full"></div>

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
            Transformation Videos
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Watch inspiring fitness journeys and real success stories.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Video */}
              <div className="overflow-hidden">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-[320px] object-cover transition duration-500 hover:scale-105"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-white text-xl font-bold">
                  {video.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  Real fitness transformation journey.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransformationVideos;