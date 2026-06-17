import { useNavigate } from "react-router-dom";

function MembershipPlans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "3 Months",
      price: "₹4,799",
      features: ["Gym Access", "Locker Facility", "Free Assessment"],
    },
    {
      name: "6 Months",
      price: "₹7,499",
      features: ["Gym Access", "Locker Facility", "Diet Consultation"],
      popular: true,
    },
    {
      name: "12 Months",
      price: "₹9,999",
      features: ["Unlimited Access", "Diet Plan", "Priority Support"],
    },
    {
      name: "Couple Package",
      price: "₹15,000",
      features: ["Gym Access", "Locker Facility", "Diet Consultation", "Access for 2 Members"],
    },
    {
      name: "Personal Training",
      price: "₹6,000",
      features: ["One-on-One Training", "Customized Workout Plan", "Progress Tracking"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Membership Plans
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#F7F3EC] p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? "ring-2 ring-[#D97706]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-xs px-4 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
                {plan.name}
              </h3>

              <p className="text-4xl sm:text-5xl font-bold text-[#D97706] my-5 sm:my-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-7 sm:mb-8">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm sm:text-base">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/contact")}
                className="w-full bg-[#D97706] hover:bg-orange-700 text-white py-3 rounded-full font-semibold transition duration-300 text-sm sm:text-base"
              >
                Join Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MembershipPlans;
