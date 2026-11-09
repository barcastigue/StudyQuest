import {
  BookOpen,
  CircleUserRound,
  Gauge,
  LayoutDashboard,
  Settings,
  Upload,
  Zap,
} from "lucide-react";

export const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "upload", label: "Upload", icon: Upload },
  { id: "subjects", label: "Subjects", icon: BookOpen },
  { id: "quiz", label: "Quiz", icon: Zap },
  { id: "progress", label: "Progress", icon: Gauge },
  { id: "settings", label: "Settings", icon: Settings },
];

// Same order, but Settings shows as "Profile" in the mobile tab bar.
export const mobileNavItems = navItems.map((item) =>
  item.id === "settings" ? { ...item, label: "Profile", icon: CircleUserRound } : item,
);
