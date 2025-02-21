import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
