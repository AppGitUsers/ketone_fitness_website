import trainer1 from "../assets/trainers/Trainer1.jpg";
import trainer2 from "../assets/trainers/Trainer2.jpg";
import trainer3 from "../assets/trainers/Trainer.jpg";

function Trainers() {
  const trainers = [
    {
      name: "John",
      role: "Strength Coach",
      image: trainer1,
    },
    {
      name: "Priya",
      role: "Weight Loss Expert",
      image: trainer2,
    },
    {
      name: "Rahul",
      role: "Personal Trainer",
      image: trainer3,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#1F1F1F]">
          Meet Our Trainers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-[#F7F3EC] p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-orange-500"
              />

              <h3 className="text-2xl font-bold text-[#1F1F1F]">
                {trainer.name}
              </h3>

              <p className="text-[#D97706] font-semibold mt-2">
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