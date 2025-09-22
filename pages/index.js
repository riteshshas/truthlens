import { useState } from "react";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckText = async () => {
    if (!textInput) return alert("Enter some text!");
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/check-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textInput }),
      });
      const data = await res.json();
      setResult(data?.candidates?.[0]?.content?.parts?.[0]?.text || "No result!");
    } catch (err) {
      console.error(err);
      setResult("Error occurred!");
    }
    setLoading(false);
  };

  const handleCheckImage = async () => {
    if (!imageInput) return alert("Enter image URL!");
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/check-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: imageInput }),
      });
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
      setResult("Error occurred!");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>TruthLens</h1>

      {/* Text Input */}
      <textarea
        rows="4"
        cols="50"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Paste text here..."
      />
      <br />
      <button onClick={handleCheckText} disabled={loading}>
        {loading ? "Checking..." : "Check Text"}
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* Image Input */}
      <input
        type="text"
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
        placeholder="Enter image URL..."
        style={{ width: "300px" }}
      />
      <button onClick={handleCheckImage} disabled={loading}>
        {loading ? "Checking..." : "Check Image"}
      </button>

      <ResultCard result={result} />
    </div>
  );
}
