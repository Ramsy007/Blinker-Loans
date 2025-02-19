import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const OTP = () => {
  return (
    <>
    <div className="w-full min-h-[100vh] flex items-center justify-center" style={{ background: "radial-gradient(circle, #B20000 0%, #4C0000 100%)" }}></div>
    <Navbar/>

      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-[40vh] bg-[#58050f]/50 rounded-lg" />


    
    <Footer/>
    </>
  );
};

export default OTP;
