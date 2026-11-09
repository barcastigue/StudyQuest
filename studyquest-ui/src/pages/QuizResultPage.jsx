import { RotateCcw, Trophy, Zap } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Brand from "../components/layout/Brand.jsx";
import ScoreRing from "../components/quiz/ScoreRing.jsx";
import { XP_PER_CORRECT } from "../data/questions.js";
import { useApp } from "../context/AppContext.jsx";
import { useQuiz } from "../context/QuizContext.jsx";
import { firstName, levelInfo } from "../utils/helpers.js";

export default function QuizResultPage() {
  const { user, stats, navigate } = useApp();
  const { score, total, start, reset } = useQuiz();

  const earned = score * XP_PER_CORRECT;
  const { level, nextLevelXp } = levelInfo(stats.xp);
  const remaining = nextLevelXp - (stats.xp + earned);
  const xpNote = remaining > 0 ? `${remaining} XP until Level ${level + 1}` : `You reached Level ${level + 1}`;

  const backToDashboard = () => {
    reset();
    navigate("dashboard");
  };

  return (
    <main className="result-page">
      <Brand as="button" className="focus-brand" size={20} onClick={backToDashboard} />
      <section className="result-card">
        <div className="result-symbol">
          <Trophy size={28} />
        </div>
        <Eyebrow>Quiz complete</Eyebrow>
        <h1>Nice work, {firstName(user.name)}.</h1>
        <p>You gave your memory a solid workout today.</p>
        <ScoreRing score={score} total={total} />
        <div className="result-xp">
          <Zap size={20} />
          <div>
            <strong>+{earned} XP earned</strong>
            <span>{xpNote}</span>
          </div>
        </div>
        <div className="result-actions">
          <Button onClick={start}>
            <RotateCcw size={17} /> Try again
          </Button>
          <Button variant="secondary" onClick={backToDashboard}>
            Back to dashboard
          </Button>
        </div>
      </section>
    </main>
  );
}
