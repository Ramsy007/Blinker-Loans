import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
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
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Disbursed from "./Disbursed";
import Logo from "./Logo";
import LandingPage2 from "./LandingPage2";
import { useState } from "react";
import StartingVideo from "./StartingVideo";
import Address from "./Address";
import Consent from "./Consent";
import AddressGupta from "./AddressGupta";
import AddressTemp from "./AddressTemp";
import BankDetails from "./BankDetails";
import LoanTemp from "./LoanTemp";
import IncreasedAmount from "./IncreasedAmount";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  function handleVideoEnd() {
    setShowIntro(false);
  }

  return (
    <BrowserRouter>
      {showIntro ? (
        <StartingVideo onVideoEnd={handleVideoEnd} />
      ) : (
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
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/disbursed" element={<Disbursed />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/landingpage2" element={<LandingPage2 />} />
          <Route path="/address" element={<Address />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/add2" element={<AddressGupta />} />
          <Route path="/add1" element={<AddressTemp />} />
          <Route path="/bank" element={<BankDetails />} />
          <Route path="/loanTemp" element={<LoanTemp />} />
          <Route path="/inc" element={<IncreasedAmount />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
