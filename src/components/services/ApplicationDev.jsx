import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function ApplicationDev() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Application Development"
        breadcrumb="Services / Application Development"
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-16">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
            Application Development
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We develop tailored software solutions that meet your business needs efficiently and effectively.
          </p>
        </motion.div>

        {/* Two-column Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-700 text-base sm:text-lg order-2 md:order-1"
          >
            <p>
              Every client has unique goals. Softec analyzes your targets and processes to deliver effective software solutions.
            </p>
            <p>
              Our technical team brings extensive industry experience to craft and execute solutions that help you succeed.
            </p>
            <p>
              We combine expertise and manpower to develop tailored applications, ensuring high quality and client satisfaction.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
          >
            <img
              src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Application Development"
              className="w-full h-[300px] sm:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Complete Solutions
            </h3>
            <p className="text-gray-700">
              From small components to large-scale software, we deliver end-to-end solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Experienced Team
            </h3>
            <p className="text-gray-700">
              Our developers have extensive experience in delivering quality software across industries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Client-Centric
            </h3>
            <p className="text-gray-700">
              We analyze your goals and provide solutions that help achieve success.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default ApplicationDev;
