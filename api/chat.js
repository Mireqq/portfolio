import OpenAI from "openai";
import fs from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ reply: "Please enter a message." });
    }

    const profilePath = path.join(process.cwd(), "profile.txt");
    const profile = fs.readFileSync(profilePath, "utf8");

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

    return res.status(200).json({ reply: response.output_text });
  } catch (error) {
    console.error("Chat error:", error);
    return res
      .status(500)
      .json({ reply: "Something went wrong on the server." });
  }
}
