import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const OTP = () => {
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
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
        let newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
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

    const phone = localStorage.getItem("phone")?.trim();
    const otpCode = otp.join("");

    if (!phone) {
      setMessage("Phone number is missing. Please try again.");
      setLoading(false);
      return;
    }

    if (otpCode.length !== 6) {
      setMessage("Please enter a valid 6-digit OTP.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/auth/verify-otp", { otp: otpCode, phone });
      setMessage(response.data.message);

      if (response.status === 200) {
        
        localStorage.removeItem("phone");
        navigate("/loan");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error verifying OTP.");
    }

    setLoading(false);
  };

  const handleResendOtp = async () => {
    const storedPhone = localStorage.getItem("phone");

    if (!storedPhone) {
      setMessage("Phone number missing. Request OTP again.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8000/api/auth/verify-otp", { phone: storedPhone.trim() });

      if (response.status === 200) {
        setTimer(180);
        setMessage("OTP Resent Successfully!");
      } else {
        setMessage(response.data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      setMessage("Something went wrong! Try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/otp-background.png')",
        }}
      >
        <Navbar />
        <div className=" p-10 rounded-lg text-center w-[90%] max-w-[450px] h-[500px] flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Enter <span className="text-yellow-400">OTP</span>
          </h2>
          <p className="text-white text-lg mb-6">
            We have sent OTP to your number
          </p>

          <div className="flex justify-center gap-4 mb-6">
            {otp.map((_, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                className="w-12 h-12 sm:w-14 sm:h-14 text-2xl sm:text-3xl font-bold text-center bg-yellow-400 text-black rounded-lg"
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

          <p className="text-white text-md mt-4 cursor-pointer" onClick={handleResendOtp}>
            Resend OTP
          </p>
          <p className="text-white text-lg font-semibold">{formatTime()}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OTP;
