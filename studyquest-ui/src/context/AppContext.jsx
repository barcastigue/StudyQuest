import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DEMO_STATS, DEMO_USER } from "../data/demo.js";

const AppContext = createContext(null);

/** Auth, current screen and the (demo) user + stats. */
export function AppProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [screen, setScreen] = useState("dashboard");
  const [user, setUser] = useState(DEMO_USER);

  const navigate = useCallback((next) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const login = useCallback(() => setLoggedIn(true), []);
  const logout = useCallback(() => {
    setLoggedIn(false);
    setScreen("dashboard");
  }, []);
  const updateName = useCallback((name) => setUser((u) => ({ ...u, name })), []);

  const value = useMemo(
    () => ({ loggedIn, screen, navigate, login, logout, user, updateName, stats: DEMO_STATS }),
    [loggedIn, screen, navigate, login, logout, user, updateName],
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
