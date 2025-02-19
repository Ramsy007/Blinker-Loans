import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const StartKYC = () => {
  const navigate = useNavigate(); 
  const [pan, setPan] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validatePAN(pan)) {
      newErrors.pan = "Invalid PAN format (ABCDE1234F).";
    }
    if (!validatePhone(phone)) {
      newErrors.phone = "Invalid phone number (must be 10 digits).";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      navigate("/Otp"); // Redirect to the OTP page
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-screen flex items-center justify-center"
        style={{ background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)" }}
      >
        <div className="bg-[#58050f] p-10 rounded-xl shadow-lg w-[500px] text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Start Your <span className="text-yellow-400">KYC</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 text-left">
              <label className="text-white block mb-2 text-lg">PAN Card</label>
              <input
                type="text"
                placeholder="ABCDE1234F"
                value={pan}
                onChange={(e) => setPan(e.target.value.toUpperCase())}
                className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
              />
              {errors.pan && <p className="text-red-500 text-sm">{errors.pan}</p>}
            </div>
            <div className="mb-6 text-left">
              <label className="text-white block mb-2 text-lg">Phone Number</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg hover:bg-red-700 border border-white cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StartKYC;
