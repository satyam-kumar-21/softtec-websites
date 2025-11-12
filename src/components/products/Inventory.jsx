import React from "react";
import { motion } from "framer-motion";

function Inventory() {
  const sections = [
    {
      title: "Real-Time Multi-Store Tracking",
      desc: "Manage and monitor inventory across multiple branches in real time. Whether you own a single shop or a large franchise, our system ensures you always know what’s in stock and where. Track products, categories, and suppliers all from one dashboard.",
      image:
        "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW52ZW50b3J5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Smart Alerts & Stock Notifications",
      desc: "Never run out of stock again. The system automatically sends low-stock alerts and notifications via email at defined intervals. Stay ahead of shortages and ensure that your products are always available to meet demand.",
      image:
        "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW52ZW50b3J5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Sales & Restocking Management",
      desc: "Record every sale, restocking activity, and adjustment with precision. The software maintains a transparent record of your inventory movement and provides accurate, real-time data to guide better purchasing and sales decisions.",
      image:
        "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW52ZW50b3J5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Theft Prevention & Inventory Correction",
      desc: "Track discrepancies between physical and recorded stock levels. Our system provides tools to verify, audit, and correct inventory quantities, helping businesses identify losses and maintain accountability.",
      image:
        "https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW52ZW50b3J5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Header Section */}
      <motion.div
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-red-900 mb-6">
          Inventory Management System 📦
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-justify leading-relaxed">
          The Inventory Management System is a real-time inventory database
          designed to simplify stock tracking for single or multiple stores. It
          automates the process of sales recording, stock distribution, and
          low-stock notifications, reducing manual strain and increasing
          operational efficiency.
        </p>
      </motion.div>

      {/* Section Details */}
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
              <motion.button
                whileHover={{ scale: 1.1, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-red-900 text-white font-semibold rounded-full shadow-lg hover:bg-red-800 transition-all duration-300"
                onClick={() =>
                  alert(`📦 Learn more about ${item.title} — Coming soon!`)
                }
              >
                Learn More
              </motion.button>
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
          Smart, Scalable, and Reliable
        </h3>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          Whether you're managing a single retail outlet or an entire chain, our
          inventory management software adapts to your business scale. With
          features like real-time tracking, alert notifications, and
          discrepancy correction, you can focus on growth while our system
          handles the rest.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-red-900 text-white rounded-full font-semibold hover:bg-red-800 shadow-lg transition-all"
          onClick={() => alert("🚀 Request a free live demo today!")}
        >
          Get a Free Demo 🚀
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Inventory;
