import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Home loads eagerly — it's the entry point and needs to be fast
import Home from "./pages/Home";

// All other pages are code-split: their JS only downloads when the user navigates there
const AdminDashboard  = lazy(() => import("./pages/AdminDashboard"));
const Transformations = lazy(() => import("./pages/Transformations"));
const Gallery         = lazy(() => import("./pages/Gallery"));
const Membership      = lazy(() => import("./pages/Membership"));
const Contact         = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F3EC]">
      <div className="w-10 h-10 border-4 border-[#D97706] border-t-transparent rounded-full animate-spin" aria-label="Loading page" />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/admin"          element={<AdminDashboard />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/gallery"        element={<Gallery />} />
        <Route path="/membership"     element={<Membership />} />
        <Route path="/contact"        element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;
