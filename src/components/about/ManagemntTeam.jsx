import { motion } from "framer-motion";
import PageControl from "../PageControl";

function ManagementTeam() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Header Section */}
      <PageControl
        title="About us / Management Team"
        breadcrumb="About / Management Team"
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Dedicated Team
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-justify">
            The team at Softec consists of highly motivated, knowledgeable, and
            committed professionals. We hire and retain the best in the
            industry, ensuring a team of graduates from reputed universities
            with an average of 4 years of industry experience. Our experts have
            delivered projects for clients of all sizes across diverse business
            sectors.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-justify mt-6">
            We maintain honesty and transparency in every step of the project,
            providing clients with accurate progress reports. Our
            well-developed technology and computer-literate team form the
            foundation of our efficiency. The low personnel turnover ensures
            teamwork, expertise, and project effectiveness.
          </p>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-justify mt-6">
            Softec follows a people-driven process. We encourage creativity,
            positive feedback, and fair performance assessment. Our employees
            are empowered to develop skills and contribute to organizational
            growth while maintaining a culture of transparency, communication,
            and professional pride.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default ManagementTeam;
