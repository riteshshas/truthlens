import { useState } from "react";
import ResultCard from "../components/ResultCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [mode, setMode] = useState("text");
  const [textInput, setTextInput] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
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

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const handleCheckImage = async () => {
    if (!imageFile) return alert("Choose an image first!");
    setLoading(true);
    setResult("");
    try {
      const dataUrl = await toBase64(imageFile);
      const base64 = String(dataUrl).split(",").pop();
      const res = await fetch("/api/check-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64 }),
      });
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
      setResult("Error occurred!");
    }
    setLoading(false);
  };

  const useExampleText = () => {
    setTextInput(
      "Scientists have discovered a new particle at the LHC that could revolutionize energy production."
    );
  };

  const useExampleImage = async () => {
    try {
      const w = 512, h = 320;
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      const grd = ctx.createLinearGradient(0, 0, w, h);
      grd.addColorStop(0, "#6366f1");
      grd.addColorStop(1, "#22c55e");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "bold 36px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Example Image", w / 2, h / 2);
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) return alert("Couldn't create example image.");
      const file = new File([blob], "example.png", { type: "image/png" });
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } catch (e) {
      console.error(e);
      alert("Couldn't create example image.");
    }
  };

  const onPickFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <h1 className={styles.brandTitle}><span className={styles.brandAccent}>Truth</span>Lens</h1>
        <p className={styles.tagline}>Verify text and images with an intuitive, interactive tool.</p>
        <div className={styles.tabs} role="tablist" aria-label="Mode selector">
          <button
            role="tab"
            aria-selected={mode === "text"}
            className={`${styles.tab} ${mode === "text" ? styles.tabActive : ""}`}
            onClick={() => setMode("text")}
          >
            Text
          </button>
          <button
            role="tab"
            aria-selected={mode === "image"}
            className={`${styles.tab} ${mode === "image" ? styles.tabActive : ""}`}
            onClick={() => setMode("image")}
          >
            Image
          </button>
        </div>
      </header>

      <main className={styles.panel}>
        {mode === "text" ? (
          <section className={styles.toolCard} aria-labelledby="text-check-label">
            <label id="text-check-label" className={styles.label}>Type your text</label>
            <textarea
              className={styles.textarea}
              rows={6}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Paste text here..."
            />
            <div className={styles.toolFooter}>
              <span className={styles.muted}>{textInput.length} chars</span>
              <div className={styles.actions}>
                <button className={styles.secondaryBtn} onClick={useExampleText} disabled={loading}>Use example</button>
                <button className={styles.primaryBtn} onClick={handleCheckText} disabled={loading}>
                  {loading ? <span className={styles.spinner} aria-hidden /> : "Check Text"}
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className={styles.toolCard} aria-labelledby="image-check-label">
            <label id="image-check-label" className={styles.label}>Upload an image</label>
            <div className={styles.urlRow}>
              <input
                className={styles.urlInput}
                type="file"
                accept="image/*"
                onChange={onPickFile}
              />
              <div className={styles.actions}>
                <button className={styles.secondaryBtn} onClick={useExampleImage} disabled={loading}>Use example</button>
                <button className={styles.primaryBtn} onClick={handleCheckImage} disabled={loading}>
                  {loading ? <span className={styles.spinner} aria-hidden /> : "Check Image"}
                </button>
              </div>
            </div>
            {imageFile ? (
              <div className={styles.toolFooter}>
                <span className={styles.muted}>{imageFile.name} • {(imageFile.size/1024).toFixed(1)} KB</span>
              </div>
            ) : null}
            {imagePreview ? (
              <div className={styles.preview}>
                <img className={styles.previewImg} src={imagePreview} alt="Preview" />
              </div>
            ) : null}
          </section>
        )}

        <ResultCard result={result} />
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} TruthLens</footer>
    </div>
  );
}
