const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

require("dotenv").config();

const authRouter = require("./Routes/authRoutes");
// const esignRouter = require("./Routes/e-signRoutes");
// const ekyc = require("./Routes/kyc");
// const bankStatementAnalysis = require("./Routes/bankstatement");
const panKyc = require("./Routes/pan-kyc");

// Initialize Prisma Client
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

// Routes
app.get("/", (req, res) => {
  res.send("Hello from the Prisma-powered server!");
});

app.use("/api/auth", authRouter);
// app.use("/api/esign", esignRouter);
// app.use("/api/ekyc", ekyc);
// app.use("/api/bankStatement", bankStatementAnalysis);
app.use("/api/okyc", panKyc);

// Start Server
const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully!");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

startServer();

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Prisma disconnected. Server shutting down.");
  process.exit(0);
});
