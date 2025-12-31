import axios from 'axios';
import env from '../config/env.js';

export const triggerWhatsAppAutomation = async (data, requestId) => {
    const { name, phone, message } = data;

    // Placeholder logic for simulation
    if (!env.WHATSAPP_PROVIDER_URL) {
        console.log(`[SIMULATION] [${requestId}] WhatsApp Message Triggered:`);
        console.log(`  To: ${name} (${phone})`);
        console.log(`  Message: ${message}`);

        // Simulate API latency
        await new Promise((resolve) => setTimeout(resolve, 500));

        return { status: 'simulated', providerId: `mock-${Date.now()}` };
    }

    // Real WhatsApp API Call (Generic Webhook / API Wrapper)
    try {
        const payload = {
            messaging_product: 'whatsapp',
            to: phone,
            type: 'template', // Or 'text' depending on the provider
            template: {
                name: 'hello_world',
                language: { code: 'en_US' }
            },
            // If simple text:
            // type: 'text',
            // text: { body: message }
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.WHATSAPP_API_KEY}`
        };

        const response = await axios.post(env.WHATSAPP_PROVIDER_URL, payload, { headers });

        console.log(`[SUCCESS] [${requestId}] WhatsApp Sent via Provider. Status: ${response.status}`);
        return { status: 'sent', providerResponse: response.data };

    } catch (error) {
        console.error(`[FAILED] [${requestId}] WhatsApp Provider Error:`, error.message);
        // Re-throw to be handled by controller/error middleware
        throw new Error('Failed to send WhatsApp message via provider');
    }
};
