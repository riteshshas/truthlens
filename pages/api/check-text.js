import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.AIzaSyBqUxT1I6sT8EJx4YwgV4eHqLhsUQtwq_g);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Analyze the following news: "${text}".
    Return:
    1. Credibility score (0-100).
    2. A short verdict (Real / Fake / Suspicious).
    3. 1-line reasoning.`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    res.status(200).json({ output: response });
  } catch (err) {
    res.status(500).json({ error: "Gemini API failed", details: err.message });
  }
}
