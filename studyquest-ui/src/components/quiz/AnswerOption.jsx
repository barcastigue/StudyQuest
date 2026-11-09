import { CheckCircle2, XCircle } from "lucide-react";

/** state: "" | "correct" | "incorrect" */
export default function AnswerOption({ letter, text, state = "", disabled, onClick }) {
  return (
    <button type="button" className={state} disabled={disabled} onClick={onClick}>
      <span>{letter}</span>
      <strong>{text}</strong>
      {state === "correct" && <CheckCircle2 size={20} />}
      {state === "incorrect" && <XCircle size={20} />}
    </button>
  );
}
