import Chip from "../ui/Chip.jsx";
import Panel from "../ui/Panel.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import BarChart from "./BarChart.jsx";

export default function WeeklyXpCard({ values, todayIndex }) {
  const total = values.reduce((sum, v) => sum + v, 0);
  return (
    <Panel className="chart-block">
      <SectionHeading eyebrow="Last 7 days" title="XP this week">
        <Chip tone="amber">+{total} XP</Chip>
      </SectionHeading>
      <BarChart values={values} todayIndex={todayIndex} />
    </Panel>
  );
}
