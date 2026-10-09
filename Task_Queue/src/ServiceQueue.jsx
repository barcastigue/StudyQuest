import TaskItem from "./TaskItem";
import QueueDuration from "./QueueDuration";

export default function ServiceQueue({ title, tasks, type, maxDuration }) {
  return (
    <div className={type === "HIGH" ? "queue-box high-queue" : "queue-box"}>
      <h3>{title}</h3>

      <div className="label">Queue List:</div>
      <ul className="queue-list">
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>

      <div className="label">Duration:</div>
      <QueueDuration tasks={tasks} maxDuration={maxDuration} />
    </div>
  );
}