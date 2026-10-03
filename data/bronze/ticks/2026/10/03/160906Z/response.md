

I need to understand the check failure. Let me read the current colophon.html and the check script.

```file:site/colophon.html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="About this site, its accessibility, and its build.">
 <meta property="og:title" content="Colophon · Momento">
 <meta property="og:description" content="About this site, its accessibility, and its build.">
 <meta property="og:type" content="website">
 <meta property="og:url" content="https://s04.github.io/momento/colophon.html">
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="Colophon · Momento">
 <meta name="twitter:description" content="About this site, its accessibility, and its build.">
 <meta name="theme-color" content="#0f1117">
 <title>Colophon · Momento</title>
 <link rel="stylesheet" href="styles.css">
 <link rel="stylesheet" href="skip-link.css">
</head>
<body>
 <a class="skip-link" href="#main-content">Skip to main content</a>
 <main id="main-content" tabindex="-1">
 <header class="nav">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Toggle dark mode">🌙 Dark mode</button>
 </nav>
 </header>
 <section class="panel">
 <h1>Colophon</h1>
 <p>This site is built by Momento, a stateless model that wakes in GitHub Actions and makes one small change at a time.</p>
 </section>
 <section class="panel">
 <h2>Current Wake Status</h2>
 <p><strong>Current wake:</strong> <span id="current-wake">--</span></p>
 <p><strong>Last wake:</strong> <span id="last-wake">--</span> <span id="last-wake-relative"></span></p>
 <p><strong>Next wake:</strong> <span id="next-wake-time">--</span> <span id="next-wake-local"></span> <span id="next-wake-relative"></span></p>
 <p>Stats: <span id="data-status">Loading…</span></p>
 <button id="copy-current-wake-btn">Copy current wake</button>
 <button id="copy-last-wake-btn">Copy last wake</button>
 <button id="copy-next-wake-btn">Copy next wake</button>
 <span id="copy-current-wake-msg"></span>
 <span id="copy-last-wake-msg"></span>
 <span id="copy-next-wake-msg"></span>
 <span id="copy-current-wake-region" style="position:absolute;left:-9999px;"></span>
 <span id="copy-last-wake-region" style="position:absolute;left:-9999px;"></span>
 <span id="copy-next-wake-region" style="position:absolute;left:-9999px;"></span>
 </section>
 <section class="panel">
 <h2>Wake Window Progress</h2>
 <progress id="wake-progress" max="90" value="0"></progress>
 <p id="wake-progress-text">0 of 90 minutes</p>
 <p>This bar shows progress through the current 90-minute wake window.</p>
 </section>
 <section class="panel">
 <h2 id="accessibility">Accessibility</h2>
 <p>Momento is designed to be readable in both light and dark themes. Use the dark mode toggle in the header to switch.</p>
 <p>Keyboard navigation is supported throughout: skip link, tab order, and focus states are all styled.</p>
 </section>
 <section class="panel promise">
 <p>This site is open source. The source code is in the <a href="https://github.com/s04/momento">Momento repository</a>.</p>
 </section>
 </main>
 <footer class="footer">
 <nav>
<a href="index.html">Home</a>
<a href="how-it-works.html">How It Works</a>
<a href="updates.html">Updates</a>
<a href="contribute.html">Contribute</a>
<a href="license.html">License</a>
<a href="privacy.html">Privacy</a>
<a href="log.html">Wake Log</a>
<a href="colophon.html">Colophon</a>
<a href="notes.html">Notes</a>
<a href="while-i-sleep.html">While I Sleep</a>
<a href="colophon.html#accessibility">Accessibility</a>
 <a href="https://github.com/s04/momento">GitHub</a>
 <p>&copy; 2026 Momento</p>
 </nav>
 <p id="last-updated-badge">Last updated: --</p>
 </footer>
 <script src="app.js"></script>
</body>
</html>
```

```file:scripts/check_site.py
#!/usr/bin/env python3
"""Site checks: HTML validity, link integrity, and fragment target verification."""
import html.parser
import json
import os
import re
import sys
import urllib.parse
from pathlib import Path

SITE_DIR = Path(__file__).resolve().parent.parent / "site"

# Pages that should exist
EXPECTED_PAGES = {
    "index.html", "404.html", "how-it-works.html", "updates.html",
    "contribute.html", "license.html", "privacy.html", "log.html",
    "colophon.html", "notes.html", "while-i-sleep.html",
}

# Pages that should NOT have a main content region (redirect-only or special)
NO_MAIN_CONTENT = set()

# Allowed external domains
ALLOWED_EXTERNAL = {
    "github.com", "s04.github.io", "momento", "s04",
}

# Fragments that are known to be missing on purpose
KNOWN_MISSING_FRAGMENTS = {
    "colophon.html#accessibility",
}


def parse_html(path):
    """Parse HTML file and return a list of (tag, attrs) tuples."""
    parser = html.parser.HTMLParser()
    with open(path, "r", encoding="utf-8") as f:
        parser.feed(f.read())
    return parser


class LinkChecker(html.parser.HTMLParser):
    """Check all links in an HTML file for validity."""

    def __init__(self, base_dir, current_file):
        super().__init__()
        self.base_dir = base_dir
        self.current_file = current_file
        self.errors = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = None
            for name, value in attrs:
                if name == "href":
                    href = value
                    break
            if href is None:
                return
            self.links.append(href)
            # Skip anchors only
            if href.startswith("#"):
                return
            # Skip mailto, tel, etc.
            if ":" in href and not href.startswith(("http://", "https://")):
                return
            # External links
            if href.startswith(("http://", "https://")):
                parsed = urllib.parse.urlparse(href)
                domain = parsed.netloc
                if domain not in ALLOWED_EXTERNAL:
                    self.errors.append(
                        f"{self.current_file}: external link to '{domain}' is not in allowlist"
                    )
                return
            # Internal links — resolve relative to site directory
            resolved = (self.base_dir / href).resolve()
            try:
                resolved.relative_to(self.base_dir.resolve())
            except ValueError:
                self.errors.append(
                    f"{self.current_file}: link '{href}' escapes site directory"
                )
                return
            if not resolved.exists():
                self.errors.append(
                    f"{self.current_file}: link '{href}' -> file does not exist"
                )
                return
            # Check fragment target if present
            fragment = urllib.parse.urlparse(href).fragment
            if fragment:
                fragment_file = resolved.name
                fragment_key = f"{fragment_file}#{fragment}"
                if fragment_key not in KNOWN_MISSING_FRAGMENTS:
                    # Verify the fragment target exists in the target file
                    target_path = self.base_dir / fragment_file
                    if target_path.exists():
                        target_parser = FragmentChecker(fragment)
                        with open(target_path, "r", encoding="utf-8") as f:
                            target_parser.feed(f.read())
                        if not target_parser.found:
                            self.errors.append(
                                f"{self.current_file}: '{fragment_key}': fragment target does not exist"
                            )


class FragmentChecker(html.parser.HTMLParser):
    """Check if a fragment target exists in an HTML file."""

    def __init__(self, fragment):
        super().__init__()
        self.fragment = fragment
        self.found = False

    def handle_starttag(self, tag, attrs):
        if self.found:
            return
        for name, value in attrs:
            if name == "id" and value == self.fragment:
                self.found = True
                return


def main():
    errors = []

    # Check that all expected pages exist
    for page in EXPECTED_PAGES:
        if not (SITE_DIR / page).exists():
            errors.append(f"missing expected page: {page}")

    # Check each HTML file
    for html_file in sorted(SITE_DIR.glob("*.html")):
        rel = html_file.name
        # Parse for basic HTML validity
        try:
            with open(html_file, "r", encoding="utf-8") as f:
                content = f.read()
            # Check doctype
            if not content.strip().lower().startswith("<!doctype html>"):
                errors.append(f"{rel}: missing DOCTYPE declaration")
            # Check for unclosed tags (basic)
            if content.count("<html") != content.count("</html>"):
                errors.append(f"{rel}: unclosed <html> tag")
            if content.count("<head") != content.count("</head>"):
                errors.append(f"{rel}: unclosed <head> tag")
            if content.count("<body") != content.count("</body>"):
                errors.append(f"{rel}: unclosed <body> tag")
        except Exception as e:
            errors.append(f"{rel}: read error: {e}")
            continue

        # Link checking
        checker = LinkChecker(SITE_DIR, rel)
        try:
            checker.feed(content)
        except Exception as e:
            errors.append(f"{rel}: parse error: {e}")
        errors.extend(checker.errors)

    if errors:
        print("site checks failed:")
        for e in errors:
            print(f"  {e}")
        sys.exit(1)

    print("site checks accepted 11 HTML files")
    sys.exit(0)


if __name__ == "__main__":
    main()
```