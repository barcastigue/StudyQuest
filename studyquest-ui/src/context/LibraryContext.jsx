import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { INITIAL_SUBJECTS } from "../data/library.js";

const LibraryContext = createContext(null);

/** Subjects and their uploaded materials, shared by Upload, Subjects and Quiz. */
export function LibraryProvider({ children }) {
  const [subjects, setSubjects] = useState(INITIAL_SUBJECTS);

  /** Returns the created name, or false when it is empty or already exists. */
  const addSubject = useCallback(
    (name) => {
      const clean = name.trim().replace(/\s+/g, " ");
      if (!clean) return false;
      if (subjects.some((s) => s.name.toLowerCase() === clean.toLowerCase())) return false;
      setSubjects((all) => [...all, { name: clean, icon: "book", materials: [] }]);
      return clean;
    },
    [subjects],
  );

  const addMaterial = useCallback((subjectName, fileName) => {
    setSubjects((all) =>
      all.map((s) =>
        s.name === subjectName
          ? { ...s, materials: [...s.materials, { name: fileName, date: "Uploaded just now" }] }
          : s,
      ),
    );
  }, []);

  const value = useMemo(() => ({ subjects, addSubject, addMaterial }), [subjects, addSubject, addMaterial]);
  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
}

export const useLibrary = () => useContext(LibraryContext);
