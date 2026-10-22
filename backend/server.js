
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://hightechengineeringsolution.com",
    "https://www.hightechengineeringsolution.com"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/send-email/form1", require("./routes/form1"));

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
