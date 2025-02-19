import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col items-center gap-7 mb-[80px]"> {/* Added margin bottom here */}
      {/* Top Row with Two Cards */}
      <div className="flex gap-7">
        {/* First Card with Image & Text */}
        <div className="w-[585px] h-[312px] rounded-[25px] border-3 border-black overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src="/step1.png" alt="Step 1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Second Card */}
        <div className="w-[585px] h-[312px] rounded-[25px] border-3 border-black overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img src="/step2.png" alt="Step 2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Card with 5 Images */}
      <div className="w-[1240px] h-[313px] rounded-[25px] border-2 border-black overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img src="kyc.png" alt="KYC" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Eligibility Image Section */}
      <div className="w-[1240px] h-[425px] rounded-xl border border-white overflow-hidden relative mt-50">
        <img src="/eligibility.png" alt="Eligibility" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      
    </div>
  );
};

export default Steps;
