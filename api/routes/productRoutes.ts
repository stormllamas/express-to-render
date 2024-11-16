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

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
  })
);

export default router;
