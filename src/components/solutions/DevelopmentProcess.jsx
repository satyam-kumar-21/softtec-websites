import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, FileCode, Code2, ShieldCheck, Rocket } from "lucide-react";
import PageControl from "../PageControl";

function DevelopmentProcess() {
  const steps = [
    {
      icon: <Lightbulb className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Understanding Client's Needs",
      description:
        "We first analyze the client's requirements in detail. If we find any missing points, we discuss them with the client and suggest better alternatives for a satisfactory solution.",
    },
    {
      icon: <FileCode className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Creating Prototype",
      description:
        "Before development begins, we create a prototype to estimate challenges, required efforts, time duration, and total project cost from initiation to implementation.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Development Phase",
      description:
        "Our team handles multiple simultaneous processes for web or software development. Clients can track progress at any development stage for complete transparency.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Testing & Implementation",
      description:
        "Delivering a flawless product is our main goal. We perform deep testing including unit, integration, load, portability, security, and responsiveness testing to ensure quality.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Launch & Delivery",
      description:
        "The final phase includes deployment at client hosting, performance tuning, client training, and launching the final solution to ensure seamless delivery.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* ✅ Page Header */}
      <PageControl
        title="Solutions / Development Process"
        breadcrumb="Solution / Development Process"
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* ✅ Content Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-4">
            Development Process at Softec
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since we started providing our IT solutions and software services, we have been committed
            to delivering affordable, high-quality, and timely results. Our proven methodology ensures
            smooth, rationalized development processes and successful project completion.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-red-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default DevelopmentProcess;
