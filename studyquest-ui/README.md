# StudyQuest UI

The Figma Make design, split into reusable React components. Same look (`src/styles.css` is the Figma stylesheet, class names unchanged).

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/

To serve from Spring Boot, uncomment `build.outDir` in `vite.config.js`, then `npm run build`.

## Structure
    src/
      App.jsx            providers + router (login -> shell pages -> full-screen quiz)
      context/           AppContext (auth, screen, user, stats), LibraryContext (subjects, materials),
                         QuizContext (quiz config + session), ToastContext
      hooks/             useQuizSession, useUploads
      data/              demo.js (placeholder user/stats), questions, quizOptions, nav, badges, library
      utils/             helpers (levelInfo, plural...), validators (email, password, file checks)
      components/
        ui/              Button, Chip, ProgressBar, Toggle, Toast, Eyebrow, Field, SectionHeading, Panel,
                         StatCard (+ StreakStatCard), EmptyState, ErrorBanner, Modal, ChoiceGroup, SegmentedControl
        layout/          AppShell, Sidebar, MobileTopBar, MobileTabs, PageHeader, Brand
        auth/            LoginBrandPanel, LoginForm
        dashboard/       ContinueHero, WeeklyXpCard, BarChart, StreakWeekCard, BadgesCard, QuizBuilderBanner
        upload/          UploadStep, DropZone, FileRow
        subjects/        SubjectCard, NewSubjectModal
        quiz/            FocusHeader, QuizProgress, AnswerOption, AnswerFeedback, ScoreRing
        progress/        GoalRow, TopicRow
        settings/        SettingsSection, SettingRow, LevelCard
      pages/             Login, Dashboard, Upload, Subjects, QuizStart, QuizQuestion, QuizResult, Progress, Settings

Swap the placeholder values in `data/demo.js` and `data/library.js` for API calls when the Spring Boot endpoints are ready.
