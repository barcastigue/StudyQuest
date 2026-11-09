import { Check } from "lucide-react";

/**
 * Single-select group of text options.
 * variant "grid"  -> compact chips (dashboard quiz builder)
 * variant "cards" -> larger option cards (quiz setup page)
 */
export default function ChoiceGroup({ legend, options, value, onChange, variant = "grid" }) {
  const cards = variant === "cards";
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className={cards ? "option-cards" : "choice-grid"}>
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              type="button"
              key={option}
              className={selected ? "selected" : ""}
              aria-pressed={selected}
              onClick={() => onChange(option)}
            >
              {cards ? (
                <span>{selected ? <Check size={17} /> : null}</span>
              ) : (
                selected && <Check size={15} />
              )}
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
