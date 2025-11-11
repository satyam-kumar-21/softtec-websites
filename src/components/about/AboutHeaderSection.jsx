import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AboutHeaderSection = () => {
  return (
    <section className="relative w-full h-[40vh] sm:h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80')",
          filter: "brightness(0.6)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-3xl sm:text-5xl font-bold mb-3 tracking-wide">
          Company Overview
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-200">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={18} />
          <Link
            to="/about/company-overview"
            className="font-medium text-blue-400"
          >
            About / Company Overview
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHeaderSection;
