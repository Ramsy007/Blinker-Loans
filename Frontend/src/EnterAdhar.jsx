import React, { useState } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const EnterAdhar = () => {
  // State variables for form inputs and errors
  const [adhar, setAdhar] = useState("");
  const [email, setEmail] = useState("");
  const [adharError, setAdharError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Aadhar validation regex (must be exactly 12 digits)
  const adharRegex = /^[0-9]{12}$/;

  // Email validation regex (basic email format validation)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setAdharError("");
    setEmailError("");

    // Validate Aadhar
    if (!adharRegex.test(adhar)) {
      setAdharError("Aadhar number must be exactly 12 digits.");
    }

    // Validate Email
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    }

    // Proceed with submission if no errors
    if (adharRegex.test(adhar) && emailRegex.test(email)) {
      alert("Form submitted successfully!");
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

export default EnterAdhar;
