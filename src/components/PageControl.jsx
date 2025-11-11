import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function PageControl({ title, breadcrumb, image, link = "/" }) {
  return (
    <section className="relative w-full h-[20vh] sm:h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(0.6)",
        }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center text-white px-4 sm:px-6"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-wide drop-shadow-md">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base text-gray-200">
          <Link
            to={link}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-300" />
          <span className="font-medium text-red-600">{breadcrumb}</span>
        </div>
      </motion.div>
    </section>
  );
}

export default PageControl;
