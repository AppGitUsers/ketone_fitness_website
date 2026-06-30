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

        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <LazyVideo
                src={video.src}
                title={video.title}
                type={video.type}
                className="w-full h-[240px] sm:h-[280px] object-cover"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1F]">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">Ketone Fitness · Hosur</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoGallery;
