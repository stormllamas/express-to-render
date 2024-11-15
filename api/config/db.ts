import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const MONGO_DB_URL = process.env.MONGO_DB_URL || "";

export const connectDB = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const conn = await mongoose.connect(MONGO_DB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
