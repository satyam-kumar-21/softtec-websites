import React from "react";
import PageControl from "../PageControl";

function Career() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PageControl
        title="Career"
        breadcrumb="Home / Career"
        image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Career Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8">
          Build Your Career with Softec
        </h2>

        <p className="text-lg mb-6 leading-relaxed">
          Every top-notch organisation in this world has reached the peaks of
          success because it had the right people to propel its growth. And,
          these people were ‘right’ because they gelled as a team to ensure
          their customers were a satisfied lot.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          At <span className="font-semibold text-gray-900">Softec</span>, we
          believe in learning, unlearning, and relearning the unconventional
          way. We empower our teams to dream big and explore uncharted routes to
          success. Join Softec, and become an advocate of growth – both yours
          and ours!
        </p>

        <div className="mt-10 bg-gray-900 p-8 rounded-2xl shadow-lg text-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-red-500">
            Send Us Your Resume
          </h3>
          <p className="text-lg mb-4 text-gray-400">
            Please mail your updated resume to:
          </p>
          <a
            href="mailto:info@softec.in"
            className="text-xl font-semibold text-white underline hover:text-red-400"
          >
            info@softec.in
          </a>
          <p className="mt-6 text-sm text-gray-400">
            We’re always looking for talented individuals who can bring value
            and passion to our team. Let’s grow together 🚀
          </p>
        </div>
      </section>
    </div>
  );
}

export default Career;
