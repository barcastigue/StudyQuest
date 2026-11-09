import { ArrowRight, Zap } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import Button from "../components/ui/Button.jsx";
import ChoiceGroup from "../components/ui/ChoiceGroup.jsx";
import Field from "../components/ui/Field.jsx";
import SegmentedControl from "../components/ui/SegmentedControl.jsx";
import { DIFFICULTIES, QUIZ_TYPES } from "../data/quizOptions.js";
import { useLibrary } from "../context/LibraryContext.jsx";
import { useQuiz } from "../context/QuizContext.jsx";

export default function QuizStartPage() {
  const { subjects } = useLibrary();
  const { config, setConfig, total, start } = useQuiz();

  return (
    <div className="page quiz-start-page">
      <PageHeader
        eyebrow="Test your recall"
        title="Build a quiz"
        subtitle="Choose your setup, then settle in and focus."
      />
      <section className="quiz-setup">
        <div className="setup-intro">
          <span className="setup-icon">
            <Zap size={28} />
          </span>
          <h2>Start a new session</h2>
          <p>About 3 minutes · {total} questions</p>
        </div>
        <div className="setup-fields">
          <Field label="Subject">
            <select value={config.subject} onChange={(e) => setConfig({ subject: e.target.value })}>
              {subjects.map((s) => (
                <option key={s.name}>{s.name}</option>
              ))}
            </select>
          </Field>
          <ChoiceGroup
            variant="cards"
            legend="Quiz type"
            options={QUIZ_TYPES}
            value={config.type}
            onChange={(type) => setConfig({ type })}
          />
          <SegmentedControl
            large
            legend="Difficulty"
            options={DIFFICULTIES}
            value={config.difficulty}
            onChange={(difficulty) => setConfig({ difficulty })}
          />
        </div>
        <Button onClick={start} className="start-button">
          Start quiz <ArrowRight size={17} />
        </Button>
      </section>
    </div>
  );
}
