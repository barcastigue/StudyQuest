import { Menu } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";
import Brand from "./Brand.jsx";

export default function MobileTopBar() {
  const { navigate } = useApp();
  return (
    <div className="mobile-top">
      <Brand as="button" size={20} onClick={() => navigate("dashboard")} />
      <button type="button" aria-label="Open settings" onClick={() => navigate("settings")}>
        <Menu size={22} />
      </button>
    </div>
  );
}
