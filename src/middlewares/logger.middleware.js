import { v4 as uuidv4 } from 'uuid';

/**
 * Middleware to log requests and assign a request ID
 */
export const requestLogger = (req, res, next) => {
    // Assign a unique Request ID
    req.requestId = uuidv4();

    const start = Date.now();
    const { method, url } = req;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Log on finish
    res.on('finish', () => {
        const duration = Date.now() - start;
        const { statusCode } = res;

        // Format: [METHOD] URL STATUS - DURATIONms - IP - TRANS_ID
        console.log(
            `[${method}] ${url} ${statusCode} - ${duration}ms - IP: ${ip} - REQ_ID: ${req.requestId}`
        );
    });

    next();
};
