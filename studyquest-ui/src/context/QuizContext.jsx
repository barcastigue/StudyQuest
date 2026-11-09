import { createContext, useContext } from "react";
import useQuizSession from "../hooks/useQuizSession.js";

const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const quiz = useQuizSession();
  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
}

export const useQuiz = () => useContext(QuizContext);
