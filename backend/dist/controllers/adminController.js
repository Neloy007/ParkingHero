"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUsers = async (_req, res) => {
    try {
        const users = await User_1.default.find().select("-password").sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users,
        });
    }
    catch (error) {
        console.error("Get users error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.getUsers = getUsers;
//# sourceMappingURL=adminController.js.map