import dotenv from "dotenv";
import path from 'path';
dotenv.config();
import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import productRoutes from "./routes/productRoutes";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve(); 
  app.use('/uploads', express.static('/var/data/uploads'));
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  // All the requests that are not for the API should be redirected to the frontend
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
