import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";
import { Link } from "react-router-dom";

function Demo() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Shipment Tracking Software"
        breadcrumb="Services / Shipment Tracking Software"
        image="https://images.unsplash.com/photo-1581092334714-1a1b9b42bdbf?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        {/* Heading + Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
            Shipment Tracking Software
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
            Shipment Tracking Software is the simplest and most reliable solution for Courier &
            Cargo Tracking businesses. Whether you want to add tracking functionality to an
            existing website or a new one, Softec’s Shipment Tracking Software is the quickest and
            easiest option to deploy.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column: text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-700 text-base sm:text-lg order-2 md:order-1"
          >
            <p className="text-justify">
              The software is extremely easy to set up and manage through a powerful administration
              dashboard. It enables customers to track their consignments and shipping details
              online, whether for international or domestic shipments.
            </p>

            <p className="text-justify">
              We’ve designed this tracking solution to be simple yet efficient, ensuring that
              courier businesses can offer seamless tracking experiences without any technical
              hassles. You can install it yourself, or Softec can install and brand it in your name
              on your hosting.
            </p>

            <p className="text-justify">
              Shipment Tracking Software is the most straightforward solution available on the web
              for courier tracking — it’s simple, effective, and ready to use.
            </p>

            {/* Demo Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                to="/user-demo"
                className="bg-red-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition-all"
              >
                User Demo
              </Link>

              <Link
                to="/admin-demo"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all"
              >
                Admin Demo
              </Link>
            </div>

            {/* Demo Credentials */}
            <div className="mt-4 text-gray-700 text-sm">
              <p>
                <strong>User Name:</strong> Admin
              </p>
              <p>
                <strong>Password:</strong> Admin
              </p>
            </div>
          </motion.div>

          {/* Right column: image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
          >
            <img
              src="https://img.freepik.com/free-vector/courier-delivery-service-concept-illustration_114360-7456.jpg?w=740&t=st=1700180000~exp=1700180600~hmac=9a8f38b8e47f66f873f0f872ca1b9eb06a0c3d5462c7e73cf7f79e9b21a2e3a1"
              alt="Shipment Tracking Software"
              className="w-full h-[300px] sm:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Demo;
