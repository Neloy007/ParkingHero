"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
/**
 * Get users
 *
 * Examples:
 *
 * GET /api/admin/users
 * GET /api/admin/users?role=DRIVER
 * GET /api/admin/users?role=OWNER
 * GET /api/admin/users?role=ADMIN
 */
const getUsers = async (req, res) => {
    try {
        const role = req.query.role;
        const filter = {};
        // Filter by role if provided
        if (role) {
            if (!["ADMIN", "OWNER", "DRIVER"].includes(role)) {
                res.status(400).json({
                    success: false,
                    message: "Invalid role",
                });
                return;
            }
            filter.role = role;
        }
        const users = await User_1.default.find(filter)
            .select("-password")
            .sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: users.length,
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