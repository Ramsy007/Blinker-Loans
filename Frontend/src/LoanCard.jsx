import React, { useState } from 'react';

export const LoanCard = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(15);
  const [duration, setDuration] = useState(30);

  // Simple EMI calculation
  const emi = Math.round((amount * (1 + rate / 100)) / duration);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Heading */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#FFCB1E] text-5xl font-bold italic  mb-6 transition-all duration-500 ease-in-out">
  EMI Calculator
</h1>



      
      <div className="w-[60%] h-[601px] bg-white/10 rounded-[10px] border border-white backdrop-blur-[54px] flex">
        
        {/* Left Section */}
        <div className="w-[50%] px-10 py-12 bg-[#440202] border-l border-r-2 border-t-2 border-b-2 border-[#ffd700] flex flex-col justify-center items-start gap-5">
          
          {/* Amount Slider */}
          <div className="w-full">
            <label className="text-[#ffd700] text-lg font-semibold">Amount</label>
            <input
              type="range"
              min="1000"
              max="50000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
            <div className="text-right text-yellow-400 text-sm">₹ {amount.toLocaleString()}</div>
          </div>
          
          {/* Rate Slider */}
          <div className="w-full">
            <label className="text-[#ffd700] text-lg font-semibold">Rate</label>
            <input
              type="range"
              min="5"
              max="30"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
            <div className="text-right text-yellow-400 text-sm">{rate}%</div>
          </div>
          
          {/* Duration Slider */}
          <div className="w-full">
            <label className="text-[#ffd700] text-lg font-semibold">Duration</label>
            <input
              type="range"
              min="7"
              max="365"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
            <div className="text-right text-yellow-400 text-sm">{duration} days</div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-[50%] flex justify-between items-center gap-7 bg-[#550000] p-10">
          {/* Left - Text Content */}
          <div className="flex flex-col justify-center items-start gap-7">
            <div className="text-[#ffd700] text-3xl font-extrabold">Your EMI Will Be</div>
            <div className="text-[#ffd700] text-[40px] font-black">₹ {emi.toLocaleString()}</div>
            <button className="w-[184px] h-11 p-2.5 bg-[#780c00] rounded-[30px] border border-[#ffea7d] text-white text-base font-semibold">
              Ready to Pay
            </button>
          </div>

          {/* Right - Image */}
          <img src="flash-calculator.png" alt="Flash Image" className="w-70 h-auto -ml-7 mt-60" />
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
