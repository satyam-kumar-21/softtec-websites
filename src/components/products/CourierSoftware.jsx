import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CourierSoftware() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 py-12">
      {/* Header Section */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-red-900 tracking-wide"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Shipment Tracking Software 🚚
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-lg text-justify md:text-xl max-w-4xl text-gray-700 leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Empower your courier & cargo business with our advanced Shipment Tracking Software.
        Track shipments, manage consignments, and enhance customer satisfaction — all from a
        single, powerful platform. Easy to install, simple to use, and built for growth.
      </motion.p>

      {/* Feature Section */}
      <motion.div
        className="bg-gray-100 shadow-2xl rounded-2xl p-8 md:p-12 max-w-5xl border border-gray-300 hover:shadow-red-200 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-red-900 mb-4 text-center">
          Why Choose Our Courier Management Solution?
        </h2>
        <ul className="text-gray-700 space-y-3 text-lg">
          <li>✔️ <b>Real-Time Tracking:</b> Customers can track their consignments anytime, anywhere.</li>
          <li>✔️ <b>Easy Installation:</b> Get up and running in minutes — no technical skills required.</li>
          <li>✔️ <b>Admin Dashboard:</b> Manage all shipments, routes, and staff from one simple panel.</li>
          <li>✔️ <b>Customer-Friendly Interface:</b> Designed to deliver a smooth experience across devices.</li>
          <li>✔️ <b>Performance Reports:</b> Get detailed analytics on daily, weekly, and monthly deliveries.</li>
        </ul>
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        className="mt-12 max-w-5xl text-center text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold text-red-900 mb-4">
          Fast, Reliable, and Fully Customizable
        </h3>
        <p className="text-lg mb-6 text-justify">
          Our Shipment Tracking Software is the ultimate solution for courier and logistics
          companies looking to offer transparency and speed to their clients. It supports both
          <span className="font-semibold"> domestic </span>and
          <span className="font-semibold"> international </span> shipments with live tracking,
          automated status updates, and detailed logs. No coding needed — we handle installation
          and setup for you.
        </p>

        <p className="text-lg text-justify">
          With a few clicks, your business can move from manual tracking to a fully automated
          system. Gain your customers’ trust with professional-grade shipment visibility and
          performance insights. <br /> <br />
          <b className="text-red-900 ">Example Tracking ID:</b> 0123456789
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-6 justify-center mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <Link
          to="/user-demo"
          className="px-8 py-3 text-lg font-semibold rounded-full bg-red-900 text-white hover:bg-red-800 shadow-md transition-all duration-300"
        >
          User Demo
        </Link>
        <Link
          to="/admin-demo"
          className="px-8 py-3 text-lg font-semibold rounded-full bg-gray-800 text-white hover:bg-gray-700 shadow-md transition-all duration-300"
        >
          Admin Demo
        </Link>
      </motion.div>

      {/* Demo Credentials */}
      <motion.p
        className="text-gray-700 text-center mt-10 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="font-semibold">Username:</span> Admin &nbsp; | &nbsp;
        <span className="font-semibold">Password:</span> Admin
      </motion.p>

      
    </div>
  );
}

export default CourierSoftware;
