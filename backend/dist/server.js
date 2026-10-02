"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await (0, database_1.default)();
        console.log("MongoDB connected successfully");
        app_1.default.listen(PORT, () => {
            console.log(`ParkingHero API running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map