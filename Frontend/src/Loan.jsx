import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { FaDownload } from "react-icons/fa";

const Loan = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-[100vh] flex flex-col items-center justify-center p-4"
        style={{
          background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)",
        }}
      >
        <div className="bg-[#58050f] p-6 mt-30 sm:p-8 md:p-10 rounded-xl shadow-lg w-full sm:w-[98%] md:w-[80%] lg:w-[70%] flex flex-col items-center text-center">
          <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold">
            Welcome, John Doe Based On Your CIBIL Score, <br />
            Here’s Your Maximum{" "}
            <span className="text-yellow-400 font-bold">
              Eligible Loan Amount.
            </span>
          </h2>

          <div className="mt-6">
            <p className="text-white text-sm">Loan Amount</p>
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-1">
              ₹ 20,000
            </p>
          </div>

          <button className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-6 sm:px-8 md:px-10 rounded-lg hover:bg-yellow-500 transition cursor-pointer">
            Request Loan
          </button>
        </div>

        <div className="bg-yellow-500 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full sm:w-[98%] md:w-[80%] lg:w-[70%] flex mt-20 relative overflow-hidden">
          <div className="flex flex-col justify-center z-10 w-full">
            <h2 className="text-black text-base sm:text-lg md:text-xl font-semibold">
              If you need a higher loan amount, <br />
              <span className="font-bold text-red-700">
                upload your bank
              </span>{" "}
              statement for further assessment
            </h2>
            <p className="text-black text-sm mt-2">file type (pdf only)</p>
            <button className="w-full sm:w-[50%] md:w-[40%] lg:w-[25%] h-[60px] bg-gradient-to-l from-[#c80d0d] to-[#b10f0f] rounded-lg flex justify-center items-center text-white font-semibold mt-4 cursor-pointer">
              Upload Bank Statement
            </button>
          </div>

          {/* Red semicircle */}
          <div className="absolute right-[-10vw] bottom-[-10vw] w-[30vw] h-[30vw] sm:w-[25vw] sm:h-[25vw] bg-[#c00606] rounded-full z-0" />

          {/* Flash Running Loan Image */}
          <img
            src="/flash-running-loan.png"
            alt="Flash Running Loan"
            className="absolute right-[6vw] bottom-[0vw] w-[20vw] sm:w-[18vw] md:w-[18vw] z-10"
          />
        </div>

        <div className="bg-[#58050f] p-6 sm:p-8 mt-20 mb-20 :p-10 rounded-xl shadow-lg w-full sm:w-[98%] md:w-[80%] lg:w-[70%] flex flex-col items-center text-center text-white text-center shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            Key Fact Statement!
          </h2>
          <div className="flex justify-between text-left text-sm w-full">
            <div>
              <p>• Interest Rate: 12% per annum</p>
              <p>• Processing Fee: 1% of loan amount</p>
              <p>• Prepayment Charges: 2% if closed within 12 months</p>
            </div>
            <div>
              <p>• Loan Amount: ₹10,00,000</p>
              <p>• Monthly EMI: ₹22,244</p>
              <p>• Loan Tenure: 5 Years</p>
            </div>
          </div>
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
            Download Key Fact Statement <FaDownload />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loan;