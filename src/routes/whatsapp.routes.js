import express from 'express';
import { sendWhatsAppMessage } from '../controllers/whatsapp.controller.js';
import { whatsappLimiter } from '../middlewares/rateLimit.js';

const router = express.Router();

// POST /api/whatsapp/send
router.post('/send', whatsappLimiter, sendWhatsAppMessage);

export default router;
