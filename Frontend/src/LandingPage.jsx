import React from "react";
import { LoanCard } from "./LoanCard";
import Home from "./Home";
import Steps from "./Steps";
import Footer from "./Footer";
import EMIBox from "./EMIBox";


const LandingPage = () => {
  return (
    <div className="w-full h-[2270px] bg-[radial-gradient(50%_50%_at_50%_50%,#B20000_0%,#4C0000_100%)]">
    
    <Home/>
    
    <Steps/>
    <Footer/>

    </div>
  );
};

export default LandingPage;
