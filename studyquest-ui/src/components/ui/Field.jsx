/** Label + control + optional error / hint. Pass the input, select, etc. as children. */
export default function Field({ label, error, hint, children }) {
  return (
    <label className="field-label">
      {label}
      {children}
      {error && <span className="error-text">{error}</span>}
      {hint && <span className="field-hint">{hint}</span>}
    </label>
  );
}
