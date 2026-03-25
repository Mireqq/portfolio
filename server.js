import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import OpenAI from "openai";

dotenv.config({ override: true });

console.log(
  "API key preview:",
  process.env.OPENAI_API_KEY
    ? process.env.OPENAI_API_KEY.slice(0, 10) +
        "..." +
        process.env.OPENAI_API_KEY.slice(-4)
    : "NOT LOADED",
);

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const profile = fs.readFileSync("./profile.txt", "utf8");

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ reply: "Please enter a message." });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: profile,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({ reply: response.output_text });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ reply: "Something went wrong on the server." });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
