import { motion } from "framer-motion";
import LazyVideo from "./LazyVideo";

import video1 from "../assets/videos/Tran1.mp4";
import video2 from "../assets/videos/Tran2.mp4";
import video3 from "../assets/videos/Tran3.mp4";

const videos = [
  { title: "Strength Training", src: video1 },
  { title: "Weight Loss Journey", src: video2 },
  { title: "Functional Workout", src: video3 },
];

function VideoGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            VIDEOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Workout Videos
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            Watch our training sessions and fitness programs.
          </p>
        </div>

        {/* Videos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <LazyVideo
                src={video.src}
                title={video.title}
                className="w-full h-[240px] sm:h-[280px] object-cover"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1F]">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoGallery;
