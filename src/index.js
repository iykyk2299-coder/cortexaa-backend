import express from 'express';
import cors from 'cors';
import env from './config/env.js';
import corsOptions from './config/cors.js';
import { requestLogger } from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';
import whatsappRoutes from './routes/whatsapp.routes.js';

const app = express();

// 1. Security & Configuration
app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

// 2. Observability
app.use(requestLogger);

// 3. Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'cortexaa-backend' });
});


// ✅ 3.5 Root Route (ADD THIS)
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'cortexaa-backend',
        message: 'Backend is running 🚀'
    });
});

// 4. API Routes
app.use('/api/whatsapp', whatsappRoutes);

// 5. Global Error Handling
app.use(errorHandler);

// 6. Start Server
app.listen(env.PORT, () => {
    console.log(`
🚀 Server running on port ${env.PORT}
🌍 Environment: ${env.NODE_ENV}
✅ Health Check: http://localhost:${env.PORT}/health
  `);
});
