import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Globe,
  Boxes,
  Cloud,
  Smartphone,
  TerminalSquare,
  Layers,
  Cpu,
} from "lucide-react";
import PageControl from "../PageControl";

function TechUsed() {
  const technologies = [
    {
      icon: <Code2 className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "React.js",
      description:
        "A leading JavaScript library for building dynamic and responsive user interfaces efficiently.",
    },
    {
      icon: <Server className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Node.js",
      description:
        "A fast, event-driven backend environment ideal for scalable and real-time applications.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Angular",
      description:
        "A robust front-end framework by Google used to build modern single-page web applications.",
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "PHP",
      description:
        "A widely used open-source scripting language suited for web development and server-side programming.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-600 mx-auto" />,
      title: ".NET",
      description:
        "A Microsoft framework for developing secure, enterprise-level desktop, web, and mobile applications.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Flutter",
      description:
        "A powerful UI toolkit by Google for building natively compiled cross-platform mobile and web apps.",
    },
    {
      icon: <TerminalSquare className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Python",
      description:
        "A high-level programming language used for backend development, AI, data analytics, and automation.",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "MongoDB",
      description:
        "A modern NoSQL database designed for speed, flexibility, and scalability in data-driven applications.",
    },
    {
      icon: <Boxes className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Express.js",
      description:
        "A fast and minimalist backend framework for Node.js, perfect for APIs and server-side development.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-600 mx-auto" />,
      title: "Cloud & Hosting",
      description:
        "We deploy applications on AWS, Vercel, Netlify, and Azure for high performance, reliability, and security.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* ✅ Page Header */}
      <PageControl
        title="Solution / Technologies Used"
        breadcrumb="Solution / Technologies Used"
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* ✅ Content Section */}
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
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Softec uses a diverse range of modern technologies and frameworks to
            deliver high-performance, secure, and scalable web, mobile, and
            software solutions. We select the right tools to ensure efficiency,
            innovation, and long-term stability for every project.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-red-900 mb-3">
                {tech.title}
              </h3>
              <p className="text-gray-700">{tech.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default TechUsed;
