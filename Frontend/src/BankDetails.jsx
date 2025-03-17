import React, { useState } from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import LoanTemp from "./LoanTemp";

const BankDetailsForm = () => {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    bankName: "",
    bankBranch: "",
    accountNumber: "",
    ifsc: "",
    accountType: "Savings",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
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
        <div className="bg-opacity-70 mt-8 p-5 rounded-2xl  max-w-md w-full relative z-10">
          <h1 className="text-3xl font-bold text-white mb-4">Bank Details</h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="accountHolderName"
              placeholder="Account Holder’s Name"
              value={formData.accountHolderName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-yellow-400 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-yellow-400 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="text"
              name="bankBranch"
              placeholder="Bank Branch"
              value={formData.bankBranch}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-yellow-400 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-yellow-400 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="text"
              name="ifsc"
              placeholder="IFSC Code"
              value={formData.ifsc}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-yellow-400 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-yellow-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-xl transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        <LoanTemp />
      </div>
      <Footer />
    </>
  );
};

export default BankDetailsForm;
