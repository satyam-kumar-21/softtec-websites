import { motion } from "framer-motion";
import PageControl from "../PageControl";

function WhySofttec() {
  const points = [
    "Reduce costs of outsourcing software development and get the best software utility ever.",
    "Daily interaction with Softec consultants on-site, or off-site/offshore as preferred.",
    "Wide range of software products from small integrations to large web/desktop solutions.",
    "Follow complete SDLC process ensuring high-quality, reliable software and strong client relationships.",
    "Full lifecycle support including development, testing, staffing, BPO, and IT services.",
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Header */}
      <PageControl
        title="About us / Why"
        breadcrumb="About / Why Softec"
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Intro */}
      <motion.div
        className="max-w-4xl mx-auto text-center px-6 sm:px-0 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-red-900">Softec</span>?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Software Development at Softec has lots of benefits. Through our software development you reduce costs of outsourcing and get the best software utility ever.
        </p>
      </motion.div>

      {/* Floating Cards */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-0 -mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-red-900 hover:shadow-2xl transition-all cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-red-900 font-semibold text-lg mb-2">
              {`0${index + 1}`}
            </div>
            <p className="text-gray-700 leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </section>

      {/* Outro */}
      <motion.div
        className="max-w-4xl mx-auto text-center px-6 sm:px-0 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Softec — Your Complete IT Partner
        </h3>
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
          We meet client needs using exceptional technical skills and full lifecycle support — development, testing, staffing, BPO, and IT services — helping clients stay progressive and competitive globally.
        </p>
      </motion.div>
    </div>
  );
}

export default WhySofttec;
