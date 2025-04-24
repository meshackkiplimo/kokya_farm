import { Request, Response } from "express";
import User from "../models/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id, email, firstName, lastName, address, town, county, phoneNumber } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      auth0Id,
      email,
      firstName,
      lastName,
      address,
      town,
      county,
      phoneNumber,
    });

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error("Error in createUser:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ auth0Id: req.auth0Id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error in getCurrentUser:", error);
    res.status(500).json({ message: "Error getting user" });
  }
};

export const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, address, town, county, phoneNumber } = req.body;
    const user = await User.findOne({ auth0Id: req.auth0Id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.town = town;
    user.county = county;
    user.phoneNumber = phoneNumber;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error("Error in updateCurrentUser:", error);
    res.status(500).json({ message: "Error updating user" });
  }
};