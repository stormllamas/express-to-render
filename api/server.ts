import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products";

const PORT = process.env.PORT || 8000

const app = express();

app.get("/", (req: Request, res: Response): any => res.json(products));

app.get("/api/products/:id", (req: Request, res: Response): any => {
  const product = products.find((p) => p._id === req.params.id);
  return res.json(product);
});;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
