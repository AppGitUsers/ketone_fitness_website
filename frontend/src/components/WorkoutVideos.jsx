import { motion } from "framer-motion";
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

function WorkoutVideos() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#111111] overflow-hidden relative">
      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WORKOUT VIDEOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Train Like a Pro
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Watch our expert-led workout sessions and get inspired to push your limits every day.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-xl"
            >
              <LazyVideo
                src={video.src}
                title={video.title}
                type={video.type}
                className="w-full h-52 sm:h-56 object-cover"
              />
              <div className="px-4 py-3 text-center">
                <h3 className="text-white text-sm font-semibold">{video.title}</h3>
                <p className="text-gray-400 text-xs mt-1">Ketone Fitness · Hosur</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkoutVideos;
