import { motion } from "framer-motion";

import video1 from "../assets/videos/Tran1.mp4";
import video2 from "../assets/videos/Tran2.mp4";
import video3 from "../assets/videos/Tran3.mp4";

function VideoGallery() {
  const videos = [
    {
      title: "Strength Training",
      src: video1,
    },
    {
      title: "Weight Loss Journey",
      src: video2,
    },
    {
      title: "Functional Workout",
      src: video3,
    },
  ];

  return (
    <section className="py-24 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1F1F1F]">Workout Videos</h2>

          <p className="text-gray-600 mt-4">
            Watch our training sessions and fitness programs.
          </p>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <video
                controls
                preload="metadata"
                className="w-full h-[350px] object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support video playback.
              </video>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#1F1F1F]">
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
