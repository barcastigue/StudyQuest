import { useState, useRef, useEffect } from "react";
import TaskControls from "./TaskControls";
import WaitingQueue from "./WaitingQueue";
import ServiceQueue from "./ServiceQueue";
import "./App.css";

const MAX_DURATION = 200;
const TICK_MS = 100;
const STEP = 1;

const load = (queue) => queue.reduce((sum, t) => sum + t.duration, 0);

function pickNext(tasks) {
  const highIndex = tasks.findIndex((t) => t.priority === "HIGH");
  if (highIndex !== -1) return tasks[highIndex];
  return tasks[0];
}

function leastLoadedIndex(queues) {
  let best = 0;
  for (let i = 1; i < queues.length; i++) {
    if (load(queues[i]) < load(queues[best])) best = i;
  }
  return best;
}

function advance(queue) {
  if (queue.length === 0) return queue;
  const [head, ...rest] = queue;
  if (head.remaining - STEP <= 0) return rest;
  return [{ ...head, remaining: head.remaining - STEP }, ...rest];
}

export default function App() {
  const [waitingTasks, setWaitingTasks] = useState([]);
  const [highQueue, setHighQueue] = useState([]);
  const [regularQueues, setRegularQueues] = useState([[], [], []]);
  const nextId = useRef(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setHighQueue(advance);
      setRegularQueues((prev) => prev.map(advance));
    }, TICK_MS);
    return () => clearInterval(timer);
  }, []);

  function addRandomTask() {
    const task = {
      id: nextId.current++,
      duration: Math.floor(Math.random() * (MAX_DURATION - 4)) + 5,
      priority: Math.random() < 0.3 ? "HIGH" : "REGULAR",
    };
    setWaitingTasks((prev) => [...prev, task]);
  }

  function admitTask() {
    const picked = pickNext(waitingTasks);
    if (!picked) return;

    const task = { ...picked, remaining: picked.duration };

    setWaitingTasks((prev) => prev.filter((t) => t.id !== task.id));

    if (task.priority === "HIGH") {
      setHighQueue((prev) => [...prev, task]);
    } else {
      setRegularQueues((prev) => {
        const i = leastLoadedIndex(prev);
        return prev.map((q, idx) => (idx === i ? [...q, task] : q));
      });
    }
  }

  return (
    <div className="frame">
      <section className="left">
        <TaskControls onAdd={addRandomTask} onAdmit={admitTask}>
          <WaitingQueue tasks={waitingTasks} />
        </TaskControls>
      </section>

      <section className="right">
        <ServiceQueue
          title="High Priority Queue 1"
          tasks={highQueue}
          type="HIGH"
          maxDuration={MAX_DURATION}
        />
        {regularQueues.map((q, i) => (
          <ServiceQueue
            key={i}
            title={`Regular Queue ${i + 2}`}
            tasks={q}
            type="REGULAR"
            maxDuration={MAX_DURATION}
          />
        ))}
      </section>
    </div>
  );
}