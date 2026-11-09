export default function Chip({ children, tone = "green" }) {
  return <span className={`chip chip-${tone}`}>{children}</span>;
}
