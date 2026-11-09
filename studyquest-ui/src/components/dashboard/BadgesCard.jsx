import { ArrowRight } from "lucide-react";
import Panel from "../ui/Panel.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

function Badge({ icon: Icon, title, caption }) {
  return (
    <div>
      <span>
        <Icon size={23} />
      </span>
      <p>
        <strong>{title}</strong>
        <small>{caption}</small>
      </p>
    </div>
  );
}

export default function BadgesCard({ badges, onViewProgress }) {
  return (
    <Panel className="badges-block">
      <SectionHeading eyebrow="Milestones" title="Badges earned">
        <button type="button" className="text-button" onClick={onViewProgress}>
          View progress <ArrowRight size={15} />
        </button>
      </SectionHeading>
      <div className="badges-row">
        {badges.map(({ id, ...badge }) => (
          <Badge key={id} {...badge} />
        ))}
      </div>
    </Panel>
  );
}
