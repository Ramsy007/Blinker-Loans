import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { CheckCircle, FileText, PenTool, CreditCard } from "lucide-react";

const steps = [
  {
    label: "Eligibility Check",
    icon: <CheckCircle className="w-5 h-5" />,
    completed: true,
  },
  {
    label: "Loan Approved",
    icon: <CreditCard className="w-5 h-5" />,
    completed: true,
  },
  { label: "KYC", icon: <FileText className="w-5 h-5" />, completed: false },
  { label: "E-Sign", icon: <PenTool className="w-5 h-5" />, completed: false },
  {
    label: "Disbursal",
    icon: <CreditCard className="w-5 h-5" />,
    completed: false,
  },
];

const KYCpage = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([
    "Belthara Road, Balliyan, Uttar Pradesh, 221715",
  ]);
  const [newAddress, setNewAddress] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const currentStepIndex = 2;

  const handleAddressChange = (index, value) => {
    const newAddresses = [...addresses];
    newAddresses[index] = value;
    setAddresses(newAddresses);
  };

  const addNewAddress = () => {
    if (newAddress.trim() !== "") {
      setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
      setNewAddress("");
      setIsAdding(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/enter-adhar");
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('otp1-bg.png')" }}
      >
        <div className="p-10 rounded-xl w-[500px] text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Address Based <span className="text-yellow-400">KYC</span>
          </h2>
          <form onSubmit={handleSubmit}>
            {addresses.map((address, index) => (
              <div key={index} className="mb-6 text-left">
                <label className="text-white block mb-2 text-lg">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => handleAddressChange(index, e.target.value)}
                  className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
                />
              </div>
            ))}
            {isAdding && (
              <div className="mb-6 text-left">
                <label className="text-white block mb-2 text-lg">
                  New Address
                </label>
                <input
                  type="text"
                  placeholder="Enter new address"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="w-full p-3 bg-yellow-400 text-black rounded text-lg"
                />
                <button
                  type="button"
                  onClick={addNewAddress}
                  className="w-full bg-green-500 text-white py-3 rounded mt-2 text-lg hover:bg-green-600 border border-white cursor-pointer"
                >
                  Save Address
                </button>
              </div>
            )}
            {!isAdding && (
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                className="w-full bg-yellow-500 text-black py-3 rounded mt-2 text-lg hover:bg-yellow-600 border border-white cursor-pointer"
              >
                Add New Address
              </button>
            )}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded mt-4 text-lg hover:bg-red-700 border border-white cursor-pointer"
            >
              Next
            </button>
          </form>
        </div>

        {/* Vertical Steps - Modified for responsive design with lines for all steps */}
        <div className="absolute right-2 md:right-6 lg:right-10 top-1/4 flex flex-col items-end space-y-4 md:space-y-6 text-white">
          {steps.map((step, index) => {
            const isLastStep = index === steps.length - 1;

            return (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 relative"
              >
                {/* Step Label - Left side of icon */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  className={`text-xs md:text-sm font-semibold text-right w-16 md:w-20 ${
                    index === currentStepIndex ? "text-yellow-400" : ""
                  }`}
                >
                  {step.label}
                </motion.span>

                {/* Step Indicator with Pulse */}
                <div className="relative">
                  <motion.div
                    className={`relative flex items-center justify-center rounded-full ${
                      step.completed
                        ? "bg-green-600" // Green for completed steps
                        : index === currentStepIndex
                        ? "bg-yellow-400" // Current step in yellow
                        : "bg-gray-700" // Future steps in gray
                    } shadow-md w-10 h-10 md:w-12 md:h-12`}
                  >
                    {/* Ring pulse effect for current step */}
                    {index === currentStepIndex && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute inset-0 border-2 border-yellow-400 rounded-full"
                        style={{ backgroundColor: "transparent" }}
                      ></motion.div>
                    )}
                    <div
                      className={`p-2 rounded-full ${
                        step.completed
                          ? "bg-white text-red-600" // Icon color for completed steps
                          : index === currentStepIndex
                          ? "bg-white text-yellow-400" // Current step icon
                          : "bg-gray-500" // Future step icon
                      }`}
                    >
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Adding horizontal line for ALL steps, including the last one */}

                  <div
                    className={`absolute h-1 w-6 md:w-8 lg:w-10 top-1/2 -translate-y-1/2 -right-6 md:-right-8 lg:-right-10 ${
                      step.completed ? "bg-red-600" : "bg-gray-700"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KYCpage;
