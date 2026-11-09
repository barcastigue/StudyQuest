import { X } from "lucide-react";
import Brand from "../layout/Brand.jsx";

export default function FocusHeader({ onExit }) {
  return (
    <header>
      <Brand as="button" className="focus-brand" size={20} onClick={onExit} />
      <button type="button" className="exit-quiz" onClick={onExit}>
        <X size={18} /> Exit quiz
      </button>
    </header>
  );
}
