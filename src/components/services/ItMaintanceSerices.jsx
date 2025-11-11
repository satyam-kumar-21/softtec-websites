import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function ItMaintanceSerices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / IT Maintenance Services"
        breadcrumb="Services / IT Maintenance"
        image="https://images.unsplash.com/photo-1581092334464-7c947d7bbf81?auto=format&fit=crop&w=1500&q=80"
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
            IT Maintenance Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Softec provides reliable and flexible IT Maintenance Services focused on fast resolutions and operational continuity — ensuring your business systems stay up and running.
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
            className="space-y-5 text-gray-700 text-base sm:text-lg order-2 md:order-1"
          >
            <p>
              We base our IT maintenance services on getting your systems back
              up and running quickly. Unlike traditional manufacturer
              warranties, our services are focused on fix times, not just
              response times — and we stay until your systems or users are
              operational again.
            </p>
            <p>
              We understand that every organization is unique with different
              priorities. That’s why our IT maintenance services can be tailored
              to meet your specific business needs. You can choose the level of
              support that fits your organization — and modify it as your needs
              evolve.
            </p>
            <p>
              Our skilled IT engineers and dedicated Helpdesk team deliver
              prompt, dependable support both remotely and on-site. They
              understand both technology and business — reliable professionals
              you can trust and enjoy working with.
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
              src="https://img.freepik.com/free-vector/it-support-concept-illustration_114360-1751.jpg?w=740&t=st=1700181345~exp=1700181945~hmac=28a6b229927d592780a72f3678b0c45c3f9f967e4ad39c3e3e3f1e6acbf73b9f"
              alt="IT Maintenance Services"
              className="w-full h-[300px] sm:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Fast Fix Times
            </h3>
            <p className="text-gray-700">
              We focus on resolving issues quickly to minimize downtime and keep your systems running smoothly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Flexible & Scalable
            </h3>
            <p className="text-gray-700">
              Customize your IT maintenance plan according to your organization’s size, structure, and evolving requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Trusted Professionals
            </h3>
            <p className="text-gray-700">
              Our experienced IT engineers and helpdesk team deliver dependable support with a personal touch.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default ItMaintanceSerices;
