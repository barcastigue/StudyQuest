import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import AnswerFeedback from "../components/quiz/AnswerFeedback.jsx";
import AnswerOption from "../components/quiz/AnswerOption.jsx";
import FocusHeader from "../components/quiz/FocusHeader.jsx";
import QuizProgress from "../components/quiz/QuizProgress.jsx";
import { useQuiz } from "../context/QuizContext.jsx";

export default function QuizQuestionPage() {
  const { config, question, index, total, selected, answer, next, reset } = useQuiz();
  const answered = selected !== null;
  const isLast = index === total - 1;

  const stateOf = (i) => {
    if (!answered) return "";
    if (i === question.correct) return "correct";
    if (i === selected) return "incorrect";
    return "";
  };

  return (
    <main className="focus-mode">
      <FocusHeader onExit={reset} />
      <div className="focus-wrap">
        <div className="question-meta">
          <span>
            Question {index + 1} of {total}
          </span>
          <span>
            {config.subject} · {config.difficulty}
          </span>
        </div>
        <QuizProgress current={index + 1} total={total} />
        <section className="question-area">
          <Eyebrow>Choose one answer</Eyebrow>
          <h1>{question.question}</h1>
          <div className="answers">
            {question.answers.map((text, i) => (
              <AnswerOption
                key={text}
                letter={String.fromCharCode(65 + i)}
                text={text}
                state={stateOf(i)}
                disabled={answered}
                onClick={() => answer(i)}
              />
            ))}
          </div>
          {answered && <AnswerFeedback correct={selected === question.correct} explanation={question.explanation} />}
          {answered && (
            <Button onClick={next} className="next-question">
              {isLast ? "See results" : "Next question"} <ArrowRight size={17} />
            </Button>
          )}
        </section>
      </div>
    </main>
  );
}
