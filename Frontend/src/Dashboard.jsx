import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const LoanEligibilityCard = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen flex items-center justify-center bg-[#4C0000] p-4 ">
      <div className="mt-18 w-full max-w-[1240px] h-auto bg-[#b20000] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center shadow-lg">
        {/* Left Form Section */}
        <div className="w-full md:w-2/3 text-white p-4 md:p-6">
          <h1 className="text-3xl font-bold text-center md:text-left mb-6 text-yellow-400">
            Welcome User
          </h1>
          <div className="space-y-4">
            {[
              { label: "Full name", value: "Mohan lal" },
              { label: "Pan card", value: "XXXXXXXXXXXX" },
              { label: "Address", value: "XYZ" },
              { label: "Email address", value: "Mohanlal123@gmail.com" },
              { label: "Phone number", value: "+91 888 666 8542" },
              { label: "DOB", value: "XX/XX/XXXX" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-semibold">{item.label}</label>
                <input
                  type="text"
                  value={item.value}
                  readOnly
                  className="mt-1 p-3 bg-transparent border border-yellow-400 text-white rounded-md focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Eligibility Card */}
        <div className="w-full md:w-1/3 bg-yellow-400 text-black p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center mt-6 md:mt-0 h-[550px] md:h-[600px] relative overflow-hidden">
          <img src="/credit-score-loan.png" alt="Credit Score" className="w-[75%] max-w-full h-auto mb-4 object-contain md:max-w-[90%]" />
          <p className="text-lg font-semibold text-center">Your Cibil Score <span className="font-bold text-xl">780</span></p>
          <p className="mt-2 text-lg font-semibold text-center">You are eligible for</p>
          <p className="text-3xl font-bold text-center">Rs: 20,000</p>
          <button className="mt-4 w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-800 transition-all">
            Loan process
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoanEligibilityCard;