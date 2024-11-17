import express from "express";
const router = express.Router();
import { getAllProducts, getProductById } from "../controllers/products";

router.get("/", getAllProducts);
router.get("/:id", getProductById);

export default router;
