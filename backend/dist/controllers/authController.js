"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
/**
 * Generate JWT token
 */
const generateToken = (userId, role) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    const options = {
        expiresIn: "15m",
    };
    return jsonwebtoken_1.default.sign({
        userId,
        role,
    }, secret, options);
};
/**
 * Register a new user
 *
 * Public registration always creates a DRIVER.
 * ADMIN/OWNER accounts should be managed by an ADMIN.
 */
const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        // Validate required fields
        if (!name || !email || !phone || !password) {
            res.status(400).json({
                success: false,
                message: "Name, email, phone and password are required",
            });
            return;
        }
        // Validate password
        if (password.length < 6) {
            res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters",
            });
            return;
        }
        // Normalize email
        const normalizedEmail = email.toLowerCase().trim();
        // Check existing user
        const existingUser = await User_1.default.findOne({
            email: normalizedEmail,
        });
        if (existingUser) {
            res.status(409).json({
                success: false,
                message: "Email is already registered",
            });
            return;
        }
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        // Create user
        // Public registration ALWAYS creates DRIVER
        const user = await User_1.default.create({
            name: name.trim(),
            email: normalizedEmail,
            phone: phone.trim(),
            password: hashedPassword,
            role: "DRIVER",
            isActive: true,
        });
        // Generate JWT
        const token = generateToken(user._id.toString(), user.role);
        // Response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                token,
            },
        });
    }
    catch (error) {
        console.error("Register error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.register = register;
/**
 * Login
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate required fields
        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
            return;
        }
        // Normalize email
        const normalizedEmail = email.toLowerCase().trim();
        // Find user
        const user = await User_1.default.findOne({
            email: normalizedEmail,
        });
        if (!user) {
            res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
            return;
        }
        // Check account status
        if (!user.isActive) {
            res.status(403).json({
                success: false,
                message: "Your account has been disabled",
            });
            return;
        }
        // Check password
        const isPasswordCorrect = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
            return;
        }
        // Generate JWT
        const token = generateToken(user._id.toString(), user.role);
        // Response
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                token,
            },
        });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map