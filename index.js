const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Evolution API Running 🚀");
});

// Example webhook route (for WhatsApp)
app.post("/webhook", (req, res) => {
  console.log("Incoming data:", req.body);
  res.json({ status: "received" });
});

// IMPORTANT: dynamic port for Railway
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});