import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function WebHosting() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Web Hosting"
        breadcrumb="Services / Web Hosting"
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
            Web Hosting at Softec
          </h2>
          {/* Intro Text below heading */}
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Softec is an industry leader in providing top-class web hosting
            services. There are no hidden costs, no adverts, and no restrictive
            terms. Lightning fast speeds, maximum reliability, and fanatical user
            support are just a few of the features you'll receive with our service.
          </p>
        </motion.div>

        {/* Two-column Section: Text + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg order-2 md:order-1"
          >
            <p className="text-justify">
              Hosting is the storage and functioning agent for website tools.
              Web editors or designers often prefer Linux hosting because it naturally
              meets basic requirements. Windows hosting is easier to operate for certain
              web elements.
            </p>

            <h3 className="text-xl font-semibold text-red-900 mt-4">
              Basic Requirements for Windows Hosting
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
              <li>Remote Desktop with support for dedicated servers.</li>
              <li>ASP.NET for .NET framework support.</li>
              <li>
                MS SQL to make databases accessible at any time for search and
                management.
              </li>
              <li>
                MS Access to make data compatible with different Windows versions.
              </li>
              <li>
                Visual Basic developments to enhance multimedia support and enable
                lightbox pop-up mechanisms.
              </li>
            </ul>

            <p className="text-justify mt-4">
              At Softec, our hosting solutions are designed to support your business growth,
              ensuring maximum uptime, speed, and security. We provide both Linux and
              Windows hosting options tailored to meet the technical and operational
              requirements of your website.
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
              src="https://www.infince.com/wp-content/uploads/shutterstock_559462321-scaled-1.jpg"
              alt="Web Hosting"
              className="w-full h-[300px] sm:h-[380px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WebHosting;
