const express =require("express");
const {connectDb}=require("./config/database")

const cookieParser = require("cookie-parser");
const authRouter=require("./Routes/authRoutes")
const bodyparser=require('body-parser')
const esignRouter=require("./Routes/e-signRoutes")
const ekyc=require("./Routes/kyc")
const bankStatementAnalysis=require("./Routes/bankstatement")
const fileUpload = require('express-fileupload');
const panKyc = require("./Routes/pan-kyc");

require("dotenv").config();
const app=express();

const cors = require("cors");
app.use(cors());

 

 app.get("/",(req,res)=>{
     res.send("hii from server")
 })
 app.use(express.json());
 app.use(cookieParser())
 app.use(express.urlencoded({extended:true}))
 app.use(bodyparser.json());
 app.use(fileUpload());

 app.use("/api/auth",authRouter);
 app.use("/api/esign",esignRouter);
 app.use("/api/ekyc",ekyc);
 app.use("/api/bankStatement",bankStatementAnalysis);
 app.use("/api/okyc", panKyc);


 
 const dbConfig = require("./config/dbConfig");
 const port = process.env.PORT || 4000;

 app.listen(port, () => console.log(`Node server started at ${port}`));
 
  
  // connectDb ()
  // .then(()=>{
  //   console.log("database connection succesfully");
  //   app.listen(4000,()=>{
  //     console.log("server is running on  port 4000")
  //  })
  // })
  // .catch((err)=>{
  //   console.error("database cannot be connected!")
  // });
 
 
 
  
  
  
  // app.use(bodyParser.json());
  
  // const usersRoute = require("./routes/usersRoute");
  // const bankRoutes = require("./routes/bankRoutes");
  // const fileRoutes = require("./routes/fileRoutes");
  // const downloadReport= require('./routes/downloadReport');
  
  // const parseMiddleware = require('./middlewares/parseMiddleware');
  
  // const app = express();
  // parseMiddleware(app); 
  
  // app.use("/api/users", usersRoute);
  // app.use("/api/bank", bankRoutes);
  // app.use("/api/file",fileRoutes);
  // app.use('/api/download-report', downloadReport);
  
  
 