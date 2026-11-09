import SectionHeading from "../ui/SectionHeading.jsx";

export default function UploadStep({ number, title, description, action, children }) {
  return (
    <section className="upload-step">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <SectionHeading title={title} subtitle={description}>
          {action}
        </SectionHeading>
        {children}
      </div>
    </section>
  );
}
