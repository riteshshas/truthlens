import { getJson } from "serpapi";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { imageUrl } = req.body;

    getJson({
      q: imageUrl,
      hl: "en",
      gl: "us",
      google_domain: "google.com",
      api_key: process.env.c240a05bd656cd59bbcbb142add6d599f8e1708f25250bbe5d9db1cff84bc1e3
    }, (json) => {
      // Top 3 results for simplicity
      const matches = json?.images_results?.slice(0, 3).map(img => ({
        name: img.title,
        url: img.link
      })) || [];

      res.status(200).json({ foundOn: matches });
    });

  } catch (err) {
    res.status(500).json({ error: "SerpAPI failed", details: err.message });
  }
}
