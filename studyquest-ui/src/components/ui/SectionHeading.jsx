import Eyebrow from "./Eyebrow.jsx";

/** Left: optional eyebrow, title and subtitle. Right: whatever you pass as children (chip, icon, link). */
export default function SectionHeading({ eyebrow, title, subtitle, children }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
