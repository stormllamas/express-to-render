import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import productRoutes from "./routes/productRoutes";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
