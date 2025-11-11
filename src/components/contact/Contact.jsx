import React from "react";
import PageControl from "../PageControl";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PageControl
        title="Contact Us"
        breadcrumb="Home / Contact"
        image="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        {/* Left: Contact Details */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8">
            Contact Information
          </h2>

          <div className="space-y-5 text-gray-700 text-lg">
            <div>
              <p className="font-semibold text-gray-900">Ghaziabad Office:</p>
              <p>Plot No. 608, 1st Floor, Sector 4</p>
              <p>Near Vaishali Metro, Vaishali, Ghaziabad - 201010</p>
              <p>Contact No: +91-931 353 4559</p>
              <p>Email: sandeep@softec.in</p>
              <p>WhatsApp: +91-931 353 4559</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">New Delhi Office:</p>
              <p>9306/6, Multani Dhanda, Pahar Ganj, New Delhi - 110055</p>
              <p>Contact No: +91-931 353 4559</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Patna:</p>
              <p>Contact No: +91-933 483 8934</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Kolkata:</p>
              <p>Contact No: +91-931 353 4559</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Gurgaon:</p>
              <p>Contact No: +91-995 343 4559</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Inquiry:</p>
              <p>info@softec.in</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Sales & Support:</p>
              <p>support@softec.in</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-8">
            Get in Touch
          </h2>
          <form className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-red-700 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
