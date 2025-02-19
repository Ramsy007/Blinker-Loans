import React from "react";

const EMIBox = () => {
  return (
    <div className="w-[1240px] h-[370px] rounded-[10px] border border-white overflow-hidden relative mx-auto mt-[50px] mb-[100px] flex justify-center items-center">
      <img src="/emi.png" alt="EMI" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Flash EMI Image on the Left */}
      <img src="/flash-emi.png" alt="Flash EMI" className="absolute left-0 top-0 w-[300px] h-auto object-contain mt-17 " />
    </div>
  );
};

export default EMIBox;
