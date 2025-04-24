import express from "express";
import { createUser, getCurrentUser, loginUser, updateUser } from "../controllers/AuthController";
import { body } from "express-validator";
import { validate } from "../middleware/validation";

const router = express.Router();

// Validation middleware
const registerValidationRules = [
  body("email").isEmail().withMessage("Must be a valid email"),
  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  body("confirmPassword")
    .notEmpty().withMessage("Password confirmation is required")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
  body("name").trim().notEmpty().withMessage("Name cannot be empty"),
];

const loginValidationRules = [
  body("email").isEmail().withMessage("Must be a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Routes
router.post(
  "/register",
  registerValidationRules,
  validate,
  createUser
);

router.post(
  "/login",
  loginValidationRules,
  validate,
  loginUser
);

router.get(
  "/me",
  getCurrentUser
);

router.put(
  "/me",
  body("name").trim().notEmpty().withMessage("Name cannot be empty"),
  validate,
  updateUser
);

export default router;