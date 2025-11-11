import React from "react";
import { motion } from "framer-motion";
import PageControl from "../PageControl";

function SeoService() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageControl
        title="Services / Search Engine Optimization (SEO)"
        breadcrumb="Services / SEO"
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Content Section */}
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
            Search Engine Optimization (SEO)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Softec is one of the leading SEO service providers, helping
            businesses achieve higher visibility and ranking across major search
            engines through ethical, effective, and affordable SEO strategies.
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
              Softec is a globally recognized SEO company headquartered in New
              Delhi, India, with clients across the world including the UK, USA,
              Dubai, Australia, and Canada.
            </p>
            <p>
              Our SEO experts combine deep technical knowledge and creative
              marketing strategies to help you rank higher on Google, Yahoo,
              Bing, and other major search engines. We focus on organic SEO to
              ensure long-term, stable results.
            </p>
            <p>
              We follow only ethical and white-hat SEO techniques, delivering
              guaranteed and affordable packages designed to increase website
              visibility, attract traffic, and boost conversions.
            </p>
            <p>
              Our team of passionate and skilled SEO professionals,
              consultants, and developers constantly strive to exceed client
              expectations through innovation and dedication.
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
              src="https://img.freepik.com/free-vector/seo-optimization-concept-illustration_114360-5866.jpg?w=740&t=st=1700180345~exp=1700180945~hmac=6a3a3fdc964b5e41f51e344c0ee1c93fbe91df8b4e78019d401d05df6e7c5e41"
              alt="Search Engine Optimization"
              className="w-full h-[300px] sm:h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* SEO Services List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-red-900 mb-8">
            Our SEO Services Include
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Free Initial SEO Report",
              "SEO Friendly Web Design & Development",
              "Keyword Research",
              "SEO Copywriting",
              "Search Engine Compatibility Analysis",
              "HTML Code Refining",
              "Content Analysis",
              "Site Structure Analysis",
              "Website Competitive Analysis",
              "Meta Tags Optimization",
              "Advanced Link Building",
              "Directory Submission (Free/Paid)",
              "Analytics & Reporting",
              "PPC Campaigns (Pay Per Click)",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

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
              Organic SEO Focus
            </h3>
            <p className="text-gray-700">
              We emphasize long-lasting organic SEO strategies for stable
              rankings and natural traffic growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Global Expertise
            </h3>
            <p className="text-gray-700">
              Serving clients worldwide — UK, USA, Dubai, Australia, Canada, and
              India — with tailored SEO campaigns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-red-900 mb-3">
              Guaranteed Results
            </h3>
            <p className="text-gray-700">
              Proven track record of delivering Top 10 search engine rankings
              for diverse businesses.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default SeoService;
