import express from "express";
import { sendWhatsAppMessage } from "../services/whatsapp.service.js";

const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    // Safety checks
    if (!req.body) {
      return res.status(400).json({ error: "Missing body" });
    }

    const { to, text } = req.body;

    if (!to || !text) {
      return res.status(400).json({ error: "Missing to or text" });
    }

    await sendWhatsAppMessage(to, text);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("WhatsApp route error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;
