import { triggerWhatsAppAutomation } from '../services/whatsapp.service.js';
import { sendResponse } from '../utils/response.js';

export const sendWhatsAppMessage = async (req, res, next) => {
    try {
        const { name, phone, message } = req.body;
        const { requestId } = req;

        // 1. Basic Validation
        if (!name || name.length < 2) {
            return sendResponse(res, 400, false, 'Name is required and must be at least 2 characters');
        }

        if (!phone || !/^\d{10,}$/.test(phone)) {
            return sendResponse(res, 400, false, 'Valid numeric phone number (min 10 digits) is required');
        }

        if (!message || message.length < 5) {
            return sendResponse(res, 400, false, 'Message is required and must be at least 5 characters');
        }

        // 2. Call Service
        const result = await triggerWhatsAppAutomation({ name, phone, message }, requestId);

        // 3. Return Success
        return sendResponse(res, 200, true, 'WhatsApp request accepted', {
            requestId,
            ...result
        });

    } catch (error) {
        next(error);
    }
};
