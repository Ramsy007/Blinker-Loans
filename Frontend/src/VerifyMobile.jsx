import React, { useState } from "react";
import "./VerifyMobile.css"; // Import CSS file

const VerifyMobile = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="verify-container">
      <img src="/finger.png" alt="OTP Verification" className="otp-image" />
      <h2>Verify Mobile</h2>

      <div className="otp-input-container">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <div key={index} className="otp-box"></div>
          ))}
      </div>

      <p className="resend-text">Resend</p>

      {/* Checkbox Section */}
      <label className="checkbox-container">
        <div
          className={`custom-checkbox ${isChecked ? "checked" : ""}`}
          onClick={() => setIsChecked(!isChecked)}
        >
          <input type="checkbox" checked={isChecked} readOnly />
        </div>
        <span className="terms-text">
          I agree to Blinkr Loan’ <strong>Terms & Conditions</strong>
        </span>
      </label>

      <button className="submit-button">Submit</button>
    </div>
  );
};

export default VerifyMobile;
