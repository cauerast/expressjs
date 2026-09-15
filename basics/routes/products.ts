import express, { type Request, type Response } from "express";
import type { product } from "../types/product.type.js";
const router = express.Router();

// /products/

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 60 },
  ]);
});

router.get("/:id", (req, res) => {
  const id: number = Number(req.params.id);
  const products: product[] = [
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 60 },
  ];
  const reqProd: product | undefined = products.find((p) => p.id === id);
  res.json(reqProd);
});

export default router;