import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80",
    title: "Innovating the Future with Technology",
    subtitle:
      "Empowering businesses through digital transformation and smart solutions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80",
    title: "Your Trusted Software Partner",
    subtitle:
      "Delivering scalable, reliable, and modern software for global clients.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80",
    title: "We Build Solutions that Scale",
    subtitle:
      "Bringing your vision to life with design, code, and innovation.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[current].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[current].image}
            alt="slide"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for blur and readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl"
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 px-6 py-3 bg-red-900 hover:bg-red-700 text-white font-medium rounded-full shadow-md transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-blue-500 w-5" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
