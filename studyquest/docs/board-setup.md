# Trello Board Setup Guide

## 1. Workspace and board
1. Go to trello.com → **Create new Workspace** → name it `StudyQuest Team`.
2. **Members → Invite** every teammate (and your instructor if required).
3. **Create board** → name `StudyQuest` → visibility: Workspace.

## 2. Lists (statuses), left to right
`Backlog` → `To Do` → `In Progress` → `For Review` → `Testing` → `Done`

## 3. Labels
- **Priority (MoSCoW):** Must (red), Should (orange), Could (yellow), Won't (grey)
- **Epic:** AUTH, MAT, QUIZ, GAME, PROG, CERT (one color each)

## 4. Custom Fields (Board menu → Power-Ups → Custom Fields)
Add: `Card ID` (text) · `Estimate (h)` (number) · `Reviewer` (text) · `GitHub Issue` (text/URL) · `Sprint` (dropdown: Sprint 1, 2, 3).
Also use Trello's built-in **Members** (assignee) and **Due date**.

## 5. Card template
Create a card in Backlog named `TEMPLATE`, fill the description below, then **Make template** (card back → Actions → Make template). Reuse it for every feature.

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
Create one card per row of the backlog table in `docs/requirements.md` (18 features). Name format: `AUTH-01 — Register and log in`. Paste each story and acceptance criteria into the description. Put all cards in **Backlog**; Sprint 1 cards go to **To Do** (see `docs/sprint-plan.md`).

## 7. Workflow rules (post as a pinned card named `BOARD RULES`)
1. **Cannot enter In Progress** without an **owner** and **acceptance criteria**.
2. **Cannot enter Done** without a **reviewer's approval** and **verification evidence** on the card.
3. Only the card owner moves their card; update daily.
4. One person should not have more than 2 cards In Progress.
5. Blocked? Add label `Blocked` and comment who/what you need.

Optional automation (Butler, Board menu → Automation): when a card is dragged to **In Progress** and has no member, post a reminder comment; when moved to **Done**, check that the checklist is complete.

## 8. Checklist before demo
- [ ] All members invited and visible on the board
- [ ] 18 cards with owners (for Sprint 1 cards), priorities, estimates, due dates
- [ ] Two cards (AUTH-01, MAT-01) show GitHub issue URLs
- [ ] Board link pasted in README
