export default function TaskItem({ task }) {
  const isHigh = task.priority === "HIGH";
  return (
    <li
      className={isHigh ? "task high" : "task"}
      title={`Task #${task.id} (${task.priority})`}
    >
      {task.duration}
    </li>
  );
}