const rateLimit = require("express-rate-limit");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const askRoute = require("./routes/ask");

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Too many requests. Please try again later.",
});

app.use("/api", limiter);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

app.use("/api", askRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});