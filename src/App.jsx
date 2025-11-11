import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import WhySofttec from "./components/about/WhySofttec";
import ManagementTeam from "./components/about/ManagemntTeam";

function App() {
  return (
    <Router>
      <Header />

      <main className="min-h-screen bg-gray-50 pt-24">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/company-overview" element={<About />} />
          <Route path="/about/why-softec" element={<WhySofttec />} />
          <Route path="/about/management-team" element={<ManagementTeam />} />

          {/* Services */}
          <Route path="/services/application-development" element={<Home />} />
          <Route path="/services/website-designing" element={<Home />} />
          <Route path="/services/web-development" element={<Home />} />
          <Route path="/services/ecommerce-solutions" element={<Home />} />
          <Route path="/services/domain-registration" element={<Home />} />
          <Route path="/services/web-hosting" element={<Home />} />
          <Route path="/services/mail-solutions" element={<Home />} />
          <Route path="/services/seo-services" element={<Home />} />
          <Route path="/services/it-maintenance" element={<Home />} />

          {/* Solutions */}
          <Route path="/solutions/development-process" element={<Home />} />
          <Route path="/solutions/technologies-used" element={<Home />} />
          <Route path="/solutions/client-satisfaction" element={<Home />} />

          {/* Products */}
          <Route path="/products/courier-software" element={<Home />} />
          <Route path="/products/travel-hotel-management" element={<Home />} />
          <Route path="/products/school-college-erp" element={<Home />} />
          <Route path="/products/inventory-management" element={<Home />} />

          {/* Other Pages */}
          <Route path="/career" element={<Home />} />
          <Route path="/demo" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
