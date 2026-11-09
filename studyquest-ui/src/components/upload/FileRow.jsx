import { FileText, X } from "lucide-react";
import Chip from "../ui/Chip.jsx";
import ProgressBar from "../ui/ProgressBar.jsx";

const STATUS_TONE = { Ready: "green", Uploading: "amber", Processing: "neutral" };

export default function FileRow({ item, onRemove }) {
  return (
    <div className="file-row">
      <div className="file-list-icon">
        <FileText size={20} />
      </div>
      <div className="file-details">
        <div>
          <strong>{item.name}</strong>
          <Chip tone={STATUS_TONE[item.status] ?? "neutral"}>{item.status}</Chip>
        </div>
        <p>
          {item.subject} · {item.progress}%
        </p>
        <ProgressBar value={item.progress} amber={item.status === "Uploading"} />
      </div>
      <button type="button" aria-label={`Remove ${item.name}`} onClick={onRemove}>
        <X size={17} />
      </button>
    </div>
  );
}
