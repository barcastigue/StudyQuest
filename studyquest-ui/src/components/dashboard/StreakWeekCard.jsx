import { Check, Target } from "lucide-react";
import Panel from "../ui/Panel.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { plural } from "../../utils/helpers.js";

const LETTERS = ["M", "T", "W", "T", "F", "S", "S"];

export default function StreakWeekCard({ firstDate, todayIndex, streak }) {
  return (
    <Panel className="streak-calendar">
      <SectionHeading eyebrow="Daily rhythm" title="Your streak">
        <Target size={22} />
      </SectionHeading>
      <div className="week-days">
        {LETTERS.map((letter, i) => {
          const status = i < todayIndex ? "done" : i === todayIndex ? "today" : "future";
          return (
            <div key={i} className={status}>
              <span>{letter}</span>
              <i>{status === "done" ? <Check size={16} /> : firstDate + i}</i>
            </div>
          );
        })}
      </div>
      <p>
        <strong>{plural(streak, "day")} strong.</strong> One short quiz keeps your momentum going.
      </p>
    </Panel>
  );
}
