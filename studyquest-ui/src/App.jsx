import AppShell from "./components/layout/AppShell.jsx";
import { AppProvider, useApp } from "./context/AppContext.jsx";
import { LibraryProvider } from "./context/LibraryContext.jsx";
import { QuizProvider, useQuiz } from "./context/QuizContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";
import QuizQuestionPage from "./pages/QuizQuestionPage.jsx";
import QuizResultPage from "./pages/QuizResultPage.jsx";
import QuizStartPage from "./pages/QuizStartPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import SubjectsPage from "./pages/SubjectsPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";

// Pages that live inside the sidebar shell. "quiz" is the setup page;
// the question and result steps take over the full screen (see Router).
const shellPages = {
  dashboard: DashboardPage,
  upload: UploadPage,
  subjects: SubjectsPage,
  quiz: QuizStartPage,
  progress: ProgressPage,
  settings: SettingsPage,
};

function Router() {
  const { loggedIn, screen } = useApp();
  const { phase } = useQuiz();

  if (!loggedIn) return <LoginPage />;
  if (screen === "quiz" && phase === "question") return <QuizQuestionPage />;
  if (screen === "quiz" && phase === "result") return <QuizResultPage />;

  const Page = shellPages[screen] ?? DashboardPage;
  return (
    <AppShell>
      <Page />
    </AppShell>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppProvider>
        <LibraryProvider>
          <QuizProvider>
            <Router />
          </QuizProvider>
        </LibraryProvider>
      </AppProvider>
    </ToastProvider>
  );
}
