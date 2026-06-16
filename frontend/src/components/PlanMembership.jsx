// import { Check } from "lucide-react";

// function PlanMembership() {
//   const plans = [
//     {
//       name: "Monthly",
//       price: "₹999",
//       popular: false,
//       features: [
//         "Gym Access",
//         "Cardio Training",
//         "Locker Facility",
//         "Basic Support",
//       ],
//     },
//     {
//       name: "Quarterly",
//       price: "₹2499",
//       popular: true,
//       features: [
//         "Gym Access",
//         "Cardio Training",
//         "Weight Training",
//         "Diet Guidance",
//         "Locker Facility",
//       ],
//     },
//     {
//       name: "Annual",
//       price: "₹7999",
//       popular: false,
//       features: [
//         "Unlimited Access",
//         "Personal Guidance",
//         "Weight Training",
//         "Cardio Training",
//         "Diet Plan",
//         "Priority Support",
//       ],
//     },
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//             MEMBERSHIP PLANS
//           </span>

//           <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
//             Choose Your Fitness Plan
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Flexible membership options designed to fit your
//             fitness goals and budget.
//           </p>
//         </div>

//         {/* Plans */}
//         <div className="grid lg:grid-cols-3 gap-8">

//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
//                 plan.popular
//                   ? "bg-[#D97706] text-white shadow-2xl scale-105"
//                   : "bg-[#F7F3EC] text-[#1F1F1F]"
//               }`}
//             >

//               {plan.popular && (
//                 <div className="absolute top-0 right-6 -translate-y-1/2">
//                   <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <h3 className="text-2xl font-bold mb-4">
//                 {plan.name}
//               </h3>

//               <div className="mb-8">
//                 <span className="text-5xl font-bold">
//                   {plan.price}
//                 </span>

//                 <span className="text-sm ml-2">
//                   / Plan
//                 </span>
//               </div>

//               <ul className="space-y-4 mb-8">

//                 {plan.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-3"
//                   >
//                     <Check size={18} />
//                     {feature}
//                   </li>
//                 ))}

//               </ul>

//               <button
//                 className={`w-full py-4 rounded-full font-semibold transition ${
//                   plan.popular
//                     ? "bg-white text-[#D97706] hover:bg-gray-100"
//                     : "bg-[#D97706] text-white hover:bg-[#c26a05]"
//                 }`}
//               >
//                 Join Now
//               </button>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default PlanMembership;