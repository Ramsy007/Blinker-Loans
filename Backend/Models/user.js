const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phone: { type: String, required: true, unique: true }, 
    otp: { type: String, required: false }, 
    otpExpires: { type: Date, required: false }, 
    isVerified: { type: Boolean, default: false }, 

    fullName: { type: String, required: false }, 
    dob: { type: Date, required: false }, 
    email: { type: String, required: false, unique: false }, 

    
    aadhaarNumber: { type: String, required: false }, 
    panNumber: { type: String, required: false }, 
    kycStatus: { type: String, enum: ["Pending", "Verified", "Rejected"], default: "Pending" }, 

    
    eSignTransactionId: { type: String, required: false }, 
    eSignStatus: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" }, 

    
    bankAccountNumber: { type: String, required: false }, 
    ifscCode: { type: String, required: false }, 
    pennyDropStatus: { type: String, enum: ["Pending", "Verified", "Failed"], default: "Pending" }, 

   
    creditScore: { type: Number, required: false }, 
    loanEligibility: { type: Number, required: false }, 
    bankStatementAnalysis: { type: Object, required: false }, 

   
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now } 
});


userSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("User", userSchema);
