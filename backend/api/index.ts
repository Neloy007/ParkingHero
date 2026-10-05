import dotenv from "dotenv";
import app from "../src/app";
import connectDatabase from "../src/config/database";

dotenv.config();

let isConnected = false;

const handler = async (req: any, res: any) => {
  try {
    if (!isConnected) {
      await connectDatabase();
      isConnected = true;
      console.log("MongoDB connected successfully");
    }

    return app(req, res);
  } catch (error) {
    console.error("MongoDB connection failed:", error);

    return res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
};

export default handler;
