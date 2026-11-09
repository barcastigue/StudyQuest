import { X, XCircle } from "lucide-react";

export default function ErrorBanner({ title, children, onDismiss }) {
  return (
    <div className="error-banner">
      <XCircle size={19} />
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
      <button type="button" aria-label="Dismiss" onClick={onDismiss}>
        <X size={17} />
      </button>
    </div>
  );
}
