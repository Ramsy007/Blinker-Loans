import React from "react";
import { FaDownload } from "react-icons/fa";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const CreditScore = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/enter-adhar");
  };

  return (
    <>
      
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center p-8 pt-20"
        style={{ background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)" }}
      >
      <Navbar />
        {/* Header Text */}
        <h1 className="text-white text-2xl font-semibold text-center">
          Credit Score powered by our Bureau
        </h1>
        <h2 className="text-yellow-400 text-xl font-bold text-center mb-8">
          Partners <span className="text-yellow-500">EQUIFAX® | CIBIL</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full mt-12">
          {/* Score Card */}
          <div className="bg-[#780000] p-8 rounded-lg w-full md:w-2/5 text-center border border-yellow-500">
            <div className="relative w-full flex justify-center">
              <img src="/credit-score.png" alt="Credit Score" className="w-full max-w-[250px] h-auto" />
            </div>

            <p className="text-yellow-400 text-2xl font-semibold mt-6">Excellent</p>
            <p className="text-white text-base mt-2">As on Feb 9, 2025</p>
            <button className="mt-6 bg-red-600 text-white px-5 py-3 rounded flex items-center gap-3 text-lg cursor-pointer">
              Download Report <FaDownload />
            </button>
          </div>

          {/* Loan Eligibility */}
          <div className="bg-yellow-400 p-8 rounded-lg w-full md:w-3/5 text-black border border-yellow-500 relative">
            <p className="text-xl">Hi, {localStorage.getItem("userName") || "User"}!</p>
            <h2 className="text-2xl font-bold mt-3">Credit Score</h2>
            <p className="text-xl mt-3">You are eligible for maximum  loan amount</p>
            <h1 className="text-4xl font-bold text-red-600">₹10,000</h1>
            <button
              onClick={handleSubmit}
              className="mt-6 bg-red-700 text-white px-5 py-3 rounded text-lg cursor-pointer"
            >
              Begin the next game →
            </button>
            <img src="/flash-head.png" alt="Flash Head" className="absolute -bottom-1 right-1 w-20 sm:w-28 md:w-36 h-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreditScore;
