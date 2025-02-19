import React, { useState } from "react";
import "./FlashLoanCard.css"; // External CSS for styling
import flashPose from "/flash-calculator.png"; // Import the image

const FlashLoanCard = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(15);
  const [duration, setDuration] = useState(30);

  // Simple EMI calculation (not exact, just for UI purpose)
  const emi = Math.round((amount * (1 + rate / 100)) / duration);

  return (
    <div className="flex justify-center items-center  ">
    
      <div className="bg-red-900 p-8 rounded-lg flex gap-6 items-center  w-[1240px] h-[501px] max-w-4xl mt-[100px] relative ">
        {/* Left Section */}
        <div className="flex-1 p-6 bg-red-800 rounded-lg">
          
          
          {/* Amount Slider */}
          <div className="mb-4">
            <label className="text-yellow-300 text-lg">Amount</label>
            <input
              type="range"
              min="1000"
              max="50000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="slider"
              style={{
                background: `linear-gradient(to right, #4E0C07 ${(amount - 1000) / 49000 * 100}%, #FFD700 ${(amount - 1000) / 49000 * 100}%)`,
              }}
            />
            <span className="text-yellow-300 float-right">₹ {amount.toLocaleString()}</span>
          </div>
          
          {/* Rate Slider */}
          <div className="mb-4">
            <label className="text-yellow-300 text-lg">Rate</label>
            <input
              type="range"
              min="5"
              max="30"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="slider"
              style={{
                background: `linear-gradient(to right, #4E0C07 ${(rate - 5) / 25 * 100}%, #FFD700 ${(rate - 5) / 25 * 100}%)`,
              }}
            />
            <span className="text-yellow-300 float-right">{rate}%</span>
          </div>
          
          {/* Duration Slider */}
          <div>
            <label className="text-yellow-300 text-lg">Duration</label>
            <input
              type="range"
              min="7"
              max="60"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="slider"
              style={{
                background: `linear-gradient(to right, #4E0C07 ${(duration - 7) / 53 * 100}%, #FFD700 ${(duration - 7) / 53 * 100}%)`,
              }}
            />
            <span className="text-yellow-300 float-right">{duration} days</span>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex-1 text-left relative pl-6  bg-[#440202] w-full h-[501px]">
          <p className="text-yellow-300 text-lg">Your EMI Will Be</p>
          <h2 className="text-yellow-400 text-4xl font-bold">₹ {emi.toLocaleString()}</h2>
          <button className="mt-4 bg-yellow-500 text-red-900 px-6 py-2 rounded-full font-semibold">Ready to Pay</button>
          
          {/* Flash Image */}
          <img src={flashPose} alt="Flash Pose" className="absolute top-1/2 -right-30 transform -translate-y-1/2 w-65 mr-22" />
        </div>
      </div>
    </div>
  );
};

export default FlashLoanCard;
