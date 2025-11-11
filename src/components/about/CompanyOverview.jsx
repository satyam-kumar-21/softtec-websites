import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CompanyOverview() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* ===== Title Section ===== */}
      <div className="text-center py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
          Company Overview
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          "Softec" — A trusted name in IT innovation and customer satisfaction.
        </p>
      </div>

      {/* ===== Section 1 ===== */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 py-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            alt="Team Collaboration"
            className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-96"
          />
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4 text-red-900">
            About Softec
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Softec is a leading IT solution provider, offering both customized
            and package-based systems. From concept to deployment, we deliver
            innovative technology tailored to meet your business goals.
            <br />
            <br />
            Our skilled professionals design, develop, and implement
            state-of-the-art software solutions across diverse industries.
          </p>
        </div>
      </div>

      {/* ===== Section 2 ===== */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-12 py-12 bg-blue-50 rounded-3xl">
        <div className="md:w-1/2" data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4 text-red-900">
            Our Mission & Expertise
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to achieve 100% client satisfaction through smart
            technology and innovative ideas. We use proven project management
            methodologies, milestone tracking, and transparent reporting.
            <br />
            <br />
            We are always ready to extend support even after completion —
            ensuring seamless updates and enhancements over time.
          </p>
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
            alt="Team Work"
            className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-96"
          />
        </div>
      </div>

      {/* ===== Section 3 ===== */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 py-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt="Infrastructure"
            className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-96"
          />
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4 text-red-900">
            Softec Strengths
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Well–established infrastructure with all required resources.</li>
            <li>✅ Pioneer in the IT sector, operating since 2008 with trust.</li>
            <li>✅ Highly motivated & skilled control system and IT professionals.</li>
            <li>✅ Expertise in control automation and software integration.</li>
            <li>✅ Comprehensive solution provider across industries.</li>
          </ul>
        </div>
      </div>

      {/* ===== Outro ===== */}
      <div className="text-center py-16 bg-gradient-to-r from-red-800 to-red-900 text-white px-6" data-aos="zoom-in">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Building Tomorrow’s IT Solutions Today 🚀
        </h3>
        <p className="max-w-2xl mx-auto text-gray-200">
          Join hands with Softec — where technology meets trust, and innovation
          drives success.
        </p>
      </div>
    </section>
  );
}

export default CompanyOverview;
