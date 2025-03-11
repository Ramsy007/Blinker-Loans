import React, { useState } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

const EnterAdhar = () => {
  const navigate = useNavigate();
  const [adhar, setAdhar] = useState("");
  const [email, setEmail] = useState("");
  const [adharError, setAdharError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const adharRegex = /^[0-9]{12}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdharError("");
    setEmailError("");

    if (!adharRegex.test(adhar)) {
      setAdharError("Aadhar number must be exactly 12 digits.");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/ekyc/initiate-kyc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: adhar }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/adharotp");
      } else {
        alert(data.error || "Failed to initiate KYC.");
      }
    } catch (error) {
      console.error("Error initiating KYC:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/enter-adhar-bg.png')" }}
      >
        <Navbar />
        <div className="p-10 rounded-lg text-center w-[90%] max-w-[450px] h-[500px] flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Enter Aadhar <span className="text-yellow-400">Number</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 text-left">
              <label className="text-white block mb-2 text-lg">Aadhar Number</label>
              <input
                type="text"
                placeholder="XXXX-XXXX-XXXX"
                value={adhar}
                onChange={(e) => setAdhar(e.target.value)}
                className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
              />
              {adharError && <p className="text-red-500 text-sm">{adharError}</p>}
            </div>
            <div className="mb-6 text-left">
              <label className="text-white block mb-2 text-lg">Email Id</label>
              <input
                type="email"
                placeholder="Enter mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg hover:bg-red-700 border border-white cursor-pointer flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EnterAdhar;