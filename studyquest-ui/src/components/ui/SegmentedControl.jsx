export default function SegmentedControl({ legend, options, value, onChange, large = false }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className={`segmented ${large ? "large" : ""}`.trim()}>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={value === option ? "selected" : ""}
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
