# StudyQuest – Requirements & Backlog

## 1. Problem and users
Students review with static notes and PDFs, which gets repetitive, gives little active practice, and makes it hard to see which topics need attention.
**Product:** StudyQuest is a web application that students open in their browser.
**Primary users:** college/university students reviewing their own materials.
**Secondary users:** instructors who may receive achievement certificates for extra academic points.

## 2. Epics
| Epic | Name | Goal |
|------|------|------|
| AUTH | Accounts & Profile | Users can sign up, log in and manage their profile |
| MAT  | Study Materials & Subjects | Users upload materials and organize them by subject |
| QUIZ | Quiz Generation & Play | Quizzes are generated from materials and can be taken and scored |
| GAME | Gamification | XP, levels, streaks and unlockable quiz types |
| PROG | Progress & Adaptive Practice | Per-subject progress and extra practice on weak topics |
| CERT | Achievements & Engagement | Certificates, instructor submission, difficulty settings, reminders |

## 3. Feature backlog (18 features)
Estimates are in hours. IDs match Trello card IDs.

| ID | Feature | MoSCoW | Est (h) | Depends on |
|----|---------|--------|---------|-----------|
| AUTH-01 | Register and log in | Must | 12 | – |
| AUTH-02 | Profile and settings | Could | 4 | AUTH-01 |
| MAT-01 | Upload PDF/DOCX study material | Must | 10 | AUTH-01 |
| MAT-02 | Extract text and split into topics | Must | 10 | MAT-01 |
| MAT-03 | Organize materials and quizzes by subject | Should | 8 | MAT-01 |
| QUIZ-01 | Generate multiple-choice and true/false questions | Must | 16 | MAT-02 |
| QUIZ-02 | Quiz-taking page | Must | 10 | QUIZ-01 |
| QUIZ-03 | Scoring and results page | Must | 6 | QUIZ-02 |
| QUIZ-04 | Fill-in-the-blank and identification types | Should | 12 | QUIZ-01, GAME-02 |
| GAME-01 | Award XP for completed quizzes | Must | 6 | QUIZ-03 |
| GAME-02 | Levels and unlockable quiz types/difficulty | Must | 8 | GAME-01 |
| GAME-03 | Daily streaks | Should | 6 | GAME-01 |
| PROG-01 | Per-subject progress tracker | Should | 10 | MAT-03, QUIZ-03 |
| PROG-02 | Weak-topic detection and extra practice | Should | 12 | PROG-01 |
| CERT-01 | Achievement certificates (level + streak threshold) | Could | 10 | GAME-02, GAME-03 |
| CERT-02 | Submit certificate to instructor | Could | 6 | CERT-01 |
| CERT-03 | Customizable difficulty | Could | 5 | GAME-02 |
| CERT-04 | Study reminders | Could | 6 | GAME-03 |

## 4. User stories and acceptance criteria

### AUTH-01 – Register and log in (Must)
**As a** student, **I want** to create an account and log in **so that** my materials and progress are saved.
- [ ] Registering with a unique email and a password of 8+ characters creates an account.
- [ ] Invalid or duplicate email shows a clear error.
- [ ] Valid login returns a session; wrong password is rejected.
- [ ] Passwords are stored hashed, never in plain text.
- [ ] Logged-out users are redirected to the login page when opening a protected page.

### AUTH-02 – Profile and settings (Could)
**As a** student, **I want** to edit my display name and avatar **so that** the site feels personal.
- [ ] Display name can be changed and persists.
- [ ] Profile shows current level and XP.

### MAT-01 – Upload study material (Must)
**As a** student, **I want** to upload a PDF or DOCX from my browser **so that** StudyQuest can make quizzes from it.
- [ ] PDF and DOCX files up to 10 MB are accepted (file picker and drag-and-drop).
- [ ] Other file types or oversize files are rejected with a message.
- [ ] Uploaded file appears in the user's materials list.
- [ ] A user cannot see another user's files.

### MAT-02 – Extract text and split into topics (Must)
**As the** system, **I want** to extract text and divide it into topics **so that** questions can be generated and tracked per topic.
- [ ] Text is extracted from a sample text-based PDF and DOCX.
- [ ] Content is split into labelled topic chunks (by heading or size).
- [ ] Scanned/empty files produce a "no readable text" message.

### MAT-03 – Organize by subject (Should)
**As a** student, **I want** to group materials and quizzes under subjects **so that** I can review one course at a time.
- [ ] User can create, rename and delete a subject.
- [ ] Each material belongs to one subject.
- [ ] Quizzes inherit the subject of their material.

### QUIZ-01 – Generate MCQ and true/false (Must)
**As a** student, **I want** quizzes generated from my material **so that** I can practice actively.
- [ ] A quiz of 5–20 questions is generated from a selected material.
- [ ] Each MCQ has one correct answer and three distractors; each T/F has a correct value.
- [ ] Every question is tagged with its source topic.
- [ ] Generation failure shows a retry option.

### QUIZ-02 – Quiz-taking page (Must)
**As a** student, **I want** to answer questions one at a time **so that** I can focus.
- [ ] Questions are shown one at a time with a progress indicator.
- [ ] The selected answer is saved before moving on.
- [ ] A quiz can be submitted only after all questions are answered.
- [ ] Refreshing the browser does not lose answers already given.

### QUIZ-03 – Scoring and results (Must)
**As a** student, **I want** to see my score and correct answers **so that** I learn from mistakes.
- [ ] Score = correct answers / total, shown as count and percentage.
- [ ] Each question shows my answer, the correct answer and the topic.
- [ ] The attempt is saved to history.

### QUIZ-04 – Fill-in-the-blank and identification (Should)
**As a** student, **I want** harder question types **so that** I can test recall.
- [ ] Both types are locked until the required level is reached (see GAME-02).
- [ ] Typed answers are compared case-insensitively and trimmed.
- [ ] Results page shows expected answer for wrong responses.

### GAME-01 – Award XP (Must)
**As a** student, **I want** XP for finishing quizzes **so that** I feel rewarded.
- [ ] XP awarded = base XP × score percentage (formula documented in docs/architecture.md).
- [ ] XP total updates immediately after the results page.
- [ ] XP is awarded once per attempt.

### GAME-02 – Levels and unlocks (Must)
**As a** student, **I want** to level up and unlock new quiz types **so that** I have goals.
- [ ] Level is derived from total XP using a documented threshold table.
- [ ] Level-up is shown after the quiz that triggers it.
- [ ] Locked quiz types/difficulties display the level required.

### GAME-03 – Streaks (Should)
**As a** student, **I want** a daily streak **so that** I keep studying regularly.
- [ ] Completing 1+ quiz in a calendar day extends the streak.
- [ ] Missing a full day resets it to 0.
- [ ] Current and best streak are visible.

### PROG-01 – Subject progress tracker (Should)
**As a** student, **I want** a progress view per subject **so that** I see how I'm doing.
- [ ] Shows completed quizzes, average score, current streak and topic mastery per subject.
- [ ] Data matches stored attempts (verified with a seeded test account).

### PROG-02 – Weak-topic detection and extra practice (Should)
**As a** student, **I want** to be told my weak topics **so that** I can practice them.
- [ ] A topic with average score below 60% over 2+ attempts is flagged weak.
- [ ] "Practice weak topics" generates a quiz focused on flagged topics.
- [ ] Flag clears once the topic average reaches 60% or higher.

### CERT-01 – Achievement certificates (Could)
**As a** student, **I want** a certificate when I hit a level and streak goal **so that** I can show achievement.
- [ ] Certificate is issued when level ≥ threshold and streak ≥ threshold (values configurable).
- [ ] Certificate shows name, achievement, date and a unique ID.
- [ ] Certificate can be downloaded as PDF.

### CERT-02 – Submit certificate to instructor (Could)
**As a** student, **I want** to send my certificate to my instructor **so that** I may earn extra points.
- [ ] User enters an instructor email and sends the certificate.
- [ ] Submission status (sent/failed) is recorded.

### CERT-03 – Customizable difficulty (Could)
- [ ] User can choose easy/medium/hard for a quiz, limited to unlocked options.

### CERT-04 – Study reminders (Could)
- [ ] User can set a daily reminder time and turn it off.
- [ ] Reminder is delivered by email (and/or browser notification if the user allows it) at the chosen time.

## 5. MVP scope
The first working release covers all **Must** features: AUTH-01, MAT-01, MAT-02, QUIZ-01, QUIZ-02, QUIZ-03, GAME-01, GAME-02.
Result: a student can sign up, upload a document, get an MCQ/TF quiz, see a score, earn XP and level up.
**Release 2:** Should features (MAT-03, QUIZ-04, GAME-03, PROG-01, PROG-02). **Release 3:** Could features.

## 6. Non-functional requirements
- Uploaded files are private to their owner.
- Quiz generation completes within 30 seconds for a 20-page document (target).
- Works in current versions of Chrome, Edge, Firefox and Safari.
- Responsive layout: usable on laptop and phone-sized browser windows.