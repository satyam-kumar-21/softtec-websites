import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TravelAndHotel() {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      title: "Restaurant Management System",
      desc: "Simplify your restaurant operations with our advanced Restaurant Management Software. From table reservations to online ordering and billing — everything is automated and easy to manage. Track inventory, manage staff schedules, and ensure a delightful dining experience for your customers.",
      details:
        "Our Restaurant Management System offers complete POS integration, kitchen order tracking, analytics dashboard, and staff performance reports — everything to keep your restaurant running smoothly and profitably.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Hotel Management Software",
      desc: "Our Hotel Management System is designed for hotels, resorts, and guest houses of all sizes. Manage bookings, check-ins, check-outs, room availability, housekeeping, and billing — all from a single dashboard. Give your guests a seamless stay experience while improving operational efficiency.",
      details:
        "With our advanced Hotel Management Software, you can automate reservations, generate performance reports, and sync bookings with third-party travel platforms — ensuring maximum occupancy and guest satisfaction.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tour & Travels Portal",
      desc: "Empower your travel agency with a smart Tour & Travels Portal. Offer your customers real-time tour packages, bookings, itinerary management, and secure online payments. Manage vendors, customer inquiries, and feedback from one place — and boost your brand reach worldwide.",
      details:
        "The Tour & Travels Portal includes integrated flight, hotel, and cab booking systems, client dashboards, and marketing tools — designed to scale your travel business effortlessly.",
      image:
        "https://www.divyatourstravels.in/public/img/jk.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-900 mb-6">
          Travel & Hotel Management Solutions 🏨✈️
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-justify leading-relaxed">
          Simplify and scale your travel, hospitality, and food business with
          Softec’s powerful management software suite. From hotels to
          restaurants and travel agencies, we deliver complete automation for
          smooth business operations and better customer satisfaction.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-24">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-red-900">
                {item.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.desc}
              </p>
              <button
                onClick={() => setSelectedSection(item)}
                className="px-6 py-3 bg-red-900 text-white font-semibold rounded-full shadow-lg hover:bg-red-800 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        className="bg-gray-100 py-16 mt-20 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-red-900 mb-4">
          One Solution for All Hospitality Needs
        </h3>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          Whether you’re managing a small cafe, a five-star hotel, or a global
          travel agency — Softec provides flexible, scalable, and secure
          solutions tailored to your needs. Our goal is to help you save time,
          increase revenue, and deliver a world-class experience to your
          customers.
        </p>
      </motion.div>

      {/* Learn More Modal */}
      <AnimatePresence>
        {selectedSection && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-4 relative text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-red-900 mb-4">
                {selectedSection.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedSection.details}
              </p>
              <button
                onClick={() => setSelectedSection(null)}
                className="px-6 py-2 bg-red-900 text-white rounded-full hover:bg-red-800 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TravelAndHotel;
