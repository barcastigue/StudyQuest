# StudyQuest – Architecture

> Stack below is a proposed default. Update it if your team chooses differently, and keep README in sync.

## 1. Overview
```
[Web browser: React app (Vite)]
          |  HTTPS / JSON (REST)
[API server: Node.js + Express]
   |            |              |
[PostgreSQL] [File storage] [LLM API for question generation]
```

## 2. Components
| Component | Responsibility |
|-----------|----------------|
| Web frontend (React) | Pages: login/register, subjects, upload, quiz play, results, progress, profile |
| API server | Auth, file upload, text extraction, quiz generation orchestration, scoring, XP/levels/streaks |
| PostgreSQL | Users, subjects, materials, topics, quizzes, questions, attempts, answers, xp_events, streaks |
| File storage | Original uploaded PDFs/DOCX (private per user) |
| LLM API | Generates questions as structured JSON from topic text |

## 3. Core data model (draft)
- `users(id, email, password_hash, display_name, xp_total, level, created_at)`
- `subjects(id, user_id, name)`
- `materials(id, user_id, subject_id, filename, storage_path, status, created_at)`
- `topics(id, material_id, title, text)`
- `quizzes(id, user_id, material_id, difficulty, created_at)`
- `questions(id, quiz_id, topic_id, type, prompt, options_json, correct_answer)`
- `attempts(id, quiz_id, user_id, score, total, xp_awarded, completed_at)`
- `attempt_answers(id, attempt_id, question_id, answer, is_correct)`
- `streaks(user_id, current, best, last_active_date)`

## 4. Gamification rules (draft, adjust as a team)
- **XP per attempt** = `10 + (score_percent / 100) × 40` → between 10 and 50 XP.
- **Level thresholds:** L1 = 0 XP, L2 = 100, L3 = 250, L4 = 450, L5 = 700 (each next level adds +50 more than the previous gap).
- **Unlocks:** L1 MCQ + True/False · L3 Fill-in-the-blank · L4 Identification · L5 Hard difficulty.
- **Streak:** at least one completed quiz per calendar day (user's local date).
- **Weak topic:** average below 60% across 2 or more attempts.

## 5. Key flows
1. **Upload → quiz:** upload file from the browser → store → extract text → split into topics → user selects material → API sends topic text to LLM → validates JSON → saves quiz.
2. **Take quiz:** page fetches questions → collects answers → submit → server scores → writes attempt → awards XP → updates level and streak → returns results.

## 6. Security notes
- Passwords hashed (bcrypt/argon2); JWT in an httpOnly cookie, or server session.
- Every query filtered by `user_id`; files not publicly accessible.
- CORS limited to the frontend's origin (`FRONTEND_URL`); HTTPS in production.
- Secrets only in `.env` (never committed); see `.env.example`.

## 7. Risks
| Risk | Mitigation |
|------|-----------|
| LLM returns invalid or low-quality questions | Validate JSON schema, retry, allow user to report a bad question |
| Scanned PDFs have no text | Detect and show "no readable text"; OCR is out of scope for MVP |
| Cost/latency of LLM calls | Limit questions per quiz; cache by material and topic |
| Large uploads freeze the page | Enforce 10 MB limit client and server side; show upload progress |