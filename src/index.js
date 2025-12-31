import express from 'express';
import cors from 'cors';

import env from './config/env.js';
import corsOptions from './config/cors.js';

import { requestLogger } from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';
import whatsappRoutes from './routes/whatsapp.routes.js';

const app = express();

/**
 * 🔥 1. CORS — MUST BE FIRST
 */
app.use(cors(corsOptions));

/**
 * 🔥 2. Body parser
 */
app.use(express.json());

/**
 * 🔥 3. Observability
 */
app.use(requestLogger);

/**
 * 4. Health check
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'cortexaa-backend',
  });
});

/**
 * 5. Root route
 */
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'cortexaa-backend',
    message: 'Backend is running 🚀',
  });
});

/**
 * 6. API routes
 */
app.use('/api/whatsapp', whatsappRoutes);

/**
 * 7. Global error handler (LAST)
 */
app.use(errorHandler);

/**
 * 8. Start server
 */
app.listen(env.PORT, () => {
  console.log(`
🚀 Server running on port ${env.PORT}
🌍 Environment: ${env.NODE_ENV}
✅ Health Check: /health
  `);
});
