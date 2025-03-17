import React from "react";
import DownLoadCredit from "./DownloadCredit.jsx";

const Steps = () => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-7 mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-10 sm:mt-16 md:mt-20 px-4 sm:px-8 lg:px-16">
      {/* Top Row with Two Cards */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-7 w-full">
        {/* First Card with Image */}
        <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border-2 sm:border-3 border-black overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="/step1.png"
            alt="Step 1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Second Card with Image */}
        <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border-2 sm:border-3 border-black overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="/step2.png"
            alt="Step 2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Card with Video */}
      <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl border-2 border-black overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="w-full h-full">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./video/kyc_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Eligibility Image Section */}
      <div className="w-full rounded-lg sm:rounded-xl border border-white overflow-hidden relative mt-6 sm:mt-8 md:mt-10">
        <DownLoadCredit />
      </div>
    </div>
  );
};

export default Steps;