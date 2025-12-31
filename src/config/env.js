import dotenv from 'dotenv';

dotenv.config();

const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN || 'https://newpro-lake.vercel.app',
    WHATSAPP_PROVIDER_URL: process.env.WHATSAPP_PROVIDER_URL || '',
    WHATSAPP_API_KEY: process.env.WHATSAPP_API_KEY || '',
};

// Simple validation
const requiredEnv = ['FRONTEND_ORIGIN'];
const missingEnv = requiredEnv.filter((key) => !process.env[key] && !env[key]);

if (missingEnv.length > 0) {
    console.warn(`[WARNING] Missing environment variables: ${missingEnv.join(', ')}`);
}

export default env;
