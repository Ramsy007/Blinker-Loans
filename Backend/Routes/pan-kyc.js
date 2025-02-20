const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/validate-pan", async (req, res) => {
  try {
    const { pan } = req.body;
    if (!pan) {
      return res.status(400).json({ error: "PAN number is required" });
    }

    const requestData = {
      client_ref_num: "abcd1234",
      pan: pan,
    };

    console.log("pan in backend: ", pan);

    const PAN_API_URL = process.env.PAN_API_URL;
    const AUTH_HEADER= process.env.AUTH_HEADER;
    
    console.log("url in backend: ", PAN_API_URL);
    console.log("auth in bacend: ", AUTH_HEADER);

    const response = await axios.post(PAN_API_URL, requestData, {
        headers: { 
          "Content-Type": "application/json",
          "Authorization": AUTH_HEADER
        }
      });
      
    console.log("hi from backend");
    console.log("response: ", response);

    if (response.data && response.data.result) {
      const user = {
        name: response.data.result.fullname || "Unknown",
      };
      return res.json({ success: true, user });
    } else {
      return res.status(500).json({ error: "Invalid response from PAN API" });
    }
  } catch (error) {
    console.error("Error validating PAN:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
