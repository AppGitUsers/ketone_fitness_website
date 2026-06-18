import { motion } from "framer-motion";

import img1 from "../assets/gym_images/img1.jpg";
import img2 from "../assets/gym_images/img2.jpg";
import img3 from "../assets/gym_images/img3.jpg";
import img4 from "../assets/gym_images/img4.jpg";
import img5 from "../assets/gym_images/img5.jpg";
import img6 from "../assets/gym_images/img6.jpg";
import img7 from "../assets/gym_images/img7.jpg";
import img8 from "../assets/gym_images/img8.jpg";
import img9 from "../assets/gym_images/img9.jpg";
import img10 from "../assets/gym_images/img10.jpg";
import img11 from "../assets/gym_images/img11.jpg";
import img12 from "../assets/gym_images/img12.jpg";
import img13 from "../assets/gym_images/img13.jpg";
import img14 from "../assets/gym_images/img14.jpg";
import img15 from "../assets/gym_images/img15.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

function GalleryGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            PHOTOS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Inside Ketone Fitness
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore our modern equipment, workout zones and inspiring atmosphere.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (
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
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            >
              {/* Orange Glow */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition duration-700 z-10"></div>

              {/* Image */}
              <img
                src={image}
                alt={`Gym ${index + 1}`}
                loading="lazy"
                className="
                w-full
                h-72
                lg:h-80
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:rotate-2
                "
              />

              {/* Overlay */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                flex
                items-end
                p-6
                z-20
                "
              >
                <div>
                  <h3 className="text-white text-xl font-bold">
                    Ketone Fitness
                  </h3>

                  <p className="text-gray-200 text-sm">
                    Transform Your Body • Transform Your Life
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default GalleryGrid;