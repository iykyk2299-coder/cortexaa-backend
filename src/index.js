import express from "express";
import cors from "cors";
import whatsappRoutes from "./routes/whatsapp.routes.js";

const app = express();

/* CORS */
app.use(cors());
app.options("*", cors());

/* 🔥 BODY PARSER — MUST BE BEFORE ROUTES */
app.use(express.json());

/* Root */
app.get("/", (req, res) => {
  res.send("Cortexaa backend alive");
});

/* Health */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* WhatsApp */
app.use("/api/whatsapp", whatsappRoutes);

/* Start */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
