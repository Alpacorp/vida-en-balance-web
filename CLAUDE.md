# Notes for AI assistants

Read [CONTRIBUTING.md](CONTRIBUTING.md) first — it holds the conventions and the
traps, and everything there applies to you. What follows is only what is
specific to working here as an agent.

## Non-negotiable

- **Never commit to `main`**, and never add a signature, `Co-Authored-By`
  trailer or "generated with" line to a commit.
- **Ask before committing.** Work is reviewed in the browser first.
- **Do not touch `Dockerfile` or `nginx.conf`.** Client's decision.
- English for code, comments, tests and commit messages. Spanish for anything a
  visitor reads.

## Verify, do not assume

Claims about this codebase have been wrong often enough that the habit matters
more than the speed:

- Run the thing. Read `dist/`, not the source, when the question is about what
  ships.
- Before saying a test guards something, break the code and watch it fail.
- `npm run preview` does not serve the prerendered files. See CONTRIBUTING.md.
- Report what actually happened, including your own mistakes. A wrong diagnosis
  stated confidently costs more than an open question.

## Shell care

Use single quotes for search patterns. A backtick inside double quotes is
command substitution: a `grep -E "…\`npm ci\`…"` once ran `npm ci` for real,
wiping `node_modules` mid-session.

## Machine-specific

The maintainer's Windows machine has **reduced motion enabled**, so the carousel
does not autoplay there and its pause button is not rendered. That is correct
behaviour, not a regression. DevTools cannot emulate `no-preference` — it only
offers "No emulation" and "reduce" — so to see the other path, patch
`window.matchMedia` and force a remount by navigating away and back.
