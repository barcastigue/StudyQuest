import { padIndex } from "../../utils/helpers.js";

export default function TopicRow({ position, topic, score }) {
  return (
    <div className="topic-row">
      <span>{padIndex(position)}</span>
      <strong>{topic}</strong>
      <b>{score}</b>
    </div>
  );
}
