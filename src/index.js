import express from "express";
import cors from "cors";
import whatsappRoutes from "./routes/whatsapp.routes.js";

app.use(express.json());
app.use("/api/whatsapp", whatsappRoutes);


const app = express();

/* 🔥 CORS — add before routes */
app.use(cors());
app.options("*", cors());

/* Root check */
app.get("/", (req, res) => {
  res.send("Cortexaa backend alive");
});

/* Health check */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
