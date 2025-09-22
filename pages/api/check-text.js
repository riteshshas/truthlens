export default async function handler(req, res) {
  try {
    const apiKey = process.env.AIzaSyBqUxT1I6sT8EJx4YwgV4eHqLhsUQtwq_g;
    if (!apiKey) {
      return res.status(500).json({ error: "API key missing!" });
    }

    const userText = req.body.text;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: `Check credibility of this text: ${userText}` }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong!" });
  }
}
