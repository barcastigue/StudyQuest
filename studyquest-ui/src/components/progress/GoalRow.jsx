import ProgressBar from "../ui/ProgressBar.jsx";

export default function GoalRow({ title, caption, percent, amber = false }) {
  return (
    <div className="goal-row">
      <div>
        <strong>{title}</strong>
        <span>{caption}</span>
      </div>
      <b>{Math.round(percent)}%</b>
      <ProgressBar value={percent} amber={amber} />
    </div>
  );
}
