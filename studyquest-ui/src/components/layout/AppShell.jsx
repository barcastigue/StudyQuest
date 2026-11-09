import Sidebar from "./Sidebar.jsx";
import MobileTopBar from "./MobileTopBar.jsx";
import MobileTabs from "./MobileTabs.jsx";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <MobileTopBar />
      <main className="main-content">{children}</main>
      <MobileTabs />
    </div>
  );
}
