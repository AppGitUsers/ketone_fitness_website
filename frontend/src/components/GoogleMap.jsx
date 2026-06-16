import { MapPin } from "lucide-react";

function GoogleMap() {
  return (
    <section className="py-20 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Visit Our Gym
        </h2>

        <div className="bg-white rounded-3xl p-8 shadow-xl text-center">

          <div className="flex justify-center mb-4">
            <MapPin
              size={50}
              className="text-[#D97706]"
            />
          </div>

          <h3 className="text-2xl font-bold text-[#1F1F1F]">
            Ketone Fitness
          </h3>

          <p className="text-gray-600 mt-3">
            Lakshmi Complex, 2nd floor, <br />No 42, 3rd cross, opp. to Dhanam store, <br />Shanthi Nagar, Shanthi Nagar East,
            <br/>Hosur, Tamil Nadu 635109
          </p>

            <a
              href="https://maps.app.goo.gl/2sfs4X6yA5BdS7ts9"
              target="_blank"
              rel="noreferrer"
              className="block bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">
                <MapPin size={50} className="text-[#D97706]" />
              </div>

              <h3 className="text-2xl font-bold text-[#1F1F1F]">
                Ketone Fitness
              </h3>

              <p className="text-gray-600 mt-3">
                Click to Open Location
              </p>
            </a>

        </div>

      </div>
    </section>
  );
}

export default GoogleMap;