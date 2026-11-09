import { ArrowRight, BookOpen, FileText, FlaskConical } from "lucide-react";
import Button from "../ui/Button.jsx";
import Chip from "../ui/Chip.jsx";
import { padIndex, plural } from "../../utils/helpers.js";

const SUBJECT_ICONS = { book: BookOpen, flask: FlaskConical };

export default function SubjectCard({ subject, position, onGenerateQuiz, onAddMaterial }) {
  const Icon = SUBJECT_ICONS[subject.icon] ?? BookOpen;
  const count = subject.materials.length;
  const hasMaterials = count > 0;

  return (
    <article className="subject-card">
      <div className="subject-index">{padIndex(position)}</div>
      <div className="subject-info">
        <div className="subject-icon">
          <Icon size={24} />
        </div>
        <div>
          <Chip tone={hasMaterials ? "green" : "neutral"}>
            {hasMaterials ? plural(count, "material") : "No materials"}
          </Chip>
          <h2>{subject.name}</h2>
          {hasMaterials ? (
            subject.materials.map((file, i) => (
              <div className="material-line" key={`${file.name}-${i}`}>
                <FileText size={17} />
                <span>
                  <strong>{file.name}</strong>
                  <small>{file.date}</small>
                </span>
              </div>
            ))
          ) : (
            <p className="muted">Add notes to begin generating quizzes.</p>
          )}
        </div>
      </div>
      <Button
        variant={hasMaterials ? "primary" : "secondary"}
        onClick={hasMaterials ? onGenerateQuiz : onAddMaterial}
      >
        {hasMaterials ? "Generate quiz" : "Add material"} <ArrowRight size={16} />
      </Button>
    </article>
  );
}
