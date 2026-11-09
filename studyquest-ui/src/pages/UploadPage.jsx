import { useState } from "react";
import { FileText, Plus } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import ErrorBanner from "../components/ui/ErrorBanner.jsx";
import Field from "../components/ui/Field.jsx";
import DropZone from "../components/upload/DropZone.jsx";
import FileRow from "../components/upload/FileRow.jsx";
import UploadStep from "../components/upload/UploadStep.jsx";
import NewSubjectModal from "../components/subjects/NewSubjectModal.jsx";
import useUploads from "../hooks/useUploads.js";
import { INITIAL_UPLOADS } from "../data/library.js";
import { useLibrary } from "../context/LibraryContext.jsx";
import { useToast } from "../context/ToastContext.jsx";
import { validateStudyFile } from "../utils/validators.js";

export default function UploadPage() {
  const { subjects, addSubject, addMaterial } = useLibrary();
  const toast = useToast();
  const uploads = useUploads(INITIAL_UPLOADS);
  const [subject, setSubject] = useState(subjects[0]?.name ?? "");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    const problem = validateStudyFile(file);
    setError(problem);
    if (problem) return;
    if (!subject) return setError("Create a subject before adding a study material.");
    uploads.add(file.name, subject);
    addMaterial(subject, file.name);
  };

  const createSubject = (name) => {
    const created = addSubject(name);
    if (!created) return false;
    setSubject(created);
    toast("Subject created");
    return true;
  };

  return (
    <div className="page">
      <PageHeader
        eyebrow="Build your library"
        title="Upload material"
        subtitle="Turn a set of notes into something you can practice."
      />
      <div className="step-layout">
        <UploadStep number={1} title="Choose a subject" description="Keep your quizzes organized.">
          <Field label="Subject">
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              {subjects.map((s) => (
                <option key={s.name}>{s.name}</option>
              ))}
            </select>
          </Field>
          <button type="button" className="text-button" onClick={() => setModalOpen(true)}>
            <Plus size={16} /> Create a new subject
          </button>
        </UploadStep>

        <UploadStep number={2} title="Add your notes" description="We’ll prepare the quiz questions for you.">
          <DropZone onFile={handleFile} />
          {error && (
            <ErrorBanner title="We couldn’t add that file" onDismiss={() => setError("")}>
              {error}
            </ErrorBanner>
          )}
        </UploadStep>

        <UploadStep
          number={3}
          title="Your materials"
          description="Processing may take a minute."
          action={
            uploads.items.length > 0 && (
              <button type="button" className="text-button quiet" onClick={uploads.clear}>
                Clear list
              </button>
            )
          }
        >
          {uploads.items.length === 0 ? (
            <EmptyState icon={FileText} title="Your study materials will show up here.">
              Add a PDF or DOCX above to get started.
            </EmptyState>
          ) : (
            <div className="file-list">
              {uploads.items.map((item, i) => (
                <FileRow key={`${item.name}-${i}`} item={item} onRemove={() => uploads.remove(i)} />
              ))}
            </div>
          )}
        </UploadStep>
      </div>
      {modalOpen && <NewSubjectModal onClose={() => setModalOpen(false)} onCreate={createSubject} />}
    </div>
  );
}
