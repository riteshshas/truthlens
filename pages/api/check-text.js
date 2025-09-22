export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(400).json({ error: "GEMINI_API_KEY missing. Set it in environment settings." });

    const { text } = req.body;
    if (!text || typeof text !== "string" || !text.trim()) return res.status(400).json({ error: "Missing 'text' in request body" });

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: `Check credibility: ${text}` }] }
          ],
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      let details;
      try { details = JSON.parse(errText); } catch { details = errText; }
      return res.status(response.status).json({ error: "Gemini API error", details });
    }
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
