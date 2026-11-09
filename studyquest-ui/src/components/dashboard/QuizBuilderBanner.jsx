import { ArrowRight } from "lucide-react";
import { DIFFICULTIES, QUIZ_TYPES } from "../../data/quizOptions.js";
import Button from "../ui/Button.jsx";
import ChoiceGroup from "../ui/ChoiceGroup.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import SegmentedControl from "../ui/SegmentedControl.jsx";

export default function QuizBuilderBanner({ config, onChange, onBuild }) {
  return (
    <section className="quiz-builder">
      <div>
        <Eyebrow light>Make it yours</Eyebrow>
        <h2>Choose your next challenge.</h2>
        <p>Every quiz type is ready to use. Pick the format that fits how you learn.</p>
      </div>
      <div className="builder-controls">
        <ChoiceGroup
          legend="Quiz type"
          options={QUIZ_TYPES}
          value={config.type}
          onChange={(type) => onChange({ type })}
        />
        <SegmentedControl
          legend="Difficulty"
          options={DIFFICULTIES}
          value={config.difficulty}
          onChange={(difficulty) => onChange({ difficulty })}
        />
        <Button className="button-paper" onClick={onBuild}>
          Build this quiz <ArrowRight size={17} />
        </Button>
      </div>
    </section>
  );
}
