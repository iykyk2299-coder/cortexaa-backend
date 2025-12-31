import express from "express";
import { sendWhatsAppMessage } from "../services/whatsapp.service.js";

const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    // 1️⃣ Data coming from frontend
    const { name, phone, message } = req.body;

    // 2️⃣ Format WhatsApp message
    const text = `🔥 New Website Lead
Name: ${name}
Phone: ${phone}
Message: ${message}`;

    // 3️⃣ Send message via WhatsApp API
    const result = await sendWhatsAppMessage(phone, text);

    // 4️⃣ Respond back to frontend
    res.status(200).json({
      success: true,
      result,
    });

  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      success: false,
      error: "WhatsApp send failed",
    });
  }
});

export default router;
