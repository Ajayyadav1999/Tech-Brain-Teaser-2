import express from "express";
import cors from "cors";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/shops", analyticsRoutes);

app.use(errorHandler);

export default app;
