export default function Panel({ className = "", children }) {
  return <section className={`section-block ${className}`.trim()}>{children}</section>;
}
