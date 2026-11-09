import { Flame, ShieldCheck } from "lucide-react";
import Eyebrow from "../ui/Eyebrow.jsx";
import ProgressBar from "../ui/ProgressBar.jsx";
import { levelInfo } from "../../utils/helpers.js";

export default function LevelCard({ xp, streak }) {
  const { level, withinLevel, nextLevelXp, percent } = levelInfo(xp);
  return (
    <aside className="level-card">
      <div className="level-emblem">
        <ShieldCheck size={29} />
      </div>
      <Eyebrow light>Current standing</Eyebrow>
      <h2>Level {level}</h2>
      <strong>
        {xp} <small>XP</small>
      </strong>
      <ProgressBar value={percent} amber />
      <div className="level-meta">
        <span>
          {withinLevel} / {nextLevelXp} to next level
        </span>
        <span className="icon-label">
          <Flame size={12} /> {streak} day streak
        </span>
      </div>
    </aside>
  );
}
