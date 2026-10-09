# Contributing to StudyQuest

## Branches
- `main` – stable, always runnable. No direct pushes.
- `feature/<issue>-<short-name>` – new work, e.g. `feature/12-user-login`
- `fix/<issue>-<short-name>` – bug fixes, e.g. `fix/20-upload-size-check`

## Workflow
1. Pick a card from **To Do** that has an owner and acceptance criteria; move it to **In Progress**.
2. Make sure a GitHub issue exists and the card links to it.
3. `git checkout main && git pull && git checkout -b feature/<issue>-<short-name>`
4. Commit small and often.
5. Push and open a pull request into `main`; write `Closes #<issue>` in the description.
6. Move the card to **For Review** and request a reviewer.
7. After approval and checks, merge, then move the card to **Testing**, then **Done** once verified.

## Commit messages
Format: `type(scope): short description`
Types: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`
Examples:
- `feat(auth): implement login form`
- `docs(requirements): add acceptance criteria for MAT-01`

## Pull requests
- Small, focused, linked to an issue.
- Use the PR template.
- At least **one reviewer who is not the author** must approve.
- Author does not merge their own PR without approval.

## Review checklist
- [ ] Meets every acceptance criterion in the card/issue
- [ ] Code runs; tests pass (or manual test steps with evidence attached)
- [ ] No secrets, keys or `.env` files in the diff
- [ ] Readable, no leftover debug code
- [ ] Docs/README updated if behavior changed

## Definition of Done
Reviewed by a peer · acceptance criteria verified · evidence (screenshot, test output or link) on the card · merged into `main` · card in **Done**.

## Secrets
Never commit real keys, passwords or tokens. Keep them in `.env` (git-ignored) and add placeholder names to `.env.example`. If a secret is committed by mistake, tell the team immediately and rotate it.

## Main branch protection (GitHub → Settings → Branches)
Require a pull request, require 1 approval, and block force pushes. (If your plan doesn't allow this on private repos, follow the rules by agreement.)
