import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "/image/SoftecLogo.png"

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
        { name: "Home", link: "/" },
        {
            name: "About",
            dropdown: [
                { name: "Company Overview", link: "/about/company-overview" },
                { name: "Why Softec", link: "/about/why-softec" },
                { name: "Management Team", link: "/about/management-team" },
            ],
        },
        {
            name: "Services",
            dropdown: [
                { name: "Application Development", link: "/services/application-development" },
                { name: "Website Designing", link: "/services/website-designing" },
                { name: "Web Development", link: "/services/web-development" },
                { name: "E-Commerce Solutions", link: "/services/ecommerce-solutions" },
                { name: "Domain Registration", link: "/services/domain-registration" },
                { name: "Web Hosting", link: "/services/web-hosting" },
                { name: "Mail Solutions", link: "/services/mail-solutions" },
                { name: "SEO Services", link: "/services/seo-services" },
                { name: "IT Maintenance Services", link: "/services/it-maintenance" },
            ],
        },
        {
            name: "Our Solutions",
            dropdown: [
                { name: "Development Process", link: "/solutions/development-process" },
                { name: "Technologies Used", link: "/solutions/technologies-used" },
                { name: "Client Satisfaction", link: "/solutions/client-satisfaction" },
            ],
        },
        {
            name: "Our Products",
            dropdown: [
                { name: "Courier Software", link: "/products/courier-software" },
                { name: "Travel and Hotel Management", link: "/products/travel-hotel-management" },
                { name: "School and College ERP", link: "/products/school-college-erp" },
                { name: "Inventory Management Software", link: "/products/inventory-management" },
            ],
        },
        { name: "Career", link: "/career" },
        { name: "Demo", link: "/demo" },
        { name: "Contact", link: "/contact" },
    ];

    const handleLinkClick = () => {
        setMobileOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full top-0 left-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:py-6">
                    {/* Logo */}
                    {/* <Link
            to="/"
            className="text-3xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors"
            onClick={handleLinkClick}
          >
            Softtech <span className="text-gray-800">Solutions</span>
          </Link> */}

                    <Link to="/" onClick={handleLinkClick}>
                        <img
                            src={logo}  // Replace with your logo path
                            alt="Softtech Solutions Logo"
                            className="w-32 h-auto object-contain"  // Adjust size as needed
                        />
                    </Link>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center relative text-[1rem] font-medium">
                        {menuItems.map((item, index) => (
                            <div key={index} className="relative">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setActiveDropdown(activeDropdown === index ? null : index)
                                            }
                                            className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {activeDropdown === index && (
                                            <div className="absolute left-0 mt-3 bg-white shadow-lg rounded-xl w-56 py-3 z-40 animate-fadeIn">
                                                {item.dropdown.map((sub, i) => (
                                                    <Link
                                                        key={i}
                                                        to={sub.link}
                                                        onClick={handleLinkClick}
                                                        className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={item.link}
                                        onClick={handleLinkClick}
                                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-md animate-slideDown">
                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-100">
                                {item.dropdown ? (
                                    <details className="group">
                                        <summary className="flex justify-between items-center px-6 py-3 cursor-pointer text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600">
                                            {item.name}
                                            <span className="transition-transform duration-200 group-open:rotate-180">
                                                ▼
                                            </span>
                                        </summary>
                                        <div className="bg-gray-50">
                                            {item.dropdown.map((sub, i) => (
                                                <Link
                                                    key={i}
                                                    to={sub.link}
                                                    onClick={handleLinkClick}
                                                    className="block px-8 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                ) : (
                                    <Link
                                        to={item.link}
                                        onClick={handleLinkClick}
                                        className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </header>

            {/* 👇 Dummy Spacer to fix overlap */}
            {/* <div className="h-24"></div> */}
        </>
    );
};

export default Header;
