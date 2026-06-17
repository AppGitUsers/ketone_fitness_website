import trainer1 from "../assets/trainers/Trainer1.jpg";
import trainer2 from "../assets/trainers/Trainer2.jpg";
import trainer3 from "../assets/trainers/Trainer.jpg";

function Trainers() {
  const trainers = [
    { name: "John", role: "Strength Coach", image: trainer1 },
    { name: "Priya", role: "Weight Loss Expert", image: trainer2 },
    { name: "Rahul", role: "Personal Trainer", image: trainer3 },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Meet Our Trainers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-[#F7F3EC] p-6 sm:p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={trainer.image}
                alt={`${trainer.name} – ${trainer.role} at Ketone Fitness`}
                width={160}
                height={160}
                loading="lazy"
                decoding="async"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto mb-5 sm:mb-6 border-4 border-orange-500"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F1F1F]">
                {trainer.name}
              </h3>
              <p className="text-[#D97706] font-semibold mt-2 text-sm sm:text-base">
                {trainer.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Trainers;
