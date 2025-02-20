const express = require("express");
const router = express.Router();
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

  let transactionId;
  let fwdp;
  let codeVerifier;

router.post("/initiate-kyc", async (req, res) => {
    const {uid} = req.body;
    
    console.log("Received Request Body:", req.body);

    if (!uid) {
        return res.status(400).json({ message: "uniqueId and uid are required" });
    }
    const uniqueId = uuidv4();


    try {
        
        const url=process.env.INITIATE_KYC;
        console.log(url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Authorization":process.env.AUTH_HEADER 
            },
            body: JSON.stringify({ uniqueId, uid })
        });

        // Parse response
        const responseData = await response.json();
        
         transactionId = responseData?.model?.transactionId;
         fwdp = responseData?.model?.fwdp;
         codeVerifier = responseData?.model?.codeVerifier;
        //  console.log(transactionId)
        //  console.log(fwdp)
        //  console.log(codeVerifier)




        

        console.log("Digitap API Response:", responseData);
        res.status(200).json({ message: "OTP Sent", data: responseData });

    } catch (error) {
        console.error("❌ Error in API Call:", error.message);
        res.status(500).json({ error: error.message });
    }
});


router.post("/submit-otp",async(req,res)=>{
    const {otp}=req.body;
    if(!otp){
        return res.status(400).json({ message: "otp is required" }); 
    }
    let shareCode =5678;
    
    try{
       
        const url= process.env.SUBMIT_OTP_KYC;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Authorization":process.env.AUTH_HEADER 
            },
            body: JSON.stringify({ shareCode,otp,transactionId,fwdp,codeVerifier,validateXml:true})
        });
        const responseData = await response.json();
        res.status(200).json({ message: "OTP Sent", data: responseData });


    }
    catch(err){
        res.status(500).json({ error: err.message });
    }




});

router.post("/resend-otp",async(req,res)=>{
    const {uid} = req.body;

    console.log("Received Request Body:", req.body);
    console.log(transactionId);
    console.log(fwdp);

    if (!uid) {
        return res.status(400).json({ message: "uniqueId and uid are required" });
    }
    const uniqueId = uuidv4();
    try{
         const url="https://api.digitap.ai/ent/v3/kyc/resend-otp"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Authorization":process.env.AUTH_HEADER 
            },
            body: JSON.stringify({ uniqueId,uid,transactionId,fwdp})
        });
        const responseData = await response.json();
        res.status(200).json({ message: "OTP Sent", data: responseData });
    }
    catch(err){
         res.send(err.message);
    }

})

module.exports = router;
