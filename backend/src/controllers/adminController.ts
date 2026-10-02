import { Response } from "express";
import User, { UserRole } from "../models/User";
import { AuthRequest } from "../middleware/authMiddleware";

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
export const getUsers = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const role = req.query.role as UserRole | undefined;

    const filter: Record<string, unknown> = {};

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

    const users = await User.find(filter)
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Get users error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
