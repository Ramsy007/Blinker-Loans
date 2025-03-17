import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const authToken = import.meta.env.VITE_APP_AUTH_TOKEN;


const LoanTemp = () => {
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
        <div className="bg-yellow-500 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full sm:w-[98%] md:w-[80%] lg:w-[70%] flex mt-20 relative overflow-hidden">
          <div className="flex flex-col justify-center z-10 w-full">
            <h2 className="text-black text-base sm:text-lg md:text-xl font-semibold">
              If you need a higher loan amount, <br />
              <span className="font-bold text-red-700">
                upload your bank
              </span>{" "}
              statement for further assessment
            </h2>
            <p className="text-black text-sm mt-2">File type (PDF only)</p>
            <button
              onClick={handleSubmitUpload}
              className="w-full sm:w-[50%] md:w-[40%] lg:w-[25%] h-[60px] bg-gradient-to-l from-[#c80d0d] to-[#b10f0f] rounded-lg flex justify-center items-center text-white font-semibold mt-4 cursor-pointer"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload Bank Statement"}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="application/pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <div className="absolute right-[-10vw] bottom-[-10vw] w-[30vw] h-[30vw] sm:w-[25vw] sm:h-[25vw] bg-[#c00606] rounded-full z-0" />
          <img
            src="/flash-running-loan.png"
            alt="Flash Running Loan"
            className="absolute right-[6vw] bottom-[0vw] w-[20vw] sm:w-[18vw] md:w-[18vw] z-10"
          />
        </div>
    </>
  );
};

export default LoanTemp;
