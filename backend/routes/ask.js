const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

const Query = require("../models/Query");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question required" });
    }

    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: question }],
      model: "llama-3.1-8b-instant",
    });

    const answer = completion.choices[0].message.content;

    try {
      await Query.create({
        question,
        answer,
      });
    } catch (dbError) {
      console.log("DB Save Failed:", dbError.message);
    }

    res.json({ answer });

  } catch (error) {
    console.log("Main Error:", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;