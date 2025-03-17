import React, { useRef, useState } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const authToken = import.meta.env.VITE_APP_AUTH_TOKEN;
import LoanTemp from './LoanTemp';


const Loan = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/bankStatement/upload-bank-statement", {
        method: "POST",
        headers: {
          "Authorization": authToken,
          
        },
        body: formData,
      });
      
      const result = await response.json();

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert(`Upload failed: ${result.message}`);
      }
    } catch (error) {
      alert("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmitUpload = () => {
    fileInputRef.current.click();
  };
  const handleSubmitStartProcess = () => {
    navigate("/enter-adhar");
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-[100vh] flex flex-col items-center justify-center p-4"
        style={{
          background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)",
        }}
      >
      <div
      className="p-6 mt-30 sm:p-8 md:p-10 rounded-xl w-full sm:w-[98%] md:w-[80%] lg:w-[70%] flex flex-col items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/loan-bg.png')" }}
    >
        
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

          <button onClick={handleSubmitStartProcess}  className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-6 sm:px-8 md:px-10 rounded-lg hover:bg-yellow-500 transition cursor-pointer">
            Request Loan
          </button>
        </div>

        <LoanTemp/>

        <div className="bg-[#58050f] p-6 sm:p-8 mt-20 mb-20 rounded-xl shadow-lg w-full sm:w-[98%] md:w-[80%] lg:w-[70%] flex flex-col items-center text-center text-white">
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
