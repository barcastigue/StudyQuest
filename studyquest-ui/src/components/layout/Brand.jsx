import { BookOpen } from "lucide-react";

/** Wordmark. Pass as="button" + onClick when it should navigate. */
export default function Brand({ as: Tag = "div", className = "brand-mark", size = 21, ...props }) {
  return (
    <Tag className={className} {...(Tag === "button" ? { type: "button" } : {})} {...props}>
      <BookOpen size={size} /> StudyQuest
    </Tag>
  );
}
