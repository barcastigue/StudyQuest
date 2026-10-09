export default function TaskControls({ onAdd, onAdmit, children }) {
  return (
    <div className="controls">
      <button className="btn" onClick={onAdd}>Add random task</button>
      {children}
      <button className="btn" onClick={onAdmit}>Admit task</button>
    </div>
  );
}