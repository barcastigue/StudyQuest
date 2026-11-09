export function StatRow({ className = "", children }) {
  return (
    <section className={`stat-row ${className}`.trim()} aria-label="Learning summary">
      {children}
    </section>
  );
}

export function PercentValue({ value }) {
  return (
    <>
      {value}
      <em>%</em>
    </>
  );
}

export default function StatCard({ label, value, note, className = "" }) {
  return (
    <div className={`stat ${className}`.trim()}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </div>
  );
}

/** The one place the fire emoji lives. */
export function StreakStatCard({ streak, note }) {
  return (
    <StatCard
      className="streak-stat"
      label="Current streak"
      value={
        <>
          <i>🔥</i> {streak}
        </>
      }
      note={note}
    />
  );
}
