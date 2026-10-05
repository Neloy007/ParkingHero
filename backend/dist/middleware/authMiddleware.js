"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                success: false,
                message: "Authentication required",
            });
            return;
        }
        const token = authHeader.substring(7).trim();
        if (!token) {
            res.status(401).json({
                success: false,
                message: "Authentication token is missing",
            });
            return;
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            res.status(500).json({
                success: false,
                message: "JWT_SECRET is not configured",
            });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        if (typeof decoded !== "object" ||
            decoded === null ||
            typeof decoded.userId !== "string" ||
            !["ADMIN", "OWNER", "DRIVER"].includes(decoded.role)) {
            res.status(401).json({
                success: false,
                message: "Invalid token payload",
            });
            return;
        }
        req.user = {
            userId: decoded.userId,
            role: decoded.role,
        };
        next();
    }
    catch {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
exports.authenticate = authenticate;
const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({
                success: false,
                message: "Authentication required",
            });
            return;
        }
        if (!allowedRoles.includes(req.user.role)) {
            res.status(403).json({
                success: false,
                message: "Access denied",
            });
            return;
        }
        next();
    };
};
exports.authorize = authorize;
//# sourceMappingURL=authMiddleware.js.map