import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler.ts";
import Product from "../models/productModel";

export const getAllProducts = asyncHandler(async (_, res: Response) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductById = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
  }
);
