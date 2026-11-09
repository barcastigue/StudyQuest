export default function SettingsSection({ icon: Icon, title, description, className = "", children }) {
  return (
    <section className={`settings-section ${className}`.trim()}>
      <div className="settings-title">
        <Icon size={21} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
