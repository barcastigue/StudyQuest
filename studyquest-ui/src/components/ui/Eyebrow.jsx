export default function Eyebrow({ children, light = false, as: Tag = "span" }) {
  return <Tag className={`eyebrow ${light ? "light" : ""}`.trim()}>{children}</Tag>;
}
