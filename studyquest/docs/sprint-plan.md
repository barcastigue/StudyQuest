# Sprint 1 Plan

**Dates:** Mon 12 Oct – Fri 16 Oct 2026 (adjust to your schedule)
**Team capacity:** 3 members × ~13 h = ~39 h

## Sprint goal
By Friday, a user can **register, log in on the website, and upload a PDF/DOCX that is stored and has its text extracted**, and the team's repo, board and review workflow are fully in place.

## Sprint backlog
| Card | Task | Owner | Reviewer | Est (h) | Due | Depends on |
|------|------|-------|----------|---------|-----|-----------|
| SETUP-01 | Repo scaffold, branch protection, invites | Vincent | Reniel | 3 | Mon 12 | – |
| SETUP-02 | Trello board, 18 cards, rules | Vincent | Ralph | 3 | Mon 12 | – |
| SETUP-03 | Database schema and migrations (users, materials, topics) | Reniel | Vincent | 3 | Tue 13 | SETUP-01 |
| AUTH-01a | Register/login API with hashed passwords | Vincent | Reniel | 7 | Wed 14 | SETUP-03 |
| MAT-01a | Upload endpoint: type/size validation, private storage | Reniel | Vincent | 6 | Wed 14 | SETUP-03, AUTH-01a |
| AUTH-01b | Web register/login pages (React) | Ralph | Vincent | 6 | Thu 15 | AUTH-01a (mock until ready) |
| MAT-02 | Extract text from PDF/DOCX and split into topics | Reniel | Vincent | 4 | Thu 15 | MAT-01a |
| TEST-01 | Test cases + evidence for AUTH-01 (wrong password, duplicate email, protected pages) | Ralph | Reniel | 3 | Fri 16 | AUTH-01a, AUTH-01b |
| TEST-02 | Test cases + evidence for MAT-01/MAT-02 (bad file types, empty PDF) | Ralph | Vincent | 3 | Fri 16 | MAT-02 |

## Hours per member
| Member | Tasks | Hours |
|--------|-------|-------|
| Vincent | SETUP-01, SETUP-02, AUTH-01a | 13 |
| Reniel | SETUP-03, MAT-01a, MAT-02 | 13 |
| Ralph | AUTH-01b, TEST-01, TEST-02 | 12 |

Everyone also spends a little time reviewing; keep roughly 1–2 h for that.

## Dependencies and blockers
- AUTH-01a unblocks the web login pages (use mocked responses until ready) and upload (needs user ID).
- SETUP-03 (schema) is on the critical path for Vincent and Reniel; finish it Tuesday.
- MAT-01a → MAT-02 is strictly sequential; both are Reniel's, so no handoff delay.
- Ralph's pages need a running API or mock; agree the login/register request format with Vincent on Monday.
- Risks: Reniel carries the longest backend chain; Ralph's testing depends on others finishing by Thursday. Raise blockers at the daily check-in.

## Definition of Done for this sprint
Every Sprint 1 card has an owner, reviewer, merged PR (where code), verification evidence, and sits in **Done**.

## Substantive task per member
Vincent – auth API · Reniel – upload API + text extraction · Ralph – web login/register pages + test evidence.
Verification: Ralph tests everyone's work, and every card has a reviewer who is not its owner.

## Carry-over (Sprint 2 preview)
QUIZ-01 (including the LLM prompt spike), QUIZ-02, QUIZ-03, GAME-01, GAME-02 (completes the MVP).