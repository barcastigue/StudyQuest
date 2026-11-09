import { CheckCircle2, XCircle } from "lucide-react";

export default function AnswerFeedback({ correct, explanation }) {
  return (
    <div className={`feedback ${correct ? "correct" : "incorrect"}`}>
      <div>
        {correct ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
        <strong>{correct ? "That’s right." : "Not quite."}</strong>
      </div>
      <p>{explanation}</p>
    </div>
  );
}
