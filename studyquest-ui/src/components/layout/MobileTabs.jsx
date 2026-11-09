import { mobileNavItems } from "../../data/nav.js";
import { useApp } from "../../context/AppContext.jsx";

export default function MobileTabs() {
  const { screen, navigate } = useApp();
  return (
    <nav className="mobile-tabs" aria-label="Mobile navigation">
      {mobileNavItems.map(({ id, label, icon: Icon }) => (
        <button
          type="button"
          key={id}
          className={screen === id ? "active" : ""}
          onClick={() => navigate(id)}
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
