import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center text-white relative overflow-hidden"
      style={{ backgroundImage: "url('https://wallpapers.com/images/featured/the-flash-background-7i5uck673cqp3lla.jpg')" }}

    >
      {/* Flashing Overlay Effect */}
      <div className="absolute inset-0 bg-red-600 opacity-10 mix-blend-overlay animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        
      <div className="mt-18 w-full max-w-[1240px] h-auto rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center ">
        {/* Left Form Section */}
        <div className="w-full md:w-2/3 text-white p-4 md:p-6">
          <h1 className="text-3xl font-bold text-center md:text-left mb-6 text-yellow-400">
            Welcome User
          </h1>
          <div className="space-y-4 bg-[rgba(0,0,0,0.8)] rounded-3xl p-6">
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
                  className="mt-1 p-3 bg-transparent border-3 border-white-400 text-white rounded-md focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Eligibility Card */}
        <div className="w-full md:w-1/3 bg-yellow-400 text-black p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center mt-6 md:mt-14.5 h-[600px] md:h-[590px] relative overflow-hidden">
          <img src="/credit-score-loan.png" alt="Credit Score" className="w-[75%] max-w-full h-auto mb-4 object-contain md:max-w-[90%]" />
          <p className="text-lg font-semibold text-center">Your Cibil Score <span className="font-bold text-xl">780</span></p>
          <p className="mt-2 text-lg font-semibold text-center">You are eligible for</p>
          <p className="text-3xl font-bold text-center">Rs: 10,000</p>
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

export default Dashboard;