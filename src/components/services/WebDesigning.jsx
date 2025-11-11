import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function WebDesigning() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Website Designing"
        breadcrumb="Services / Website Designing"
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
            Website Designing at Softec
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your website is your first impression. Softec crafts websites that
            are visually stunning, user-friendly, and strategically aligned with
            your business goals.
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
              Are you looking to create a new website or unhappy with your
              existing one? Your website is your first impression — make it
              count.
            </p>
            <p>
              Softec’s expert web designers transform your ideas into a unique
              digital presence. From small static websites to complex dynamic
              web applications, we follow a structured SDLC process ensuring
              quality, transparency, and client collaboration.
            </p>
            <p>
              We specialize in modern web technologies like HTML, CSS,
              JavaScript, PHP, Ajax, XML, and XHTML to deliver responsive,
              visually appealing, and functional websites tailored to your
              business needs.
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKup-vnbASM_l3P9R_SQOKljxGNtQRS620eg&s"
              alt="Web Designing"
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
            Our Expertise & Approach
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-base sm:text-lg">
            Softec ensures that each website project is crafted with attention
            to detail, creativity, and usability. We provide complete web
            solutions with ongoing support to help your business succeed online
            and make a lasting impression.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default WebDesigning;
