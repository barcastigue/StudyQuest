import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Toast from "../components/ui/Toast.jsx";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const timer = useRef(null);

  const showToast = useCallback((text) => {
    window.clearTimeout(timer.current);
    setMessage(text);
    timer.current = window.setTimeout(() => setMessage(""), 2600);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {message && <Toast message={message} />}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
