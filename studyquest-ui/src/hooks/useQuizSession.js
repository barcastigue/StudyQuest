import { useCallback, useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions.js";
import { DEFAULT_QUIZ_CONFIG } from "../data/quizOptions.js";

/**
 * Quiz setup (config) plus the running session.
 * phase: "start" -> "question" -> "result"
 */
export default function useQuizSession() {
  const [config, setConfigState] = useState(DEFAULT_QUIZ_CONFIG);
  const [phase, setPhase] = useState("start");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const setConfig = useCallback((patch) => setConfigState((c) => ({ ...c, ...patch })), []);

  const start = useCallback(() => {
    setPhase("question");
    setIndex(0);
    setSelected(null);
    setScore(0);
  }, []);

  const answer = useCallback(
    (choice) => {
      if (selected !== null) return;
      setSelected(choice);
      if (choice === QUESTIONS[index].correct) setScore((s) => s + 1);
    },
    [selected, index],
  );

  const next = useCallback(() => {
    if (index === QUESTIONS.length - 1) {
      setPhase("result");
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }, [index]);

  const reset = useCallback(() => setPhase("start"), []);

  return useMemo(
    () => ({
      config,
      setConfig,
      phase,
      index,
      selected,
      score,
      question: QUESTIONS[index],
      total: QUESTIONS.length,
      start,
      answer,
      next,
      reset,
    }),
    [config, setConfig, phase, index, selected, score, start, answer, next, reset],
  );
}
