/**
 * Standard API Response Helper
 * @param {Response} res - Express response object
 * @param {number} status - HTTP status code
 * @param {boolean} success - Success status
 * @param {string} message - Response message
 * @param {object} data - Optional data payload
 */
export const sendResponse = (res, status, success, message, data = null) => {
    const response = {
        success,
        message,
    };

    if (data) {
        response.data = data;
    }

    return res.status(status).json(response);
};
