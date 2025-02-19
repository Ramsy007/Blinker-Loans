import React from "react";
import { useNavigate } from "react-router-dom";

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
      <nav className="absolute top-0 left-0 w-full p-4 flex justify-end items-center text-white px-10"
        style={{
          background: "rgba(244, 244, 244, 0.29)",
          backdropFilter: "blur(7.4px)",
        }}
      >
        <div className="flex space-x-6 mr-6">
          <a href="#" className="flex w-[159px] h-[46px] p-[10px] justify-center items-center gap-[10px] hover:underline">
            Home
          </a>
          <a href="#" className="flex w-[159px] h-[46px] p-[10px] justify-center items-center gap-[10px] hover:underline">
            About Us
          </a>
          <a href="#" className="flex w-[159px] h-[46px] p-[10px] justify-center items-center gap-[10px] hover:underline">
            Contact Us
          </a>
        </div>
        <button className="text-white font-semibold"
          style={{
            borderRadius: "100px",
            border: "1px solid #FFC779",
            background: "linear-gradient(90deg, #900 0%, #A01626 100%)",
            display: "flex",
            width: "159px",
            height: "46px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          RePayment
        </button>
      </nav>

      {/* Hero Section */}
      <div className="absolute top-1/3 left-16 text-white">
        <h1 className="text-6xl font-extrabold italic text-yellow-300 drop-shadow-lg">
          Blinker Loans
        </h1>
        <p className="text-3xl font-semibold italic mt-4 tracking-wide">
  <span className="text-white">Loan in a </span>
  <span className="text-yellow-300"> Flash!</span>
</p>

        <button
          onClick={() => navigate("/start-kyc")} 
          className="mt-6 flex w-[296px] h-[86px] p-[10px] flex-col justify-center items-center gap-[10px] flex-shrink-0"
          style={{
            borderRadius: "50px",
            border: "1px solid #ADADAD",
            background: "#790C00",
            fontFamily: "SF Pro Display",
            fontSize: "28px",
            fontStyle: "italic",
            fontWeight: "800",
            lineHeight: "normal",
            letterSpacing: "1.4px",
            cursor: "pointer",
          }}
        >
          Apply Now
        </button>
      </div>

      {/* Image Section */}
      <div className="absolute right-10"
        style={{
          width: "800px",
          height: "672px",
          aspectRatio: "245 / 206",
          background: "url(/flash-running.png) no-repeat",
          backgroundSize: "cover",
          top: "160px",
        }}
      />
    </div>
  );
};

export default Home;
