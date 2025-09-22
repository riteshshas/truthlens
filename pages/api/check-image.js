import { getJson } from "serpapi";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const apiKey = process.env.SERPAPI_API_KEY || process.env.BING_API_KEY;
    if (!apiKey) return res.status(400).json({ error: "SERPAPI_API_KEY or BING_API_KEY missing. Set one in environment settings." });

    const { imageUrl, imageBase64 } = req.body;

    if (imageBase64) {
      // Use Google Lens via SerpApi with base64 image content
      getJson(
        {
          engine: "google_lens",
          api_key: apiKey,
          image_content: imageBase64,
          hl: "en",
          country: "us",
        },
        (json) => {
          const visualMatches = json?.visual_matches || json?.visually_similar_images || [];
          const top = (visualMatches || []).slice(0, 5).map((m) => ({
            name: m.title || m.source || m.domain || "Match",
            url: m.link || m.source_url || m.thumbnail || "",
          }));
          const guess = json?.best_guess_label || json?.best_guess || null;
          res.status(200).json({ bestGuess: guess, matches: top, raw: { total: visualMatches?.length || 0 } });
        }
      );
      return;
    }

    if (imageUrl) {
      // Fallback: simple image search by URL string
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
      return;
    }

    res.status(400).json({ error: "No image provided" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "SerpAPI failed", details: err.message });
  }
}
