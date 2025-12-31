import express from 'express';
import cors from 'cors';

import env from './config/env.js';
import corsOptions from './config/cors.js';

import { requestLogger } from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';
import whatsappRoutes from './routes/whatsapp.routes.js';

const app = express();

/**
 * 🔥 1. CORS FIRST (adds headers)
 */
app.use(cors(corsOptions));

/**
 * 🔥 2. HANDLE PREFLIGHT ONCE (clean exit)
 */
app.options('*', (req, res) => {
  res.sendStatus(204);
});

/**
 * 3. Body parser
 */
app.use(express.json());

/**
 * 4. Observability
 */
app.use(requestLogger);
