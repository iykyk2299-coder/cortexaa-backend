import express from "express";
import cors from "cors";

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
