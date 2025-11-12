import React from "react";
import { motion } from "framer-motion";

function SchoolCollegeERP() {
  const sections = [
    {
      title: "School ERP Management System",
      desc: "Simplify your school’s daily operations with a smart and automated School ERP solution. Manage student admissions, attendance, fees, report cards, and parent communication all from one secure platform. Empower teachers and administrators with real-time insights to make better academic decisions.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "College ERP Management System",
      desc: "Our College ERP is designed for universities, institutes, and colleges to manage courses, faculties, student performance, and online examinations. From admission to alumni management — everything is digitized for smooth academic and administrative control.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Online Examination & Result Management",
      desc: "Conduct secure online exams with automatic evaluation and instant result generation. Students can access results anytime, and teachers can track progress efficiently. No manual grading — just seamless performance monitoring.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Attendance & Fee Automation",
      desc: "Say goodbye to paper-based systems! Automate attendance tracking and fee collection with instant receipts, notifications, and reports. Parents can pay online and stay updated with their child’s academic journey in real-time.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Header Section */}
      <motion.div
        className="text-center py-16 px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-red-900 mb-6">
          School & College ERP Solutions 🎓🏫
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-justify leading-relaxed">
          Empower your educational institution with Softec’s all-in-one ERP
          solution. Designed for both schools and colleges, our system covers
          everything from admissions and academics to exams, attendance, fees,
          and communication — ensuring seamless digital management and
          transparency.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-24">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-red-900">
                {item.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.desc}
              </p>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-red-900 text-white font-semibold rounded-full shadow-lg hover:bg-red-800 transition-all duration-300"
                onClick={() =>
                  alert(`📘 Learn more about ${item.title} — Coming soon!`)
                }
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        className="bg-gray-100 py-16 mt-20 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-red-900 mb-4">
          Digital Future for Education
        </h3>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          Whether you're managing a school, college, or an entire educational
          group — our ERP adapts to your structure. Enjoy real-time dashboards,
          analytics, and mobile access to keep students, teachers, and
          administrators connected at all times.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-red-900 text-white rounded-full font-semibold hover:bg-red-800 shadow-lg transition-all"
          onClick={() => alert("🎯 Request a free live demo today!")}
        >
          Get a Free Demo 🎯
        </motion.button>
      </motion.div>
    </div>
  );
}

export default SchoolCollegeERP;
