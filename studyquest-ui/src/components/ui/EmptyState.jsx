export default function EmptyState({ icon: Icon, title, children, action, large = false }) {
  const Heading = large ? "h2" : "h3";
  return (
    <div className={`empty-state ${large ? "large" : ""}`.trim()}>
      {Icon && <Icon size={large ? 32 : 28} />}
      <Heading>{title}</Heading>
      <p>{children}</p>
      {action}
    </div>
  );
}
