import { useEffect } from "react";
import { X } from "lucide-react";
import Eyebrow from "./Eyebrow.jsx";

/** Rendered as a <form> so Enter submits. Click the backdrop or press Esc to close. */
export default function Modal({ eyebrow, title, onClose, onSubmit, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      <form className="modal" role="dialog" aria-modal="true" aria-label={title} onSubmit={onSubmit}>
        <div className="modal-head">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2>{title}</h2>
          </div>
          <button type="button" aria-label="Close modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        {children}
      </form>
    </div>
  );
}
