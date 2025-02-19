const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const twilio = require("twilio");

const router = express.Router();
require("dotenv").config();


const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const JWT_SECRET = process.env.JWT_SECRET;



router.post("/send-otp", async (req, res) => {
    const { phone,panNumber} = req.body;

    console.log(phone);
    

    if (!phone||!panNumber) return res.status(400).json({ message: "invalid credentials" });

    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
        const otpExpires = new Date(Date.now() + 5 * 60 * 1000); 
        console.log(otp);

        // Save OTP in DB
        let user = await User.findOne({ phone });
        if (!user) {
            user = new User({ phone, otp, otpExpires,panNumber });
        } else {
            user.otp = otp;
            user.otpExpires = otpExpires;
        }
        await user.save();

        // Send OTP via Twilio
        await client.messages.create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone,
        });

       

        res.status(200).json({ message: "OTP sent successfully",otp });
    } catch (error) {
        res.status(500).json({ message: "Failed to send OTP", error });
    }
});


router.post("/verify-otp", async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) return res.status(400).json({ message: "Phone and OTP are required" });

    try {
        const user = await User.findOne({ phone });

        if (!user) return res.status(400).json({ message: "User not found" });

        if (user.otp !== otp || user.otpExpires < new Date()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        // OTP verified, generate JWT token
        user.isVerified = true;
        user.otp = null;
        user.otpExpires = null;
        await user.save();

        const token = jwt.sign({ phone: user.phone }, JWT_SECRET, { expiresIn: "7d" });

        res.status(200).json({ message: "OTP verified", token });
    } catch (error) {
        res.status(500).json({ message: "Verification failed", error });
    }
});



module.exports = router;
