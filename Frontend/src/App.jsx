import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Form from "./Form";
import VerifyMobile from "./VerifyMobile";
import StartKYC from "./StartKYC";
import Otp from "./Otp";
import PlayerDetails from "./PlayerDetails";
import EnterAdhar from "./EnterAdhar";
import CreditScore from "./CreditScore";
import Loan from "./Loan";
import AdharOTP from "./AdharOTP";
import Dashboard from "./Dashboard";
import Temps from "./Temps";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import AboutUs3 from "./AboutUs3";
import ContactUs from "./ContactUs";
import Disbursed from "./Disbursed";
import Disbursed2 from "./Disbursed2";
import Logo from "./Logo";
import LandingPage2 from "./LandingPage2";
import { useState } from "react";
import StartingVideo from "./StartingVideo";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  function handleVideoEnd(){
    setShowIntro(false);
  }

  return (
    <BrowserRouter>
    {showIntro ? (<StartingVideo onVideoEnd={handleVideoEnd}/>)
     : 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apply" element={<Form />} />
        <Route path="/verify-mobile" element={<VerifyMobile />} />
        <Route path="/start-kyc" element={<StartKYC />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/player-details" element={<PlayerDetails />} />
        <Route path="/enter-adhar" element={<EnterAdhar />} />
        <Route path="/credit-score" element={<CreditScore />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/adharotp" element={<AdharOTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/temps" element={<Temps />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus2" element={<AboutUs2 />} />
        <Route path="/aboutus3" element={<AboutUs3 />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/disbursed" element={<Disbursed />} />
        <Route path="/disbursed2" element={<Disbursed2 />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/landingpage2" element={<LandingPage2 />} />
      </Routes>
  }
    </BrowserRouter>
  );
}

export default App;
