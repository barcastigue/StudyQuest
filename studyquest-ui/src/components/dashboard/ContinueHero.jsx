import { ArrowRight, FileText } from "lucide-react";
import Button from "../ui/Button.jsx";
import Chip from "../ui/Chip.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";

export default function ContinueHero({ session, onTakeQuiz, onPractice }) {
  const { subject, file, lastScore, questionsReady } = session;
  return (
    <section className="continue-hero">
      <div className="continue-main">
        <Eyebrow as="div" light>
          Continue studying
        </Eyebrow>
        <div className="hero-file">
          <div className="file-icon">
            <FileText size={26} />
          </div>
          <div>
            <Chip>{subject}</Chip>
            <h2>{file}</h2>
            <p>
              Last score <strong>{lastScore}%</strong> · {questionsReady} questions ready
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <Button className="button-paper" onClick={onTakeQuiz}>
            Take a new quiz <ArrowRight size={17} />
          </Button>
          <Button variant="ghost" className="button-light" onClick={onPractice}>
            Practice weak topics
          </Button>
        </div>
      </div>
      <div className="hero-score">
        <span>Last score</span>
        <strong>{lastScore}</strong>
        <small>%</small>
        <div className="score-rule">
          <span style={{ width: `${lastScore}%` }} />
        </div>
      </div>
    </section>
  );
}
