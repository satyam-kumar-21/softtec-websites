import React from "react";
import { motion } from "framer-motion";

function AdminDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo login submitted\nUser: Admin\nPassword: Admin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Admin Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-2xl p-10 sm:p-12 text-center border border-gray-200"
      >
        {/* Heading */}

         <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-800 mb-3 tracking-wide">
          Shipment Tracking Admin Login
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-600 mb-6">
          Powered by <span className="text-blue-900 font-bold">Softec.in</span>
        </h2>

        {/* Contact Info */}
        <div className="mb-6 space-y-1 text-gray-700 text-sm sm:text-base">
          <p>
            <strong>📞 Contact:</strong> +91-9313534559
          </p>
          <p>
            <strong>✉️ Email:</strong>{" "}
            <a
              href="mailto:sandeep@softec.in"
              className="text-blue-700 hover:underline"
            >
              sandeep@softec.in
            </a>
          </p>
        </div>

        {/* Login Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Enter your Username and Password
          </h3>

          <form className="flex flex-col gap-5 text-left" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-800 text-lg font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Please enter your username"
                className="w-full border border-gray-300 rounded-xl bg-white text-gray-800 px-5 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-800 text-lg font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Please enter your password"
                className="w-full border border-gray-300 rounded-xl bg-white text-gray-800 px-5 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-all"
              />
            </div>

            <button
              type="submit"
              className="mt-3 w-full bg-blue-800 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Login
            </button>
          </form>

          {/* Demo credentials (highlighted card) */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
            <h4 className="text-lg font-semibold mb-3 text-blue-800">
              🔐 Demo Credentials
            </h4>
            <div className="flex flex-col gap-1 items-center">
              <p className="text-base text-gray-700">
                <strong>User Name:</strong>{" "}
                <span className="font-bold text-blue-800">Admin</span>
              </p>
              <p className="text-base text-gray-700">
                <strong>Password:</strong>{" "}
                <span className="font-bold text-blue-800">Admin</span>
              </p>
              <p className="mt-2 text-sm text-gray-500 text-center">
                This is a demo login — enter the above credentials to explore the admin interface.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Softec.in — Admin Demo  
        <br />
        Developed by{" "}
        <span className="text-blue-800 font-semibold">
          Softec Web Solutions
        </span>
        .
      </p>
    </div>
  );
}

export default AdminDemo;
