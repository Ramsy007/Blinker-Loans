const express=require("express");
const router=express.Router();
const axios =require("axios")

require("dotenv").config();

// router.post("/generate-esign", async (req, res) => {
//     try {
//         const { email, mobile, name, location } = req.body; 
//         console.log(email);
       
//         const uniqueId = `Loan_${Date.now()}`; 

//         const response = await axios.post(
//            
//             {
//                 uniqueId: uniqueId,
//                 signers: [{ email, mobile, name, location }],
//                 reason: "Loan Agreement",
//                 templateId: "Loan_Template",
//                 fileName: "Loan_Agreement.pdf",
//                 multiSignerDocId: "1234"
//             },
//             {
//                 headers: {
//                     Authorization: process.env.AUTH_HEADER,
//                     "Content-Type": "application/json"
//                 }
//             }
//         );

//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ error: error.response?.data || error.message });
//     }
// });
module.exports=router;
