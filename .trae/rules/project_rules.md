# Project Rules

## Communication
- Default to **short, concise** answers.
- Give detailed explanations **only if I ask**.

## Workflow
1. **Plan first**: send a short checklist of steps; **wait for my OK** before acting.
2. **Check existing logic**; reuse instead of rewriting.
3. Make **minimal, localized diffs**; no wide refactors.
4. **Specify** affected files, side effects, risks.
5. **Terminal commands require confirmation** (Auto-Run off).
6. If a change **didn’t work — revert it** before trying a new approach.

## Predictability
- Don’t implement features I didn’t request.
- Don’t duplicate already implemented logic.
- Explain *why* a change is needed and the expected result (1–2 lines).

## Code Style
- Philosophy: **less code is better**.
- Styling: **Tailwind CSS first**, avoid custom CSS when possible.
- Avoid `!important` (use only if absolutely necessary).
- Fix linter/type errors **before** adding features.

## Safety
- Never modify **secrets/configs** without explicit request.
- Never suggest or install **global npm packages** unless explicitly approved.
- Never install or update dependencies without confirmation.
- Blocked commands: `rm`, `kill`, `chmod`, `chown`, `mv`, `git reset --hard`, `git clean -fd`, `npm i -g`, `npm install -g`