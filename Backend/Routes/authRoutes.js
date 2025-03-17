const express = require("express");
const { PrismaClient } = require("@prisma/client");
const twilio = require("twilio");

const router = express.Router();
const prisma = new PrismaClient();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
const OTP_EXPIRY_TIME = 5 * 60 * 1000; 

router.post("/send-otp", async (req, res) => {
    const { phone, panNumber } = req.body;

    if (!phone || !panNumber) return res.status(400).json({ message: "Invalid credentials" });

    const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
    console.log("Sending OTP to:", formattedPhone);

    try {
        const otp = generateOTP();
        const otpExpires = new Date(Date.now() + OTP_EXPIRY_TIME);

        let user = await prisma.user.findUnique({ where: { phone } });

        if (!user) {
            user = await prisma.user.create({
                data: { phone, otp, otpExpires, panNumber }
            });
        } else {
            user = await prisma.user.update({
                where: { phone },
                data: { otp, otpExpires }
            });
        }

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

router.post("/resend-otp", async (req, res) => {
    const { phone } = req.body;

    if (!phone) return res.status(400).json({ message: "Phone number is required" });

    const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`;
    console.log("Resending OTP to:", formattedPhone);

    try {
        let user = await prisma.user.findUnique({ where: { phone } });

        if (!user) return res.status(400).json({ message: "User not found" });

        const otp = generateOTP();
        const otpExpires = new Date(Date.now() + OTP_EXPIRY_TIME);

        await prisma.user.update({
            where: { phone },
            data: { otp, otpExpires }
        });

        await client.messages.create({
            body: `Your new OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: formattedPhone,
        });

        res.status(200).json({ message: "OTP resent successfully", otp });
    } catch (error) {
        console.error("Error resending OTP:", error);
        res.status(500).json({ message: "Failed to resend OTP", error });
    }
});

router.post("/verify-otp", async (req, res) => {
    const { otp, phone } = req.body;

    if (!otp) return res.status(400).json({ message: "OTP is required." });
    if (!phone) return res.status(400).json({ message: "Phone number is missing. Try again!" });

    try {
        const user = await prisma.user.findUnique({ where: { phone } });

        if (!user) return res.status(400).json({ message: "User not found." });
        if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP." });
        if (new Date() > user.otpExpires) return res.status(400).json({ message: "OTP has expired." });

        await prisma.user.update({
            where: { phone },
            data: { otp: null, otpExpires: null }
        });

        res.status(200).json({ message: "OTP verified successfully!" });
    } catch (error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;
