import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import backgroundImage from "/otp1-bg.png"; 

const AdharOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(180);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      let newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    setMessage("");
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setMessage("Please enter a valid 6-digit OTP.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/ekyc/submit-otp", { otp: otpCode });
      if (response.status === 200) {
        alert("OTP Verified Successfully!");
        navigate("/credit-score");
      }
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error verifying OTP.");
    }
    setLoading(false);
  };

  return (
    <>
      <div
        className="w-full min-h-[100vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <div className="p-10 rounded-lg text-center w-[450px] h-[500px]  mx-auto flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Enter <span className="text-yellow-400">OTP</span>
          </h2>
          <p className="text-white text-lg mb-6">We have sent OTP to your number</p>
          <div className="flex justify-center gap-4 mb-6">
            {otp.map((_, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                className="w-14 h-14 text-3xl font-bold text-center bg-yellow-400 text-black rounded-lg"
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          {message && <p className="text-red-500 font-semibold">{message}</p>}
          <button
            onClick={handleVerifyOTP}
            className="w-full mt-8 bg-red-600 text-white font-bold py-3 rounded-lg border border-white hover:bg-red-700 transition cursor-pointer"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Submit"}
          </button>
          <p className="text-white text-md mt-4 cursor-pointer">Resend OTP</p>
          <p className="text-white text-lg font-semibold">{formatTime()}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdharOTP;
