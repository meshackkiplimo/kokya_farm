import express from "express";
import { createUser, getCurrentUser, updateCurrentUser } from "../controllers/AuthController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { body } from "express-validator";
import { validate } from "../middleware/validation";

const router = express.Router();

// Validation middleware
const userValidationRules = [
  body("email").isEmail().withMessage("Must be a valid email"),
  body("firstName").optional().trim().notEmpty().withMessage("First name cannot be empty"),
  body("lastName").optional().trim().notEmpty().withMessage("Last name cannot be empty"),
  body("address").optional().trim().notEmpty().withMessage("Address cannot be empty"),
  body("town").optional().trim().notEmpty().withMessage("Town cannot be empty"),
  body("county").optional().trim().notEmpty().withMessage("County cannot be empty"),
  body("phoneNumber").optional().trim().notEmpty().withMessage("Phone number cannot be empty"),
];

// Routes
router.post(
  "/",
  jwtCheck,
  userValidationRules,
  validate,
  createUser
);

router.get(
  "/me",
  jwtCheck,
  jwtParse,
  getCurrentUser
);

router.put(
  "/me",
  jwtCheck,
  jwtParse,
  userValidationRules,
  validate,
  updateCurrentUser
);

export default router;