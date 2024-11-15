import express, { Request, Response } from "express";
import products from "./data/products";

const app = express();

app.get("/", (req: Request, res: Response): any => res.json(products));

app.get("/api/products/:id", (req: Request, res: Response): any => {
  const product = products.find((p) => p._id === req.params.id);
  return res.json(product);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
