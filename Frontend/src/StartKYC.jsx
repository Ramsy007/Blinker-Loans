import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import Consent from "./Consent"; // Import the Consent component

const StartKYC = () => {
  const navigate = useNavigate();
  const [pan, setPan] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showConsent, setShowConsent] = useState(false); // To show consent popup

  const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!validatePAN(pan)) {
      newErrors.pan = "Invalid PAN format (ABCDE1234F).";
    }
    if (!validatePhone(phone)) {
      newErrors.phone = "Invalid phone number (must be 10 digits).";
    }
    if (!agree) {
      newErrors.agree = "Please agree to the T&C.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const panResponse = await fetch("http://localhost:8000/api/Okyc/validate-pan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pan }),
        });

        const panData = await panResponse.json();

        if (!panResponse.ok) {
          throw new Error(panData.error || "PAN verification failed.");
        }

        const userName = panData.user?.name || "Unknown";

        localStorage.setItem("phone", phone);
        localStorage.setItem("userName", userName);
        console.log(userName);

        const response = await fetch("http://localhost:8000/api/auth/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone, panNumber: pan }),
        });

        const data = await response.json();
        console.log("DATA AT FRONTEND  ", data);
        setLoading(false);

        if (response.ok) {
          navigate("/Otp");
        } else {
          alert(data.message || "Failed to send OTP.");
        }
      } catch (error) {
        setLoading(false);
        alert("Something went wrong! Check console for details.");
        console.error("Error sending OTP:", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Show Consent card when showConsent is true */}
      {showConsent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Consent
            onAgree={() => {
              setAgree(true);
              setShowConsent(false);
            }}
            onClose={() => setShowConsent(false)}
          />
        </div>
      )}
      
      <div
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/start-kyc-bg.png')",
        }}
      >
        <div className="p-10 rounded-xl shadow-lg w-[500px] text-center">
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
            <div className="mb-6 text-left flex items-center">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={() => setShowConsent(true)} // Show consent pop-up
                className="mr-2"
              />
              <label htmlFor="agree" className="text-white text-lg">
                I agree to Blinkr Loan's <span className="text-yellow-400">T&C</span>
              </label>
            </div>
            {errors.agree && <p className="text-red-500 text-sm mb-4">{errors.agree}</p>}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg hover:bg-red-700 border border-white cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default StartKYC;
