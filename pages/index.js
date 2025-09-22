import { useState } from "react";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState("");

  const checkText = async () => {
    const res = await fetch("/api/check-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setResult(data.output);
  };

  const checkImage = async () => {
  const res = await fetch("/api/check-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageUrl }),
  });
  const data = await res.json();
  setResult(JSON.stringify(data.foundOn, null, 2));
};


  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h1>TruthLens</h1>
      <h3>Fake News & Image Verification</h3>

      <textarea
        rows="4"
        style={{ width: "100%", marginTop: "10px" }}
        placeholder="Paste news text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={checkText}>Check Text</button>

      <input
        type="text"
        style={{ width: "100%", marginTop: "20px" }}
        placeholder="Paste image URL here..."
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={checkImage}>Check Image</button>

      <ResultCard result={result} />
    </div>
  );
}
