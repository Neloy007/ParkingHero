import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import connectDatabase from "./config/database";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`ParkingHero API running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

startServer();
