import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import logo from "../../public/image/SoftecLogo.png"

function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-14 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    {/* <h2 className="text-3xl font-bold text-white mb-4">
            Softech <span className="text-blue-500">Solutions</span>
          </h2> */}

                    <Link to="/" >
                        <img
                            src={logo}  // Replace with your logo path
                            alt="Softtech Solutions Logo"
                            className="w-32 h-auto object-contain"  // Adjust size as needed
                        />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Delivering modern technology solutions that empower businesses to
                        grow faster, smarter, and stronger. Your trusted tech partner for
                        innovation and success.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 mt-5">
                        {[
                            { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                            { icon: <FaTwitter />, color: "hover:bg-sky-500" },
                            { icon: <FaInstagram />, color: "hover:bg-pink-500" },
                            { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
                        ].map((item, i) => (
                            <Link
                                key={i}
                                to="#"
                                className={`p-2.5 bg-gray-800 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${item.color}`}
                            >
                                {React.cloneElement(item.icon, { size: 18 })}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/about" },
                            { name: "Services", path: "/services" },
                            { name: "Career", path: "/career" },
                            { name: "Contact", path: "/contact" },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.path}
                                    className="hover:text-blue-400 transition duration-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Solutions */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Our Solutions
                    </h3>
                    <ul className="space-y-3 text-sm">
                        {[
                            { name: "Business Automation", path: "/solutions/automation" },
                            { name: "Cloud Solutions", path: "/solutions/cloud" },
                            { name: "E-Commerce", path: "/solutions/ecommerce" },
                            { name: "Digital Marketing", path: "/services/marketing" },
                        ].map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.path}
                                    className="hover:text-blue-400 transition duration-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <GoLocation size={20} className="text-blue-400 mt-1" />
                            <div>
                                <p>123 Tech Street</p>
                                <p>Bangalore, India</p>
                            </div>
                        </li>

                        <li className="flex items-center gap-3">
                            <FiPhone size={18} className="text-blue-400" />
                            <Link
                                to="tel:+919876543210"
                                className="hover:text-blue-400 transition duration-200"
                            >
                                +91 98765 43210
                            </Link>
                        </li>

                        <li className="flex items-center gap-3">
                            <FiMail size={18} className="text-blue-400" />
                            <Link
                                to="mailto:info@softtechsolutions.com"
                                className="hover:text-blue-400 transition duration-200"
                            >
                                info@softtechsolutions.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="text-white">Softtech Solutions</span>. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
