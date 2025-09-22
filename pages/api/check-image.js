import { getJson } from "serpapi";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const apiKey = process.env.BING_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "API key missing!" });

    const { imageUrl } = req.body;

    getJson(
      {
        q: imageUrl,
        hl: "en",
        gl: "us",
        google_domain: "google.com",
        api_key: apiKey,
      },
      (json) => {
        const matches =
          json?.images_results?.slice(0, 3).map((img) => ({
            name: img.title,
            url: img.link,
          })) || [];
        res.status(200).json({ foundOn: matches });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "SerpAPI failed", details: err.message });
  }
}
