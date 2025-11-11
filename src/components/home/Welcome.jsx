import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800 px-6 py-20 md:py-28 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-40 blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600"
        >
          Welcome to <span className="text-red-900">Softec</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Softec is the brainchild of a team of innovative IT professionals who
          positioned the brand for customized solutions to meet the most exacting
          needs of valued customers. Softec has carved a major market share in
          software development from the grass root level with special focus on
          the control and automation vertical.
          <br />
          <br />
          The organization has path-breaking applications backed with the best of
          resources and infrastructure, setting unbeatable standards in customer
          satisfaction. If you are looking for solutions beyond a script, come to
          Softec for long-term business success.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
}

export default Welcome;
