import express from "express";
import cors from "cors";

import env from "./config/env.js";
import whatsappRoutes from "./routes/whatsapp.routes.js";
import { requestLogger } from "./middlewares/logger.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

/**
 * ✅ SIMPLE, SAFE CORS (NO OPTIONS HANDLING)
 */
app.use(cors());

/**
 * Body parser
 */
app.use(express.json());

/**
 * Logger
 */
app.use(requestLogger);

/**
 * Health
 */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

/**
 * Routes
 */
app.use("/api/whatsapp", whatsappRoutes);

/**
 * Error handler
 */
app.use(errorHandler);

/**
 * Start
 */
app.listen(env.PORT, () => {
  console.log(`Server running on ${env.PORT}`);
});
