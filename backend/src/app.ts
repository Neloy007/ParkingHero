import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes";
import connectDatabase from "./config/database";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "ParkingHero API is running",
    version: "1.0.0",
  });
});

app.get("/api/health/db", async (_req, res) => {
  try {
    await connectDatabase();

    res.status(200).json({
      success: true,
      message: "MongoDB connected successfully",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);

    res.status(500).json({
      success: false,
      message: "MongoDB connection failed",
    });
  }
});

app.use("/api/auth", authRoutes);

export default app;
