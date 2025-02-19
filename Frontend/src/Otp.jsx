import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(180); // 3 minutes countdown

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e, index) => {
    let value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <>
      <div className="w-full min-h-[100vh] flex items-center justify-center" style={{ background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)" }}>
        <Navbar />
      
        <div className="bg-[#4d0101] p-10 rounded-lg text-center w-[450px] h-[500px] shadow-lg mx-auto flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Enter <span className="text-yellow-400">OTP</span>
          </h2>
          <p className="text-white text-lg mb-6">We have sent OTP on your number</p>
          
          <div className="flex justify-center gap-4 mb-6">
            {otp.map((_, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                className="w-14 h-14 text-3xl font-bold text-center bg-yellow-400 text-black rounded-lg"
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>

          <p className="text-white text-md mb-4">Reset OTP</p>
          <p className="text-white text-lg font-semibold">{formatTime()}</p>

          <button className="w-full mt-8 bg-red-600 text-white font-bold py-3 rounded-lg border border-white hover:bg-red-700 transition">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OTP;