import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, #B20000 0%, #4C0000 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-red-700"
        style={{
          background: "rgba(244, 244, 244, 0.29)",
          backdropFilter: "blur(7.4px)",
        }}
      >
        <img
          src="/home-bg.png"
          alt="Flash Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="absolute top-1/4 left-4 md:left-16 text-white text-center md:text-left w-full">
        <h1 className="text-transparent bg-gradient-to-b from-[#ffffff] to-[#ffcb1e] bg-clip-text text-4xl sm:text-5xl md:text-[85px] font-black tracking-wide flex items-center justify-center md:justify-start">
          Blinker
          <img src="/strike.png" alt="Icon" className="w-12 sm:w-16 md:w-[80px] h-12 sm:h-16 md:h-[80px] mx-2 md:mx-4" />
          Loans
        </h1>

        <p className="text-lg sm:text-xl md:text-3xl font-semibold italic mt-2 md:mt-4 tracking-wide">
          <span className="text-white">Loan in a </span>
          <span className="text-yellow-300"> Flash!</span>
        </p>

        <button
          onClick={() => navigate("/start-kyc")}
          className="cursor-pointer bg text-amber-200 mt-4 sm:mt-6 md:mt-8 px-6 py-3 md:w-[296px] md:h-[86px] text-lg sm:text-xl md:text-2xl font-extrabold italic"
          style={{
            borderRadius: "50px",
            border: "1px solid #ADADAD",
            background: "#790C00",
          }}
        >
          Apply Now
        </button>
      </div>

      {/* Image Section */}
      <div className="absolute right-4 md:right-10 top-[60%] sm:top-[46%] md:top-[10%] transform md:transform-none flex justify-center md:justify-end w-full md:w-auto">
        <img
          src="/flash-running.png"
          alt="Flash Character"
          className="w-3/4 sm:w-[600px] md:w-[800px] h-auto max-w-[800px] object-contain"
        />
      </div>
    </div>
  );
};

export default Home;