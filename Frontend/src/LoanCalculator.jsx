import React from "react";

import cardIcon1 from "/card-icon1.png";
import cardIcon2 from "/card-icon2.png";
import cardIcon3 from "/card-icon3.png";

const LoanCalculator = () => {
  const data = [
    { title: "Monthly EMI", amount: "₹ 5555", icon: cardIcon1 },
    { title: "Total Interest Payable", amount: "₹ 5555", icon: cardIcon2 },
    { title: "Total Loan Cost", amount: "₹ 5555", icon: cardIcon3 },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-900">
      <div className="bg-red-800 p-8 rounded-lg flex gap-6 items-center">
        <div className="grid grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-red-950 p-6 rounded-md text-center text-white">
              <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-2" />
              <div className="text-xl font-bold">{item.amount}</div>
              <div className="text-sm mt-2">{item.title} (₹)</div>
            </div>
          ))}
        </div>
        <img
          src="https://i.imgur.com/6bB8aWQ.png" 
          alt="Flash"
          className="w-40 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LoanCalculator;
