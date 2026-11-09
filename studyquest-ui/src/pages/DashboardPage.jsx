import { Upload } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import Button from "../components/ui/Button.jsx";
import StatCard, { PercentValue, StatRow, StreakStatCard } from "../components/ui/StatCard.jsx";
import ContinueHero from "../components/dashboard/ContinueHero.jsx";
import WeeklyXpCard from "../components/dashboard/WeeklyXpCard.jsx";
import StreakWeekCard from "../components/dashboard/StreakWeekCard.jsx";
import BadgesCard from "../components/dashboard/BadgesCard.jsx";
import QuizBuilderBanner from "../components/dashboard/QuizBuilderBanner.jsx";
import { BADGES } from "../data/badges.js";
import { DEMO_TODAY_LABEL, RECENT_SESSION, STREAK_WEEK, WEEK_XP } from "../data/demo.js";
import { useApp } from "../context/AppContext.jsx";
import { useQuiz } from "../context/QuizContext.jsx";
import { firstName, levelInfo } from "../utils/helpers.js";

export default function DashboardPage() {
  const { user, stats, navigate } = useApp();
  const { config, setConfig } = useQuiz();
  const { level, withinLevel, nextLevelXp } = levelInfo(stats.xp);

  const startFromRecent = () => {
    setConfig({ subject: RECENT_SESSION.subject });
    navigate("quiz");
  };

  return (
    <div className="page dashboard-page">
      <PageHeader
        className="greeting"
        eyebrow={DEMO_TODAY_LABEL}
        eyebrowAs="div"
        title={`Hi, ${firstName(user.name)}`}
        subtitle="Keep your streak going today."
        action={
          <Button onClick={() => navigate("upload")}>
            <Upload size={17} /> Upload material
          </Button>
        }
      />

      <ContinueHero session={RECENT_SESSION} onTakeQuiz={startFromRecent} onPractice={startFromRecent} />

      <StatRow>
        <StatCard label="Level" value={level} note={`${withinLevel}/${nextLevelXp} XP to next level`} />
        <StreakStatCard streak={stats.streak} note="day streak" />
        <StatCard label="Completed" value={stats.quizzesCompleted} note="quizzes completed" />
        <StatCard
          label="Average score"
          value={<PercentValue value={stats.averageScore} />}
          note="Keep building momentum"
        />
      </StatRow>

      <div className="dashboard-grid">
        <WeeklyXpCard values={WEEK_XP} todayIndex={STREAK_WEEK.todayIndex} />
        <StreakWeekCard {...STREAK_WEEK} streak={stats.streak} />
      </div>

      <BadgesCard badges={BADGES} onViewProgress={() => navigate("progress")} />

      <QuizBuilderBanner config={config} onChange={setConfig} onBuild={() => navigate("quiz")} />
    </div>
  );
}
