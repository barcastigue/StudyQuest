import Eyebrow from "../ui/Eyebrow.jsx";

export default function PageHeader({ eyebrow, eyebrowAs, title, subtitle, action, className = "" }) {
  return (
    <header className={`page-header ${className}`.trim()}>
      <div>
        {eyebrow && <Eyebrow as={eyebrowAs}>{eyebrow}</Eyebrow>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </header>
  );
}
