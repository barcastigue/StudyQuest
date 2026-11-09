export default function QuizProgress({ current, total }) {
  return (
    <div className="quiz-progress" aria-label={`Question ${current} of ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < current ? "filled" : ""} />
      ))}
    </div>
  );
}
