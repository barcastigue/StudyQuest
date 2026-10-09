# GitHub Setup & Traceability Walkthrough

Team: John Vincent Barcastigue (@Barcastigue), Reniel Rey Bogoy (@toastghost505), Ralph Benedict Empeynado.

## A. Repository setup (done once by Vincent)
1. Private repo `studyquest` created on GitHub, scaffold pushed to `main`.
2. Collaborators added: Reniel, Ralph, instructor.
3. Branch protection on `main`: pull request required, 1 approval, no force pushes.
4. Trello board URL pasted in README.

## B. Two features to trace

| | Feature 1 | Feature 2 |
|---|-----------|-----------|
| Trello card | AUTH-01a — Register/login API | MAT-01a — Upload endpoint |
| Owner / Reviewer | Vincent / Reniel | Reniel / Vincent |
| GitHub issue | #1 `[AUTH-01a] Implement user login API` | #2 `[MAT-01a] Implement study material upload` |
| Branch | `feature/1-user-login` | `feature/2-material-upload` (optional) |
| Full chain (PR) | Yes | Issue + card link only |

> Issues and PRs share one number sequence in GitHub. The first issue you create is #1, the second #2, and the first PR will be #3. If your numbers differ, use yours in branch names and commits.

## C. Create the issues
1. GitHub → **Issues → New issue** → pick the *Feature / task* template.
2. Fill in: title, link to the Trello card, user story, acceptance criteria (copy from the card), owner and reviewer, estimate and due date.
3. Assign the issue to its owner.
4. Copy the issue URL into the Trello card's **GitHub Issue** field, and paste the card URL into the issue. Both must point to each other.

## D. Branch, change, commit (Vincent, Feature 1)
```bash
git checkout main
git pull
git checkout -b feature/1-user-login

mkdir -p src/backend/auth
printf "# Auth module (AUTH-01a)\n\nPlanned endpoints:\n- POST /auth/register\n- POST /auth/login\n\nPasswords are hashed (bcrypt/argon2). See docs/requirements.md, AUTH-01.\n" > src/backend/auth/README.md

git add src/backend/auth/README.md
git commit -m "docs(auth): add auth module scaffold for login (#1)"
git push -u origin feature/1-user-login
```
Move the Trello card to **In Progress** before starting (it has an owner and acceptance criteria).

## E. Pull request
1. GitHub shows "Compare & pull request" after the push; click it.
2. **Title:** `Add user login API scaffold`
3. **Description:** use the template; include `Closes #1`, the Trello card URL, how to test, and evidence.
4. **Reviewers:** request Reniel (not the author).
5. Move the Trello card to **For Review**.

## F. Peer review (Reniel)
Reniel opens **Files changed**, checks the CONTRIBUTING.md review checklist, leaves at least one comment, then **Review changes → Approve** (or Request changes). Record it:

| Item | Notes |
|------|-------|
| Reviewer | Reniel Rey Bogoy |
| Date | |
| Findings | e.g. "README should list the response format for login" |
| Changes made | e.g. "Added response format and error codes" (Vincent pushes a follow-up commit) |
| Verification evidence | screenshot of the approved PR + checklist ticked |
| Decision | Approved / Changes requested |

## G. Merge and update the card
1. After approval, Vincent clicks **Merge pull request** (issue #1 closes automatically).
2. Trello: card → **Testing**; run the acceptance checks; attach the evidence (PR link, screenshots) to the card.
3. When the checks pass → **Done**.

## H. Feature 2 (issue + card link)
Reniel creates issue #2, links it with the MAT-01a card both ways, and (optionally) repeats D–G with branch `feature/2-material-upload`, Vincent reviewing.

## I. What you show in the demo
```
Card AUTH-01a  ←→  Issue #1  →  Branch feature/1-user-login
→ Commit "docs(auth): add auth module scaffold for login (#1)"
→ PR #3 "Add user login API scaffold" (Closes #1)
→ Review by Reniel (approved) → Merged → Card in Done
Card MAT-01a  ←→  Issue #2
```
Screenshots to capture: both issues, the Trello card showing the issue URL, the branch list, the commit, the PR with approval, the card in Done.