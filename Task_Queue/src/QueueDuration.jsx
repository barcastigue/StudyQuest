export default function QueueDuration({ tasks, maxDuration }) {
  const head = tasks[0];
  const percent = head ? (head.remaining / maxDuration) * 100 : 0;
  const total = tasks.reduce((sum, t) => sum + t.duration, 0);

  return (
    <div className="duration-track" title={`Total queue duration: ${total}`}>
      <div className="duration-box" style={{ width: `${percent}%` }} />
    </div>
  );
}