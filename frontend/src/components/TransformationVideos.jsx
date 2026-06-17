import { motion } from "framer-motion";
import gymBg from "../assets/images/bg2.jpg";
import LazyVideo from "./LazyVideo";

import video1 from "../assets/videos/Tran1.mp4";
import video2 from "../assets/videos/Tran2.mp4";
import video3 from "../assets/videos/Tran3.mp4";
import video4 from "../assets/videos/Tran4.mp4";

const videos = [
  { title: "Transformation 1", src: video1 },
  { title: "Transformation 2", src: video2 },
  { title: "Transformation 3", src: video3 },
  { title: "Transformation 4", src: video4 },
];

function TransformationVideos() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${gymBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" aria-hidden="true"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            MEMBER TRANSFORMATIONS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white">
            Transformation Videos
          </h2>

          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            Watch inspiring fitness journeys and real success stories.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <LazyVideo
                src={video.src}
                title={video.title}
                className="w-full h-[240px] sm:h-[280px] lg:h-[260px] object-cover"
              />
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-white text-lg sm:text-xl font-bold">
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
