# Cortexaa Backend

Production-ready Node.js + Express backend for Cortexaa WhatsApp Automation.

## Features
- **Secure**: Basic rate limiting and input validation.
- **Scalable**: Stateless architecture, ready for Vercel/Railway/Render.
- **Extensible**: Service layer pattern for easy WhatsApp provider integration (Meta/Twilio/n8n).
- **Observable**: Request ID tracking and structured logging.

## Tech Stack
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Utils**: `dotenv`, `axios`, `cors`, `uuid`

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```
   
   - `FRONTEND_ORIGIN`: URL of your frontend (e.g., `https://newpro-lake.vercel.app`)

3. **Run Locally**
   ```bash
   npm run dev
   ```
   Server will start at `http://localhost:3000`

## API Endpoints

### Health Check
`GET /health`
Returns status of the service.

### Send WhatsApp Message
`POST /api/whatsapp/send`

**Body:**
```json
{
  "name": "John Doe",
  "phone": "1234567890",
  "message": "Hello Cortexaa"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "requestId": "uuid...",
    "status": "simulated"
  },
  "message": "WhatsApp request accepted"
}
```

## Deployment
This project is ready for deployment on Render, Railway, or Vercel (using serverless functions adapter if needed, though this is a standard Express app).

Ensure you set the environment variables in your deployment dashboard.
