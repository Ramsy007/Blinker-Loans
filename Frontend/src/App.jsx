import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Form from "./Form";
import VerifyMobile from "./VerifyMobile";
import  StartKYC  from "./StartKYC";
import Otp from "./Otp";
import PlayerDetails from "./PlayerDetails";
import EnterAdhar from "./EnterAdhar";
import CreditScore from "./CreditScore.jsx";
import Loan from "./Loan.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apply" element={<Form />} />
        {/* Correctly render VerifyMobile component with JSX */}
        <Route path="/verify-mobile" element={<VerifyMobile />} />
        <Route path="/start-kyc" element={<StartKYC />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/player-details" element={<PlayerDetails/>} />
        <Route path="/enter-adhar" element={<EnterAdhar/>} />
        <Route path="/credit-score" element={<CreditScore/>} />
        <Route path="/loan" element={<Loan/>} />
      </Routes>
    </Router>
  );
}

export default App;
