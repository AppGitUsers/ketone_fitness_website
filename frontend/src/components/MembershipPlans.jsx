import { useNavigate } from "react-router-dom";

function MembershipPlans() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "3 Months",
      price: "₹4,799",
      features: [
        "Gym Access",
        "Locker Facility",
        "Free Assessment",
      ],
    },
    {
      name: "6 Months",
      price: "₹7,499",
      features: [
        "Gym Access",
        "Locker Facility",
        "Diet Consultation",
      ],
    },
    {
      name: "12 Months",
      price: "₹9,999",
      features: [
        "Unlimited Access",
        "Diet Plan",
        "Priority Support",
      ],
    },
    {
      name: "Couple Package",
      price: "₹15,000",
      features: [
        "Gym Access",
        "Locker Facility",
        "Diet Consultation",
        "Access for 2 Members",
      ],
    },
    {
      name: "Personal Training",
      price: "₹6,000",
      features: [
        "One-on-One Training",
        "Customized Workout Plan",
        "Progress Tracking",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1F1F1F]">
            Membership Plans
          </h2>

          <p className="text-gray-600 mt-4">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#F7F3EC] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-[#1F1F1F]">
                {plan.name}
              </h3>

              <p className="text-5xl font-bold text-[#D97706] my-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700"
                  >
                    <span className="text-green-600 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/contact")}
                className="w-full bg-[#D97706] hover:bg-orange-700 text-white py-3 rounded-full font-semibold transition duration-300"
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