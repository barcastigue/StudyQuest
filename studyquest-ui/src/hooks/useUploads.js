import { useCallback, useEffect, useState } from "react";

const TICK_MS = 400;
const STEP = 14;

/** Upload list with a simulated progress animation (demo mode, nothing is sent anywhere). */
export default function useUploads(initial = []) {
  const [items, setItems] = useState(initial);
  const hasUploading = items.some((item) => item.status === "Uploading");

  useEffect(() => {
    if (!hasUploading) return undefined;
    const timer = window.setInterval(() => {
      setItems((current) =>
        current.map((item) => {
          if (item.status !== "Uploading") return item;
          const progress = Math.min(item.progress + STEP, 100);
          return { ...item, progress, status: progress === 100 ? "Processing" : "Uploading" };
        }),
      );
    }, TICK_MS);
    return () => window.clearInterval(timer);
  }, [hasUploading]);

  const add = useCallback(
    (name, subject) =>
      setItems((current) => [{ name, subject, status: "Uploading", progress: 8 }, ...current]),
    [],
  );
  const remove = useCallback(
    (index) => setItems((current) => current.filter((_, i) => i !== index)),
    [],
  );
  const clear = useCallback(() => setItems([]), []);

  return { items, add, remove, clear };
}
