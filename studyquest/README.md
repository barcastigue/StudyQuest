# StudyQuest

StudyQuest is a web application that turns students' own study materials into interactive quizzes, with XP, levels, streaks and unlockable quiz types.

**Task board:** <PASTE TRELLO BOARD URL>

## Problem
Students review with static notes and PDFs, which becomes repetitive, offers little active practice and makes it hard to know which topics need attention.

## Target users
- College/university students reviewing their own notes and handouts.
- Instructors (optional): receive achievement certificates for extra academic points.

## Features
**Must (MVP):** upload materials · generate multiple-choice and true/false quizzes · scoring · XP · levels · progress.
**Should:** subjects · per-subject progress tracker with streaks · fill-in-the-blank and identification · weak-topic practice.
**Could:** achievement certificates · submit to instructor · custom difficulty · study reminders.

Full backlog: [docs/requirements.md](docs/requirements.md)

## Tech stack (proposed)
React (Vite) · Node.js + Express · PostgreSQL · LLM API for question generation

## Team
- John Vincent Barcastigue (@Barcastigue) – project lead, backend
- Reniel Rey Bogoy (@toastghost505) – backend, file processing
- Ralph Benedict Empeynado – UI, testing

Details: [docs/team-roles.md](docs/team-roles.md)

## Setup
```bash
git clone https://github.com/<org-or-user>/studyquest.git
cd studyquest
cp .env.example .env      # fill in your own values; never commit .env
# Backend
cd src/backend && npm install && npm run dev
# Web frontend (new terminal)
cd src/frontend && npm install && npm run dev
```
> Folders under `src/` are created during Sprint 1; update these steps when they exist.

## Workflow
Read [CONTRIBUTING.md](CONTRIBUTING.md) for branch, commit and PR rules.

## Docs
- [Requirements](docs/requirements.md) · [Architecture](docs/architecture.md) · [Team roles](docs/team-roles.md)