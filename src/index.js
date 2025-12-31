import express from 'express';
import cors from 'cors';

import env from './config/env.js';
import corsOptions from './config/cors.js';

import { requestLogger } from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';
import whatsappRoutes from './routes/whatsapp.routes.js';

const app = express();

/**
 * 🔥 CORS — MUST BE FIRST
 */
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ✅ THIS LINE

/**
 * Body parser
 */
app.use(express.json());

/**
 * Observability
 */
app.use(requestLogger);
