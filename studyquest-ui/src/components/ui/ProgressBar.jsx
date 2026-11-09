export default function ProgressBar({ value, amber = false }) {
  return (
    <div className="progress-track" aria-label={`${value}% complete`}>
      <span className={amber ? "amber" : ""} style={{ width: `${value}%` }} />
    </div>
  );
}
