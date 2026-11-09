import { Target } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Panel from "../components/ui/Panel.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import StatCard, { PercentValue, StatRow, StreakStatCard } from "../components/ui/StatCard.jsx";
import GoalRow from "../components/progress/GoalRow.jsx";
import TopicRow from "../components/progress/TopicRow.jsx";
import { WEAK_TOPICS, WEEKLY_QUIZ_GOAL } from "../data/demo.js";
import { useApp } from "../context/AppContext.jsx";
import { levelInfo } from "../utils/helpers.js";

export default function ProgressPage() {
  const { stats } = useApp();
  const { level, withinLevel, nextLevelXp, percent } = levelInfo(stats.xp);
  const { done, target } = WEEKLY_QUIZ_GOAL;

  return (
    <div className="page">
      <PageHeader
        eyebrow="A view of the journey"
        title="Your progress"
        subtitle="Small sessions are adding up. Here’s what you’ve built."
      />

      <section className="progress-hero">
        <div>
          <Eyebrow light>Learning summary</Eyebrow>
          <h2>
            Momentum looks good
            <br />
            on you.
          </h2>
          <p>You completed your weekly goal and raised your average score.</p>
        </div>
        <div className="progress-big-stat">
          <span>Total XP</span>
          <strong>{stats.totalXp}</strong>
          <small>+{stats.weeklyXpGain} this week</small>
        </div>
      </section>

      <StatRow className="progress-stats">
        <StatCard label="Current level" value={level} note={`${stats.xp} XP earned`} />
        <StatCard label="Completed" value={stats.quizzesCompleted} note="quizzes completed" />
        <StatCard
          label="Average"
          value={<PercentValue value={stats.averageScore} />}
          note="Across all quizzes"
        />
        <StreakStatCard streak={stats.streak} note="days in a row" />
      </StatRow>

      <div className="progress-grid">
        <Panel className="goals">
          <SectionHeading eyebrow="Keep moving" title="Study goals">
            <Target size={22} />
          </SectionHeading>
          <GoalRow
            title="Weekly quiz goal"
            caption={`${done} of ${target} completed`}
            percent={(done / target) * 100}
          />
          <GoalRow
            title="Next level"
            caption={`${withinLevel} of ${nextLevelXp} XP`}
            percent={percent}
            amber
          />
        </Panel>
        <Panel className="weak-topics">
          <SectionHeading eyebrow="Review next" title="Weak topics" />
          {WEAK_TOPICS.map((item, i) => (
            <TopicRow key={item.topic} position={i + 1} {...item} />
          ))}
        </Panel>
      </div>
    </div>
  );
}
