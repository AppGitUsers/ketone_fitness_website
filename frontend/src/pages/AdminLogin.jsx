import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../api/api";
import logo from "../assets/images/logo.jpeg";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await adminLogin(username, password);
      if (res.data.success) {
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/admin");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-md">

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* Logo + Brand */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D97706] shadow-lg shadow-orange-500/30 mb-4">
              <img
                src={logo}
                alt="Ketone Fitness"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Ketone Fitness
            </h1>
            <span className="mt-1 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold">
              Admin Panel
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-lg font-semibold text-center text-white mb-6">
            🔐 Sign in to Dashboard
          </h2>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Username */}
            <div>
              <label className="text-xs text-gray-400 block mb-1.5 font-medium">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                required
                autoComplete="username"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-gray-400 block mb-1.5 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  autoComplete="current-password"
                  className="w-full p-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#D97706] to-yellow-500 text-white py-3.5 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-8">
            Ketone Fitness © {new Date().getFullYear()} — Admin Access Only
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;