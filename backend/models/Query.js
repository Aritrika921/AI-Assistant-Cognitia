const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    question: String,
    answer: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);