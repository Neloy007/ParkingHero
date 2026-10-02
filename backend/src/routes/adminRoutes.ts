import { Router } from "express";
import { getUsers } from "../controllers/adminController";
import { authenticate, authorize } from "../middleware/authMiddleware";

const router = Router();

/**
 * Get all users
 *
 * ADMIN only
 */
router.get("/users", authenticate, authorize("ADMIN"), getUsers);

export default router;
