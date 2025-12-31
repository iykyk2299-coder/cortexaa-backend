import env from '../config/env.js';

/**
 * Global Error Handling Middleware
 */
export const errorHandler = (err, req, res, next) => {
    console.error(`[ERROR] ${err.message}`, {
        stack: env.NODE_ENV === 'development' ? err.stack : undefined,
        requestId: req.requestId
    });

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        message,
        ...(env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
