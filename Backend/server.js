const express =require("express");
const {connectDb}=require("./config/database")
const cors =require("cors")

const cookieParser = require("cookie-parser");
const authRouter=require("./Routes/authRoutes")
const bodyparser=require('body-parser')
const esignRouter=require("./Routes/e-signRoutes")
const ekyc=require("./Routes/kyc")
const bankStatementAnalysis=require("./Routes/bankstatement")
const fileUpload = require('express-fileupload');

require("dotenv").config();
 const app=express();
 app.use(cors({
 }));

 app.get("/",(req,res)=>{
     res.send("hii from server")
 })
 app.use(express.json());
 app.use(cookieParser())
 app.use(express.urlencoded({extended:true}))
 app.use(bodyparser.json());
 app.use(fileUpload());

 app.use("/",authRouter);
 app.use("/",esignRouter);
 app.use("/",ekyc);
 app.use("/",bankStatementAnalysis)

 

  
  
  connectDb ()
  .then(()=>{
    console.log("database connection succesfully");
    app.listen(4000,()=>{
      console.log("server is running on  port 4000")
   })
  })
  .catch((err)=>{
   console.error("database cannot be connected!")
  });
 
 

 