import React, { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

function TopChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  // Function to play sound
  const playSound = () => {
    const audio = new Audio("/notification.wav"); // Place mp3 in public folder
    audio.play().catch(() => {}); // Catch autoplay errors
  };

  // Auto-open popup on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      playSound();
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle popup on button click
  const handleToggle = () => {
    setIsOpen(!isOpen);
    playSound(); // Play sound on click
  };

  return (
    <>
      {/* Floating Chat Bot */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Popup */}
        {isOpen && (
          <div
            ref={popupRef}
            className="bg-white shadow-xl rounded-xl p-4 w-64 flex flex-col items-start animate-slideIn relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X size={20} />
            </button>

            <p className="text-gray-800 font-medium mb-3">
              Hi there! How can I help you?
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/916203176139"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="tel:+916203176139"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={handleToggle}
          className={`bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
            isOpen ? "animate-bounce" : ""
          }`}
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-in-out forwards;
          }
        `}
      </style>
    </>
  );
}

export default TopChatBot;
