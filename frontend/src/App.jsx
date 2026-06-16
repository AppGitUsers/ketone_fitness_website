import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Transformations from "./pages/Transformations";
import Gallery from "./pages/Gallery";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Admin" element={<AdminDashboard />} />
      <Route path="/transformations" element={<Transformations />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;