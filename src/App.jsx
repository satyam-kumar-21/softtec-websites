import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import WhySofttec from "./components/about/WhySofttec";
import ManagementTeam from "./components/about/ManagemntTeam";
import ApplicationDev from "./components/services/ApplicationDev";
import WebDesigning from "./components/services/WebDesigning";
import WebDev from "./components/services/WebDev";
import ECommerceSolution from "./components/services/ECommerceSolution";
import ScrollToTop from "./ScrollToTop";
import DomainRegi from "./components/services/DomainRegi";
import TopChatBot from "./components/TopChatBot";
import WebHosting from "./components/services/WebHosting";

function App() {
  return (
    <Router>
      
      <ScrollToTop />
      <TopChatBot />
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
          <Route path="/services/application-development" element={<ApplicationDev />} />
          <Route path="/services/website-designing" element={<WebDesigning />} />
          <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/services/ecommerce-solutions" element={<ECommerceSolution />} />
          <Route path="/services/domain-registration" element={<DomainRegi />} />
          <Route path="/services/web-hosting" element={<WebHosting />} />
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
