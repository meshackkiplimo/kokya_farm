import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import myRentRoute from "./routes/MyRentRoute";
import rentRoute from "./routes/RentRoute";
import orderRoute from "./routes/OrderRoute";
import authRoute from "./routes/AuthRoute";
import connectDB from "./config/db";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));

app.use(express.json());

app.use("/api/my/rent", myRentRoute);
app.use("/api/rent", rentRoute);
app.use("/api/order", orderRoute);
app.use("/api/auth", authRoute);

connectDB();

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`server started on localhost:${port}`);
});
