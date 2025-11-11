import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function MailSolution() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Mail Solution"
        breadcrumb="Services / Mail Solution"
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
            Business Mail Solution by Softec
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Email is the most essential online tool — your digital passport for
            most applications. Softec helps businesses stay connected securely
            and efficiently with enterprise-grade mail solutions.
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
              Email is your online identity — used to log in, communicate, and
              manage your business operations. Choosing the right mail service
              impacts your efficiency, security, and overall workflow.
            </p>
            <p>
              Softec’s Business Email Solution gives you the power of a
              professional enterprise mail system — built for small and medium
              businesses at a low monthly cost. Enjoy reliable, spam-free, and
              feature-rich email hosting without maintaining any hardware or
              software.
            </p>
            <p>
              Focus on your core business while Softec manages your mail
              infrastructure. We handle uptime, backups, and security — so you
              can communicate seamlessly with clients and teams.
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
              src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1673.jpg?w=740&t=st=1700178345~exp=1700178945~hmac=fcdcf00de2f8a816cbdf3a7edabcf0e03e80f67a441fd5734af0b4708c59b90c"
              alt="Business Mail Solution"
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
              Enterprise Power
            </h3>
            <p className="text-gray-700">
              Get access to advanced email infrastructure designed for high
              performance and reliability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Hassle-Free Setup
            </h3>
            <p className="text-gray-700">
              No servers or complex configurations. Softec manages and hosts
              your email for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Secure & Spam-Free
            </h3>
            <p className="text-gray-700">
              Enjoy advanced spam filters, data encryption, and 24/7 monitoring
              to protect your communication.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default MailSolution;
