# Trello Board Setup Guide

## 1. Workspace and board
1. Go to trello.com → **Create new Workspace** → name it `StudyQuest Team`.
2. **Members → Invite** by email: John Vincent Barcastigue, Reniel Rey Bogoy, Ralph Benedict Empeynado (and your instructor if required).
3. **Create board** → name `StudyQuest` → visibility: Workspace.
4. Copy the board URL into `README.md` and `docs/submission.md`.

## 2. Lists (statuses), left to right
`Backlog` → `To Do` → `In Progress` → `For Review` → `Testing` → `Done`

## 3. Labels
- **Priority (MoSCoW):** Must (red), Should (orange), Could (yellow), Won't (grey)
- **Epic:** AUTH, MAT, QUIZ, GAME, PROG, CERT (one color each)
- **Blocked** (black) for stuck cards

## 4. Custom Fields (Board menu → Power-Ups → Custom Fields)
Add: `Card ID` (text) · `Estimate (h)` (number) · `Reviewer` (dropdown: John, Reniel, Ralph) · `GitHub Issue` (text/URL) · `Sprint` (dropdown: Sprint 1, 2, 3).
Also use Trello's built-in **Members** (owner/assignee) and **Due date**.

## 5. Card template
Create a card in Backlog named `TEMPLATE`, fill the description below, then **Make template** (card back → Actions → Make template). Reuse it for every card.

```
**ID:** AUTH-01
**Epic:** AUTH   **Priority:** Must
**Owner:**        **Reviewer:**
**Estimate (h):**  **Due:**
**Depends on:**

**User story**
As a ___, I want ___ so that ___.

**Acceptance criteria**
- [ ]
- [ ]

**GitHub issue:** #__ (URL)
**Branch / PR:**
**Verification evidence:** (screenshot / test output / link)
```
Add checklists: **Tasks** (small actionable steps) and **Definition of Done** (reviewed · criteria verified · evidence attached · merged).

## 6. Create the cards

### 6a. Feature cards (18, all in **Backlog**)
One card per row of the backlog table in `docs/requirements.md`. Name format: `AUTH-01 — Register and log in`. Paste the user story and acceptance criteria into the description. Set the Priority and Epic labels, Estimate and Depends on. Leave owner and due date empty until a feature is pulled into a sprint.

### 6b. Sprint 1 task cards (9, put in **To Do**, Sprint = Sprint 1)
Link each one to its feature card by writing the feature ID in the description (e.g. "Part of AUTH-01"). Acceptance criteria: copy the relevant lines from the feature card.

| Card ID | Title | Owner | Reviewer | Est (h) | Due |
|---------|-------|-------|----------|---------|-----|
| SETUP-01 | Repo scaffold, branch protection, invites | John | Reniel | 3 | Mon 12 Oct |
| SETUP-02 | Trello board, 18 cards, rules | John | Ralph | 3 | Mon 12 Oct |
| SETUP-03 | Database schema and migrations | Reniel | John | 3 | Tue 13 Oct |
| AUTH-01a | Register/login API with hashed passwords | John | Reniel | 7 | Wed 14 Oct |
| MAT-01a | Upload endpoint: type/size validation, private storage | Reniel | John | 6 | Wed 14 Oct |
| AUTH-01b | Web register/login pages (React) | Ralph | John | 6 | Thu 15 Oct |
| MAT-02 | Extract text from PDF/DOCX and split into topics | Reniel | John | 4 | Thu 15 Oct |
| TEST-01 | Test cases + evidence for AUTH-01 | Ralph | Reniel | 3 | Fri 16 Oct |
| TEST-02 | Test cases + evidence for MAT-01/MAT-02 | Ralph | John | 3 | Fri 16 Oct |

Setup cards (SETUP-01 to 03) have no feature card. For them, use these acceptance criteria:
- SETUP-01: repo is private; all members and instructor invited; `main` protected; scaffold files pushed.
- SETUP-02: board has the 6 lists, labels, custom fields, rules card and all 18 feature cards.
- SETUP-03: migration runs on a clean database and creates the users, materials and topics tables.

## 7. Workflow rules (post as a pinned card named `BOARD RULES`)
1. **Cannot enter In Progress** without an **owner** and **acceptance criteria**.
2. **Cannot enter Done** without a **reviewer's approval** and **verification evidence** on the card.
3. Only the card owner moves their card; update daily.
4. One person should not have more than 2 cards In Progress.
5. Blocked? Add label `Blocked` and comment who/what you need.

Optional automation (Butler, Board menu → Automation): when a card is dragged to **In Progress** and has no member, post a reminder comment; when moved to **Done**, check that the checklist is complete.

## 8. Checklist before demo
- [ ] All 3 members invited and visible on the board
- [ ] 18 feature cards in Backlog with priority and estimate
- [ ] 9 Sprint 1 cards in To Do with owner, reviewer, estimate, due date
- [ ] Two cards (AUTH-01a and MAT-01a) show GitHub issue URLs
- [ ] Board rules card pinned
- [ ] Board link pasted in README