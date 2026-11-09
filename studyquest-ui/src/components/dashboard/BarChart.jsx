import { WEEKDAYS } from "../../data/demo.js";

export default function BarChart({ values, todayIndex }) {
  return (
    <div className="bar-chart">
      {values.map((value, i) => (
        <div className={`bar-item ${i === todayIndex ? "today" : ""}`.trim()} key={WEEKDAYS[i]}>
          <span className="bar-value">{value}</span>
          <div className="bar-shell">
            <i style={{ height: `${value}%` }} />
          </div>
          <small>{WEEKDAYS[i]}</small>
        </div>
      ))}
    </div>
  );
}
