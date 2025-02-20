require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const twilio = require("twilio");

const router = express.Router();
require("dotenv").config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const JWT_SECRET = process.env.JWT_SECRET;

// ✅ SEND OTP Route
router.post("/send-otp", async (req, res) => {
    const { phone, panNumber } = req.body;

    if (!phone || !panNumber) return res.status(400).json({ message: "Invalid credentials" });

    const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
    console.log("Sending OTP to:", formattedPhone);

    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpires = new Date(Date.now() + 5 * 60 * 1000); 

        let user = await User.findOne({ phone });
        if (!user) {
            user = new User({ phone, otp, otpExpires, panNumber });
        } else {
            user.otp = otp;
            user.otpExpires = otpExpires;
        }
        await user.save();

        await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: formattedPhone,
        });

        


        res.status(200).json({ message: "OTP sent successfully", otp });
    } catch (error) {
        console.error("Twilio Error:", error);
        res.status(500).json({ message: "Failed to send OTP", error });
    }
});

// VERIFY OTP Route (Add this below send-otp)
router.post("/verify-otp", async (req, res) => {
    const { otp,phone } = req.body;
    // const phone = req.headers["x-user-phone"];  

    if (!otp) return res.status(400).json({ message: "OTP is required." });
      console.log(phone); 
    if (!phone) return res.status(400).json({ message: "Phone number is missing. Try again!" });

    try {
        const user = await User.findOne({ phone });

        if (!user) return res.status(400).json({ message: "User not found." });
        if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP." });
        if (new Date() > user.otpExpires) return res.status(400).json({ message: "OTP has expired." });

        // ✅ OTP match ho gaya -> Reset OTP fields
        user.otp = null;
        user.otpExpires = null;
        await user.save();

        res.status(200).json({ message: "OTP verified successfully!" });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;


