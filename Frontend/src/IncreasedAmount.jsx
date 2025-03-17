import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IncreasedAmount = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [lightning, setLightning] = useState(false);

  useEffect(() => {
    // Make the card appear after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    // Lightning animation effect
    const lightningTimer = setInterval(() => {
      setLightning((prev) => !prev);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(lightningTimer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-64">
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ${
          visible ? "scale-100" : "scale-0"
        }`}
        style={{
          width: "320px",
          background:
            "linear-gradient(135deg, #dc0000 0%, #ff0000 40%, #ffcc00 100%)",
          border: "3px solid #ffcc00",
        }}
      >
        {/* Lightning bolt accents */}
        <div
          className={`absolute top-0 right-0 w-16 h-16 ${
            lightning ? "opacity-70" : "opacity-30"
          } transition-opacity duration-200`}
        >
          <svg viewBox="0 0 24 24" fill="#fff">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.95-.45-.79-1l3.29-12c.14-.53.69-.53.84 0l1.14 4H19c.55 0 .7.45.35.9l-7 7c-.33.33-.1.6.35.6H16c.55 0 .7.45.35.9L11 21z" />
          </svg>
        </div>

        <div
          className={`absolute bottom-0 left-0 w-12 h-12 rotate-180 ${
            lightning ? "opacity-30" : "opacity-70"
          } transition-opacity duration-200`}
        >
          <svg viewBox="0 0 24 24" fill="#fff">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.95-.45-.79-1l3.29-12c.14-.53.69-.53.84 0l1.14 4H19c.55 0 .7.45.35.9l-7 7c-.33.33-.1.6.35.6H16c.55 0 .7.45.35.9L11 21z" />
          </svg>
        </div>

        {/* Message content */}
        <div className="p-6 text-center">
          <h2
            className="text-xl font-bold text-white mb-2 shadow-sm"
            style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
          >
            Congratulations!!
          </h2>

          <p className="text-white font-medium mb-4">
            You are now eligible for an amount of
          </p>

          <div className="flex justify-center items-center mb-4">
            <span
              className="text-3xl font-bold text-white"
              style={{ textShadow: "0 0 10px rgba(255,255,255,0.7)" }}
            >
              ₹50,000
            </span>
          </div>

          <button
            onClick={() => navigate("/enter-adhar")}
            className="cursor-pointer mt-2 bg-white text-red-600 hover:bg-yellow-100 font-bold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
          >
            Request Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncreasedAmount;
