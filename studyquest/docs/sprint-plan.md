# Sprint 1 Plan

**Dates:** Mon 12 Oct – Fri 16 Oct 2026 (adjust to your schedule)
**Team capacity:** 4 members × ~10 h = ~40 h

## Sprint goal
By Friday, a user can **register, log in, and upload a PDF/DOCX that is stored and has its text extracted**, and the team's repo, board and review workflow are fully in place.

## Sprint backlog
| Card | Task | Owner | Reviewer | Est (h) | Due | Depends on |
|------|------|-------|----------|---------|-----|-----------|
| SETUP-01 | Repo scaffold, branch protection, invites | Member A | Member B | 3 | Mon 12 | – |
| SETUP-02 | Trello board, 18 cards, rules | Member D | Member A | 3 | Mon 12 | – |
| SETUP-03 | Database schema and migrations (users, materials, topics) | Member C | Member A | 3 | Tue 13 | SETUP-01 |
| AUTH-01a | Register/login API with hashed passwords | Member A | Member C | 7 | Wed 14 | SETUP-03 |
| AUTH-01b | Mobile register/login screens | Member C | Member A | 7 | Thu 15 | AUTH-01a (mock until ready) |
| MAT-01a | Upload endpoint: type/size validation, private storage | Member B | Member D | 7 | Wed 14 | SETUP-03, AUTH-01a |
| MAT-02 | Extract text from PDF/DOCX and split into topics | Member D | Member B | 5 | Thu 15 | MAT-01a |
| TEST-01 | Test cases + evidence for AUTH-01 (wrong password, duplicate email) | Member B | Member A | 3 | Fri 16 | AUTH-01a |
| TEST-02 | Test cases + evidence for MAT-01/MAT-02 (bad file types, empty PDF) | Member C | Member B | 3 | Fri 16 | MAT-02 |
| QUIZ-01s | Spike: LLM prompt for MCQ/TF returning valid JSON (notes only) | Member D | Member A | 3 | Fri 16 | – |

## Hours per member
| Member | Tasks | Hours |
|--------|-------|-------|
| Member A | SETUP-01, AUTH-01a | 10 |
| Member B | MAT-01a, TEST-01 | 10 |
| Member C | SETUP-03, AUTH-01b, TEST-02 | 13 |
| Member D | SETUP-02, MAT-02, QUIZ-01s | 11 |

*Member C is slightly over; if capacity is tight, move TEST-02 to Member A.*

## Dependencies and blockers
- AUTH-01a unblocks the mobile login (use mocked responses until ready) and upload (needs user ID).
- MAT-01a → MAT-02 is strictly sequential; Member B and D should agree the file-storage path on Tuesday.
- Risks: LLM API key availability; Expo setup issues. Raise blockers in the daily check-in.

## Definition of Done for this sprint
Every Sprint 1 card has an owner, reviewer, merged PR (where code), verification evidence, and sits in **Done**.

## Substantive task per member
A – auth API · B – upload API + auth tests · C – DB schema + mobile screens · D – text extraction + LLM spike.

## Carry-over (Sprint 2 preview)
QUIZ-01, QUIZ-02, QUIZ-03, GAME-01, GAME-02 (completes the MVP).
