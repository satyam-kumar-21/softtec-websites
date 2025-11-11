import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";
import { ShoppingCart, Globe, Settings } from "lucide-react";

function ECommerceSolution() {
  const features = [
    {
      icon: <ShoppingCart size={28} className="text-blue-600" />,
      title: "Smart E-Commerce Platform",
      description:
        "Multi-channel integration with Amazon, eBay & your own website, streamlining sales and operations.",
    },
    {
      icon: <Globe size={28} className="text-blue-600" />,
      title: "User-Friendly Design",
      description:
        "Modern, responsive, and intuitive design to enhance user experience and maximize conversions.",
    },
    {
      icon: <Settings size={28} className="text-blue-600" />,
      title: "Integrated Solutions",
      description:
        "Warehouse management, CRM, accounting, and shipping integrated seamlessly to simplify business processes.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / E-Commerce Solutions"
        breadcrumb="Services / E-Commerce Solutions"
        image="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Top Section - Centered Heading + Intro */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
            E-Commerce Solutions at Softec
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Softec builds modern e-commerce solutions tailored to your business. Platforms are visually appealing, functional, and optimized for maximum conversions.
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
              Softec recognizes the growing demand for e-commerce solutions. Customers prefer online shopping, so websites must be visually appealing, functional, and provide all necessary information to keep users engaged.
            </p>
            <p>
              We build e-commerce websites and software that excel technically and visually. Our solutions often include integrated warehouse management to streamline operations, helping clients expand sales channels and grow profits efficiently.
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
              src="https://sourcecode.mx/wp-content/uploads/2025/03/diseno-e-commerce.webp"
              alt="E-Commerce"
              className="w-full h-[300px] sm:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-red-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Design & Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10 mt-16"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-4">Design</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Stylish design and consistent branding build customer confidence and encourage purchases. Our team creates visually appealing, functional e-commerce websites optimized for conversions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-4">Integration</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our platform Cascade provides multi-channel integration including eBay, Amazon & your website. Streamline picking, packing, shipping, and integrate accounting, CRM, and fulfillment for seamless operations.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default ECommerceSolution;
