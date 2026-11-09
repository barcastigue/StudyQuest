import { useState } from "react";
import { BookOpen, Plus } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import Button from "../components/ui/Button.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import NewSubjectModal from "../components/subjects/NewSubjectModal.jsx";
import SubjectCard from "../components/subjects/SubjectCard.jsx";
import { useApp } from "../context/AppContext.jsx";
import { useLibrary } from "../context/LibraryContext.jsx";
import { useQuiz } from "../context/QuizContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

export default function SubjectsPage() {
  const { navigate } = useApp();
  const { subjects, addSubject } = useLibrary();
  const { setConfig } = useQuiz();
  const toast = useToast();
  const [modalOpen, setModalOpen] = useState(false);

  const createSubject = (name) => {
    if (!addSubject(name)) return false;
    toast("Subject created");
    return true;
  };

  const generateQuiz = (subject) => {
    setConfig({ subject: subject.name });
    navigate("quiz");
  };

  const newSubjectButton = (
    <Button onClick={() => setModalOpen(true)}>
      <Plus size={17} /> New subject
    </Button>
  );

  return (
    <div className="page">
      <PageHeader
        eyebrow="Your study library"
        title="Subjects"
        subtitle="Give every course a place to grow."
        action={newSubjectButton}
      />
      {subjects.length === 0 ? (
        <EmptyState large icon={BookOpen} title="No subjects yet" action={newSubjectButton}>
          Create a subject to organize your first study material.
        </EmptyState>
      ) : (
        <div className="subject-list">
          {subjects.map((subject, i) => (
            <SubjectCard
              key={subject.name}
              subject={subject}
              position={i + 1}
              onGenerateQuiz={() => generateQuiz(subject)}
              onAddMaterial={() => navigate("upload")}
            />
          ))}
        </div>
      )}
      {modalOpen && <NewSubjectModal onClose={() => setModalOpen(false)} onCreate={createSubject} />}
    </div>
  );
}
