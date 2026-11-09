import { useState } from "react";
import Button from "../ui/Button.jsx";
import Field from "../ui/Field.jsx";
import Modal from "../ui/Modal.jsx";

/** onCreate(name) should return true when the subject was created. */
export default function NewSubjectModal({ onClose, onCreate }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (onCreate(name)) onClose();
    else setError("That subject already exists.");
  };

  return (
    <Modal eyebrow="New collection" title="Create a subject" onClose={onClose} onSubmit={submit}>
      <Field label="Subject name" error={error}>
        <input
          autoFocus
          value={name}
          placeholder="e.g. Organic Chemistry"
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />
      </Field>
      <div className="modal-actions">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={!name.trim()}>
          Create subject
        </Button>
      </div>
    </Modal>
  );
}
