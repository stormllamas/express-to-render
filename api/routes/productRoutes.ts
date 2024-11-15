import express, { Request, Response } from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler";
import Product from "../models/productModel";

router.get(
  "/",
  asyncHandler(async (_, res: Response) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get("/:id", asyncHandler(async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
}));

export default router;
