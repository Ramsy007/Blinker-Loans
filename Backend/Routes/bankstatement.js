const express = require("express");
// const cloudinary = require("cloudinary").v2;
// const fs = require("fs");
// const { cloudinaryFileUploader } = require("../Middlewares/fileUploader");
const axios=require("axios");
const https = require('https');

// const FormData = require("form-data");

const router = express.Router();

// // CARTBI API details

// const AUTH_TOKEN = "API://ZA86NPP9OxWtsZag8sLwkymwnmMuk6XxEJ1LmZCT4GEY/7glhJhunUJvkL6/FlkD";

// router.post("/upload-bank-statement", cloudinaryFileUploader.single("file"), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: "No file uploaded" });
//         }

//         const filePath = req.file.path;
//         console.log(filePath);

//         // Upload file to Cloudinary
//         const cloudinaryResponse = await cloudinary.uploader.upload(filePath, {
//             folder: "uploads", 
//             resource_type: "auto", 
           
//         });
//         // console.log(cloudinaryResponse.secure_url)
       
//         const pdfUrl = cloudinaryResponse.secure_url;

        
//         const response = await axios({
//             method: 'get',
//             url: pdfUrl,
//             responseType: 'stream',
//             httpsAgent: new https.Agent({ rejectUnauthorized: false }), // Optional: Ignore SSL issues
//           });
      
//           // Prepare form data
//           const formData = new FormData();
//           formData.append('file', response.data, 'sample.pdf');
      
//           // Upload to CART API
//           const uploadResponse = await axios.post(CARTBI_UPLOAD_URL, formData, {
//             headers: {
//               'auth-Token': AUTH_TOKEN,
//               ...formData.getHeaders(), // Include form-data headers
//             },
//           });
       
//         // const uploadData = await uploadResponse.json();
//         console.log(uploadResponse);
//         if (uploadResponse.error) {
//             return res.status(400).json({ error: "File upload failed", details: uploadResponse });
//         }

//         const docId = uploadResponse.data.docId;
//         console.log(uploadResponse.data);
//         const responsee = await axios.post(CARTBI_DOWNLOAD_URL, docId, {
//             headers: {
//               "auth-token": AUTH_TOKEN, // Authentication header
//               "Content-Type": "text/plain", // Ensure correct content type
//             },
//           });
          
//           console.log("✅ Download Data:", responsee.data);
      
         
      
//           return res.status(200).json({
//             message: "Bank statement processed successfully",
//             data: responsee.data,
//           });
//         } catch (error) {
//           console.error("❌ Error processing bank statement:", error.message);
//           return res.status(500).json({
//             error: "Internal Server Error",
//             details: error.response ? error.response.data : error.message,
//           });
//         }
//       });

// module.exports = router;
// @ts-nocheck

const { uploadFileToS3 } = require("../Middlewares/fileUploader");
const FormData = require('form-data');


const User = require("../Models/user");
const CARTBI_UPLOAD_URL = "https://cartbi.com/api/upload";
const CARTBI_DOWNLOAD_URL = "https://cartbi.com/api/downloadFile";
require("dotenv").config();


const estimatedSalary = (data) => {
    let salary;
    if (data.data[0].salary !== null) {
        const salaries = data.data[0].salary.map(item => item.totalSalary);
        const minSalary = Math.min(...salaries);
        salary = minSalary.toString();
    } else {
        salary = data.data[0].recurringIncome[0].recurringTransaction[0].amount;
    }
    return salary;
};


const agent = new https.Agent({
  rejectUnauthorized: false, // Ignore SSL issues (use only for testing)
  keepAlive: true,           // Keep connection alive
});




const uploadBsaCartApiInitiate = async (file) => {
  try {
      //  console.log(file);
      
      const uploadedFile = file;
      const form = new FormData();
      // console.log(uploadedFile.data);


      // Append file
      form.append('file', uploadedFile.data, {
          filename: uploadedFile.name,
          contentType: uploadedFile.mimetype
      });

     
      const metadata = {
          password: "",
          bank: "Other",
          name: "LoanApp123",
          productType: "Salaried"
      };
      form.append('metadata', JSON.stringify(metadata));

     
      const documentDetails = [{
          groupCompany: "",
          accountNumber: "",
          accountType: "",
          internal: "true",
          odCclimit: 50000,
          organizationName: "employerName"
      }];
      form.append('documentDetails', JSON.stringify(documentDetails));

      // Upload to CARTBI API
      console.log("api_auth",process.env.CARTAPI_AUTH)
      const response = await fetch("https://cartbi.com/api/upload", {
        method: 'POST',
        headers: {
          'auth-Token': process.env.CARTAPI_AUTH,
          ...form.getHeaders(),
        },
        body: form.getBuffer(),
       
      });
        console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
     return responseData
     

  } catch (e) {
      console.error('Error in uploadBsaCartApiInitiate:', e);
      return;
  }
};


const downloadBsaCartApi = async (docId) => {
    try {
        const response = await fetch(CARTBI_DOWNLOAD_URL, {
            method: 'POST',
            headers: {
                'auth-Token': process.env.CARTAPI_AUTH,
                'Content-Type': 'text/plain'
            },
            body: docId
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let responseData = await response.json();

        if (responseData.data === null) {
            await new Promise(resolve => setTimeout(resolve, 5000));
            responseData = await downloadBsaCartApi(docId);
        }

        return responseData;

    } catch (e) {
        console.log(e);
        return;
    }
};

router.post("/upload-bank-statement",async(req,res)=>{
    try {
       console.log("hii");
        const bucketName = process.env.AWS_S3_BUCKET;
        // console.log(req);

        if (req.files.file.name) {
            // console.log(req.files.file);

            const apiUploadResponse = await uploadBsaCartApiInitiate(req.files.file);
            console.log("uploadResponse ----> ", apiUploadResponse);

            if (!apiUploadResponse) {
                res.status(500).json({ message: 'Internal server error, Could not upload file!!!' });
                return;
            }

            const result = await uploadFileToS3(req.files.file, bucketName);

            const docId = apiUploadResponse.docId;
            const downloadResponse = await downloadBsaCartApi(docId);

            const estimatedSalaryValue = estimatedSalary(downloadResponse);

            res.status(200).json({
                message: 'File uploaded successfully',
                estimatedSalary: estimatedSalaryValue
            });
            return;
        }

    } catch (e) {
        console.error('Error in UploadFile', e);
        res.status(500).json({ message: 'Internal server error, Could not upload file!!!' });
    }
});

module.exports =router;

 