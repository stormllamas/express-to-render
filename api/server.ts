import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import products from "./data/products";
import productRoutes from "./routes/productRoutes";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use("/api/products", productRoutes);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
