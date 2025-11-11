import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function WebDev() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Web Development"
        breadcrumb="Services / Web Development"
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Top Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
            Web Development at Softec
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Web development is the backbone of your online presence. Softec builds robust, error-free websites and web applications tailored to your business needs.
          </p>
        </motion.div>

        {/* Two-column Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg order-2 md:order-1"
          >
            <p>
              Along with web designing, web development ensures the functionality and performance of your website. Our experienced developers write clean, error-free code for smooth, responsive web applications.
            </p>
            <p>
              Web development allows your software to be fully online — accessible from anywhere without installation. This helps teams collaborate efficiently and communicate with clients seamlessly.
            </p>
            <p>
              Softec provides cost-effective, high-quality web development services, maintaining strong client relationships and delivering scalable solutions for future business growth.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
          >
            <img
              src="https://www.achieversit.com/management/uploads/course_image/web-dev-img1.jpeg"
              alt="Web Development"
              className="w-full h-[300px] sm:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* Additional Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-red-900">
            Reliable & Scalable Solutions
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg">
            Our team ensures your website and web applications are scalable, secure, and optimized for the best user experience. We focus on long-term client success through innovation, support, and technical excellence.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default WebDev;
