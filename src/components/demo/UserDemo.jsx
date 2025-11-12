import React from "react";
import { motion } from "framer-motion";

function UserDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-2xl p-10 sm:p-12 text-center border border-gray-200"
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-3 tracking-wide">
          Shipment Tracking
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-600 mb-6">
          Powered by <span className="text-blue-900 font-bold">Softec.in</span>
        </h2>

        {/* Intro Text */}
        <p className="text-gray-600 mb-8 leading-relaxed text-justify text-base sm:text-lg">
          Track your courier and cargo shipments in real-time.  
          Simply enter your <b>Consignment Number</b> below to get the latest
          delivery updates, shipment status, and estimated delivery time.  
          Stay informed — wherever your shipment goes.
        </p>

        {/* Contact Info */}
        <div className="space-y-1 mb-8 text-gray-700 text-sm sm:text-base">
          <p>
            <strong>📞 Contact No:</strong> +91-931 353 4559
          </p>
          <p>
            <strong>✉️ Email:</strong>{" "}
            <a
              href="mailto:sandeep@softec.in"
              className="text-blue-700 hover:underline"
            >
              sandeep@softec.in
            </a>
          </p>
        </div>

        {/* Input Section */}
        <div className="mt-4 w-full">
          <label
            htmlFor="consignment"
            className="block text-gray-800 text-lg font-semibold mb-3 text-left"
          >
            Enter the Consignment No
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              id="consignment"
              placeholder="Ex: 0123456789"
              className="flex-1 w-full border border-gray-300 rounded-xl px-5 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all"
            />
            <button className="w-full sm:w-auto bg-blue-800 text-white px-8 py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all shadow-md">
              Track
            </button>
          </div>
        </div>

        {/* Result Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-gray-500 italic"
        >
          Tracking details will appear here once a valid consignment number is entered.
        </motion.div>
      </motion.div>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Softec.in — All Rights Reserved.  
        <br />
        Developed by{" "}
        <span className="text-blue-800 font-semibold">
          Softec Web Solutions
        </span>
        .
      </p>
    </div>
  );
}

export default UserDemo;
