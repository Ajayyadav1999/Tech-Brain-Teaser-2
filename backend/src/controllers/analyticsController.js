import {
  getShopSalesData,
  getAllShopSalesData,
} from "../services/analyticsService.js";

// With pagination
export const getShopSales = (req, res, next) => {
  try {
    const result = getShopSalesData(req.query);
    res.json({
      success: true,
      ...result,
    });
  } catch (err) {
    next(err);
  }
};

// without pagination
export const getAllShopSales = (req, res, next) => {
  try {
    const data = getAllShopSalesData();
    res.json({
      success: true,
      total: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
};
