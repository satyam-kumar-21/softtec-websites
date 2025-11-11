import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function DomainRegi() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Domain Registration"
        breadcrumb="Services / Domain Registration"
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Top Section */}
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
            Domain Registration at Softec
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A domain name is your identity on the Internet. Softec provides reliable, affordable domain registration services to secure your online presence.
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
              Whatever business you are in, registering a domain name is crucial for your online identity. It represents your brand and allows customers to find you easily.
            </p>
            <p>
              We provide affordable and competitive domain registration and transfer services without compromising on support. Our goal is to make it easy for individuals and organizations to secure domains for personal or business use.
            </p>
            <p>
              At Softec, we continually improve our services based on customer feedback and offer innovative solutions to enhance the value of your domains.
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
              src="https://img.freepik.com/free-vector/domain-registration-concept-illustration_114360-8902.jpg?w=740&t=st=1700175346~exp=1700175946~hmac=9c6e11b4eb39b0f8653b9ff2cb5df3c033e8a0a0d6e3c1127f504d2fbb14adf4"
              alt="Domain Registration"
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
              Affordable Services
            </h3>
            <p className="text-gray-700">
              Reasonably priced domain registration and transfer services for individuals and businesses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Reliable Support
            </h3>
            <p className="text-gray-700">
              Dedicated customer service ensures a smooth registration process and ongoing support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Secure & Trusted
            </h3>
            <p className="text-gray-700">
              Protect your brand online with secure and trusted domain registration solutions.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default DomainRegi;
