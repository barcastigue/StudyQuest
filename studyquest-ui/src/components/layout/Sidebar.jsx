import { ChevronDown, Flame } from "lucide-react";
import { navItems } from "../../data/nav.js";
import { useApp } from "../../context/AppContext.jsx";
import { initials, levelInfo } from "../../utils/helpers.js";
import Brand from "./Brand.jsx";
import ProgressBar from "../ui/ProgressBar.jsx";

export default function Sidebar() {
  const { screen, navigate, user, stats } = useApp();
  const { level, withinLevel, nextLevelXp, percent } = levelInfo(stats.xp);

  return (
    <aside className="sidebar">
      <Brand as="button" onClick={() => navigate("dashboard")} />
      <nav aria-label="Main navigation">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            type="button"
            key={id}
            className={screen === id ? "active" : ""}
            aria-current={screen === id ? "page" : undefined}
            onClick={() => navigate(id)}
          >
            <Icon size={19} />
            {label}
          </button>
        ))}
      </nav>
      <div className="sidebar-profile">
        <button type="button" className="profile-name" onClick={() => navigate("settings")}>
          <span className="avatar">{initials(user.name)}</span>
          <span>
            <strong>{user.name}</strong>
            <small>Level {level}</small>
          </span>
          <ChevronDown size={15} />
        </button>
        <div className="xp-label">
          <span>
            {withinLevel} / {nextLevelXp} XP
          </span>
          <span>{Math.round(percent)}%</span>
        </div>
        <ProgressBar value={percent} amber />
        <div className="streak-mini">
          <Flame size={15} /> <span>{stats.streak} day streak</span>
        </div>
      </div>
    </aside>
  );
}
