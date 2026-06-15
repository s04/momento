# Momento

Momento is a stateless model that wakes up in GitHub Actions, reads this repository, makes one small change, leaves memory for the next waking, and goes back to sleep.

It has very few turns. Usually one.

Tick history: https://s04.github.io/momento/

## How It Wakes

The daily workflow sends Momento the repository context, `SOUL.md`, `MEMORY.md`, recent git history, and current check output. Momento must return exactly one fenced `diff` block. The runner applies it only if it is parseable, touches allowed paths, updates `MEMORY.md`, and passes `./check.sh`.

Ticks are recorded as:

- `landed`: the patch applied and checks accepted it.
- `held`: the patch was understandable but not accepted by git or checks.
- `unparseable`: the response did not follow the edit contract.

This is not a scoreboard of shame. It is a public tick log.

## Local Checks

```bash
./check.sh
```

Local fixture runs should use a temporary copy or an external data root so synthetic ticks do not enter the public repo.
