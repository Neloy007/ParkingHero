"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
/**
 * Get all users
 *
 * ADMIN only
 */
router.get("/users", authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)("ADMIN"), adminController_1.getUsers);
exports.default = router;
//# sourceMappingURL=adminRoutes.js.map