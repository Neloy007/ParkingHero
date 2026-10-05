"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "ParkingHero API is running",
        version: "1.0.0",
    });
});
app.get("/api/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "ParkingHero API is running",
    });
});
app.get("/api/health/db", async (_req, res) => {
    try {
        await (0, database_1.default)();
        res.status(200).json({
            success: true,
            message: "MongoDB connected successfully",
        });
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        res.status(500).json({
            success: false,
            message: "MongoDB connection failed",
        });
    }
});
app.use("/api/auth", authRoutes_1.default);
app.use("/api/admin", adminRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map