import styles from "./ResultCard.module.css";

export default function ResultCard({ result, title = "Result" }) {
  if (!result) return null;

  return (
    <div className={styles.resultCard}>
      <h3 className={styles.resultTitle}>{title}</h3>
      <pre className={styles.resultPre}>{result}</pre>
    </div>
  );
}
