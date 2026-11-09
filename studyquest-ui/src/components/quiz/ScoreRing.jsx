export default function ScoreRing({ score, total }) {
  const degrees = (score / total) * 360;
  return (
    <div className="score-ring" style={{ "--score": `${degrees}deg` }}>
      <div>
        <strong>
          {score}
          <small> / {total}</small>
        </strong>
        <span>You scored</span>
      </div>
    </div>
  );
}
