import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { getEnquiries, deleteEnquiry, updateEnquiryStatus } from "../api/api";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin-login");
      return;
    }
    fetchEnquiries();
  }, []);

  // FETCH DATA
  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const res = await getEnquiries();
      setEnquiries(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
  };

  // UPDATE STATUS
  const handleStatusUpdate = async (id, status) => {
    try {
      await updateEnquiryStatus(id, status);
      fetchEnquiries();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteEnquiry(id);
      fetchEnquiries();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#D97706] border-t-transparent rounded-full animate-spin" />
          <h1 className="text-2xl">Loading Enquiries...</h1>
        </div>
      </div>
    );
  }

  // SEARCH
  const filtered = enquiries.filter(
    (item) =>
      item.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase()) ||
      item.mobile_number?.includes(search)
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Called":
        return "bg-blue-500";
      case "Contacted":
        return "bg-purple-500";
      case "Joined":
        return "bg-green-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="relative text-center mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold">
            🏋️ Fitness Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Manage customer enquiries and follow-ups
          </p>

          {/* LOGOUT — always right, icon only on mobile to avoid overlap */}
          <button
            onClick={handleLogout}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 px-2 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <LogOut size={16} className="sm:hidden" />
            <span className="hidden sm:flex items-center gap-2">
              <LogOut size={16} /> Logout
            </span>
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name, email or mobile..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            onClick={fetchEnquiries}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition cursor-pointer"
          >
            🔄 Refresh
          </button>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">

          <div className="bg-white/10 p-5 rounded-xl text-center">
            <h3 className="text-gray-400">Total Leads</h3>
            <p className="text-3xl font-bold">{enquiries.length}</p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl text-center">
            <h3 className="text-gray-400">Today's Leads</h3>
            <p className="text-3xl font-bold">
              {
                enquiries.filter(
                  (e) =>
                    new Date(e.created_at).toDateString() ===
                    new Date().toDateString()
                ).length
              }
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl text-center">
            <h3 className="text-gray-400">Pending</h3>
            <p className="text-3xl font-bold text-amber-200">
              {enquiries.filter((e) => e.status === "Pending").length}
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl text-center">
            <h3 className="text-gray-400">Called</h3>
            <p className="text-3xl font-bold text-blue-400">
              {enquiries.filter((e) => e.status === "Called").length}
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl text-center">
            <h3 className="text-gray-400">Joined</h3>
            <p className="text-3xl font-bold text-green-400">
              {enquiries.filter((e) => e.status === "Joined").length}
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:border-orange-500 transition"
            >

              {/* NAME + DELETE */}
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-orange-400">
                  {item.full_name}
                </h2>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-600 cursor-pointer transition"
                >
                  Delete
                </button>
              </div>

              {/* STATUS BADGE */}
              <div className="mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status || "Pending"}
                </span>
              </div>

              {/* DETAILS */}
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 {item.mobile_number}</p>
                <p>📧 {item.email}</p>
                <p>🎂 Age: {item.age}</p>
                <p>🎯 {item.fitness_goal}</p>
                <p>🏋️ {item.service_required}</p>
              </div>

              {/* MESSAGE */}
              <div className="mt-3">
                <p className="text-gray-400 text-sm">{item.message}</p>
              </div>

              {/* STATUS DROPDOWN */}
              <div className="mt-4">
                <label className="text-xs text-gray-400 block mb-1">
                  Update Status
                </label>

                <select
                  value={item.status || "Pending"}
                  onChange={(e) => handleStatusUpdate(item.id, e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-sm"
                >
                  <option value="Pending">Pending</option>
                  <option value="Called">Called</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Joined">Joined</option>
                </select>
              </div>

              {/* DATE */}
              <p className="text-[11px] text-gray-500 mt-4">
                {new Date(item.created_at).toLocaleString()}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;