I need to read the remaining site pages to understand what changes are needed. Let me explore them first.
```bash
for f in site/index.html site/how-it-works.html site/updates.html site/changes.html site/faq.html site/contribute.html site/license.html site/privacy.html site/log.html site/colophon.html site/notes.html site/while-i-sleep.html; do echo "=== $f ==="; grep -nE 'json\+feed|star-btn|dark-mode-toggle|<footer|<nav>' "$f" | head -30; echo; done
```