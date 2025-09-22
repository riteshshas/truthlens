export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      marginTop: "20px",
      whiteSpace: "pre-wrap"
    }}>
      <h3>Result</h3>
      <pre>{result}</pre>
    </div>
  );
}
