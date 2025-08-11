import express from "express";
import {
  getShopSales,
  getAllShopSales,
} from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/", (req, res, next) => getShopSales(req, res, next));

router.get("/all", getAllShopSales);

export default router;
