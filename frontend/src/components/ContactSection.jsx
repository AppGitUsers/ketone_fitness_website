import {Phone,Mail,MapPin,Clock,} from "lucide-react";

import {FaWhatsapp,} from "react-icons/fa";

import { useState } from "react";
import { createEnquiry } from "../api/api";

  const Contact = () => {
    // ✅ STATE INSIDE COMPONENT (FIXED)
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    email: "",
    age: "",
    fitness_goal: "",
    service_required: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

    // ✅ HANDLE CHANGE
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    // ✅ SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setFormError("");

    try {
      const res = await createEnquiry(formData);

      setShowSuccess(true);

      setFormData({
        full_name: "",
        mobile_number: "",
        email: "",
        age: "",
        fitness_goal: "",
        service_required: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.log(error);
      setFormError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-[#F7F3EC] py-14 sm:py-20">

      {showSuccess && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-md w-full mx-4">

              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-5xl">✅</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Enquiry Submitted!
              </h2>

              <p className="text-gray-600">
                Thank you for contacting Ketone Fitness.
                Our team will contact you shortly.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold"
              >
                OK
              </button>

            </div>
          </div>
        )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SIDE FORM */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">

              <h2 className="text-3xl font-bold mb-2">
                Send Enquiry
              </h2>

              <p className="text-gray-500 mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>

                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      name="mobile_number"
                      value={formData.mobile_number}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                    />
                  </div>

                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>

                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                    />
                  </div>

                </div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fitness Goal
                    </label>

                    <select
                      name="fitness_goal"
                      value={formData.fitness_goal}
                      onChange={handleChange}
                      className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                    >
                      <option value="">Select Goal</option>
                      <option>Weight Loss</option>
                      <option>Weight Gain</option>
                      <option>Muscle Building</option>
                      <option>Body Transformation</option>
                      <option>Strength Training</option>
                      <option>General Fitness</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>

                    <select
                      name="service_required"
                      value={formData.service_required}
                      onChange={handleChange}
                      className="w-full h-14 px-5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                    >
                      <option value="">Select Service</option>
                      <option>Gym Membership</option>
                      <option>Personal Training</option>
                      <option>90 Days Transformation Package</option>
                      <option>Weight Gain Program</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your fitness goals..."
                    className="w-full p-5 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                  />
                </div>

                {formError && (
                  <p className="text-red-500 text-sm text-center">{formError}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "linear-gradient(to right, #D97706, #F59E0B)",
                  }}
                  className="w-full h-14 rounded-2xl text-white font-semibold cursor-pointer disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "🚀 Start Your Fitness Journey"}
                </button>

              </form>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-1">
            <div className="bg-[#1F1F1F] text-white rounded-3xl p-6 sm:p-8">

              <h2 className="text-2xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <Phone />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-400">+91 73490 75482</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <Mail />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-400">ketonefitnesshosur@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <MapPin />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-400">No 42, Lakshmi Complex, 2nd floor, 3rd cross, Shanthi Nagar East, Opp Dhanam Store, Near Raghavendra Theatre, Hosur 635109</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <Clock />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-gray-400">Mon - Sat: 5:30 AM - 10:00 PM</p>
                  </div>
                </div>

              </div>

              <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                <a href="https://wa.me/917349075482" target="_blank" rel="noreferrer" className="inline-flex bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-2xl items-center gap-2">
                  <FaWhatsapp />
                  Chat Now
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;