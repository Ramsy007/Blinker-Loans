const {  mongoose } = require("mongoose")
require("dotenv").config();

 const connectDb=async()=>{
    await mongoose.connect(
        process.env.mongo_url
    );
 };
 module.exports={connectDb}