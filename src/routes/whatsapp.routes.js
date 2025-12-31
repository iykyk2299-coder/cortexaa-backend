import express from "express";
import { sendWhatsAppMessage } from "../services/whatsapp.service.js";

const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const { to, text } = req.body;

    await sendWhatsAppMessage(to, text);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
