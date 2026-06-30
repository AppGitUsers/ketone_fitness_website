import { motion } from "framer-motion";
import gymBg from "../assets/images/bg2.jpg";
import LazyVideo from "./LazyVideo";

import workout1 from "../assets/videos/workout_videos/workout1.MP4";
import workout2 from "../assets/videos/workout_videos/workout2.mp4";
import workout3 from "../assets/videos/workout_videos/workout3.mov";
import workout4 from "../assets/videos/workout_videos/workout4.mov";
import workout5 from "../assets/videos/workout_videos/workout5.mov";
import workout6 from "../assets/videos/workout_videos/workout6.mov";
import workout7 from "../assets/videos/workout_videos/workout7.mov";
import workout8 from "../assets/videos/workout_videos/workout8.mov";
import workout9 from "../assets/videos/workout_videos/workout9.mov";
import workout10 from "../assets/videos/workout_videos/workout10.mov";
import workout11 from "../assets/videos/workout_videos/workout11.mp4";

const videos = [
  { title: "Workout Session 1",  src: workout1,  type: "video/mp4" },
  { title: "Workout Session 2",  src: workout2,  type: "video/mp4" },
  { title: "Workout Session 3",  src: workout3,  type: "video/quicktime" },
  { title: "Workout Session 4",  src: workout4,  type: "video/quicktime" },
  { title: "Workout Session 5",  src: workout5,  type: "video/quicktime" },
  { title: "Workout Session 6",  src: workout6,  type: "video/quicktime" },
  { title: "Workout Session 7",  src: workout7,  type: "video/quicktime" },
  { title: "Workout Session 8",  src: workout8,  type: "video/quicktime" },
  { title: "Workout Session 9",  src: workout9,  type: "video/quicktime" },
  { title: "Workout Session 10", src: workout10, type: "video/quicktime" },
  { title: "Workout Session 11", src: workout11, type: "video/mp4" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <LazyVideo
                src={video.src}
                title={video.title}
                type={video.type}
                className="w-full h-60 sm:h-70 lg:h-65 object-cover"
              />
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Ketone Fitness · Hosur
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
