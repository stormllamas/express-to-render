import { Request, Response } from "express";
import asyncCallHandler from "../middleware/asyncCallHandler";
import Product from "../models/productModel";

export const getAllProducts = asyncCallHandler(async (_, res: Response) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductById = asyncCallHandler(
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
  }
);
