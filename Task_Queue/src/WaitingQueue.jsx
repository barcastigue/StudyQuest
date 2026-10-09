import TaskItem from "./TaskItem";

export default function WaitingQueue({ tasks }) {
  return (
    <div className="waiting">
      <h2>Task Queue</h2>
      <ul className="waiting-list" title={`${tasks.length} waiting`}>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>
    </div>
  );
}