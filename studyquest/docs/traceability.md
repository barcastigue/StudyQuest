# GitHub Setup & Traceability Walkthrough

## A. Create the repository
1. GitHub → **New repository** → name `studyquest` → **Private** → tick "Add README" (or push the provided files).
2. **Settings → Collaborators** → invite each member and the instructor.
3. Upload/push the provided scaffold:
```bash
git clone https://github.com/<you>/studyquest.git
# copy the provided studyquest/ files into the clone
cd studyquest
git add .
git commit -m "docs: add project scaffold and documentation"
git push origin main
```
4. **Settings → Branches → Add rule** for `main`: require a pull request, 1 approval, block force pushes.
5. Paste the Trello URL into README.

## B. Traceability exercise (two features)

### Feature 1 – AUTH-01 Register and log in
- **Trello card:** `AUTH-01 — Register and log in`
- **GitHub issue:** title `[AUTH-01] Implement user login` (use the feature issue template). Paste the card URL into the issue and the issue URL into the card's *GitHub Issue* field.
- **Branch:** `feature/<issue-number>-user-login` (e.g. `feature/1-user-login`)

### Feature 2 – MAT-01 Upload study material
- **Trello card:** `MAT-01 — Upload PDF/DOCX study material`
- **GitHub issue:** `[MAT-01] Implement study material upload`
- Link both ways as above. (Branch/PR optional for this one.)

> Issue numbers depend on your repo. If AUTH-01 is issue #1, use `feature/1-user-login`.

## C. Minimal change for the branch (pick one)
Easiest evidence of traceability, no code needed:
```bash
git checkout main && git pull
git checkout -b feature/1-user-login
mkdir -p src/backend/auth
echo "# Auth module (AUTH-01)\nPlanned: POST /auth/register, POST /auth/login" > src/backend/auth/README.md
git add .
git commit -m "docs(auth): add auth module scaffold for login (#1)"
git push -u origin feature/1-user-login
```
Alternatively add a stub `login.js` or a login screen placeholder.

## D. Pull request
- Title: `Add user login scaffold` · Description: `Closes #1` plus the template sections (card URL, how to test, evidence).
- Request a teammate (not the author) as reviewer.

## E. Peer review record (fill in and keep in the PR + card)
| Item | Notes |
|------|-------|
| Reviewer | |
| Date | |
| Findings | e.g. "README missing endpoint response format" |
| Changes made | |
| Verification evidence | screenshot of PR approval / test output |
| Decision | Approved / Changes requested |

## F. Update the card
1. PR opened → move card to **For Review**.
2. Approved and merged → **Testing**.
3. Acceptance checks done, evidence attached → **Done**.

## G. End-to-end chain (what you should be able to show)
```
Card AUTH-01 → Issue #1 → Branch feature/1-user-login
→ Commit "docs(auth): add auth module scaffold for login (#1)"
→ PR "Add user login scaffold" (Closes #1) → peer review → Done
```
