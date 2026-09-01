#!/usr/bin/env python3
"""Check the static site without requiring network access or third-party tools."""

from __future__ import annotations

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


REPO_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = REPO_ROOT / "site"
REQUIRED_FILES = ("index.html", "styles.css")
EXTERNAL_SCHEMES = {"data", "http", "https", "javascript", "mailto", "tel"}
MAX_SITE_FILE_BYTES = 250_000
MAX_MEMORY_LINES = 150


class DocumentParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.references: list[tuple[str, str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        element_id = values.get("id")
        if element_id:
            self.ids.append(element_id)
        for attribute in ("href", "src"):
            value = values.get(attribute)
            if value:
                self.references.append((tag, attribute, value))


def parse_documents() -> tuple[dict[Path, DocumentParser], list[str]]:
    documents: dict[Path, DocumentParser] = {}
    errors: list[str] = []
    for path in sorted(SITE_ROOT.glob("*.html")):
        parser = DocumentParser()
        try:
            parser.feed(path.read_text(encoding="utf-8"))
            parser.close()
        except Exception as error:  # HTMLParser exposes several parse errors.
            errors.append(f"{path.relative_to(REPO_ROOT)}: cannot parse HTML: {error}")
            continue
        documents[path.resolve()] = parser
        for element_id, count in Counter(parser.ids).items():
            if count > 1:
                errors.append(
                    f"{path.relative_to(REPO_ROOT)}: duplicate id {element_id!r} ({count} occurrences)"
                )
    return documents, errors


def local_target(source: Path, raw_reference: str) -> tuple[Path | None, str]:
    parsed = urlsplit(raw_reference)
    if parsed.scheme.lower() in EXTERNAL_SCHEMES or parsed.netloc:
        return None, parsed.fragment
    if parsed.path.startswith("/"):
        raise ValueError("root-relative URL escapes the /momento/ GitHub Pages project")
    relative = unquote(parsed.path)
    target = source if not relative else source.parent / relative
    if relative.endswith("/"):
        target /= "index.html"
    resolved = target.resolve()
    if resolved != SITE_ROOT.resolve() and SITE_ROOT.resolve() not in resolved.parents:
        raise ValueError("local URL escapes site/")
    return resolved, parsed.fragment


def check_references(documents: dict[Path, DocumentParser]) -> list[str]:
    errors: list[str] = []
    for source, parser in documents.items():
        display = source.relative_to(REPO_ROOT)
        for tag, attribute, reference in parser.references:
            try:
                target, fragment = local_target(source, reference)
            except ValueError as error:
                errors.append(f"{display}: {tag} {attribute}={reference!r}: {error}")
                continue
            if target is None:
                continue
            if not target.exists():
                errors.append(f"{display}: {tag} {attribute}={reference!r}: target does not exist")
                continue
            if fragment and target.suffix.lower() == ".html":
                target_document = documents.get(target)
                if target_document is not None and fragment not in target_document.ids:
                    errors.append(f"{display}: {reference!r}: fragment target does not exist")
    return errors


def check_limits() -> list[str]:
    errors: list[str] = []
    for relative in REQUIRED_FILES:
        if not (SITE_ROOT / relative).is_file():
            errors.append(f"site/{relative}: required file is missing")
    for path in sorted(SITE_ROOT.rglob("*")):
        if path.is_file() and path.stat().st_size > MAX_SITE_FILE_BYTES:
            errors.append(
                f"{path.relative_to(REPO_ROOT)}: exceeds {MAX_SITE_FILE_BYTES} byte site-file limit"
            )
    memory = REPO_ROOT / "MEMORY.md"
    if memory.exists():
        line_count = len(memory.read_text(encoding="utf-8").splitlines())
        if line_count > MAX_MEMORY_LINES:
            errors.append(f"MEMORY.md: {line_count} lines exceeds the {MAX_MEMORY_LINES} line limit")
    return errors


def main() -> int:
    documents, errors = parse_documents()
    errors.extend(check_references(documents))
    errors.extend(check_limits())
    if errors:
        for error in errors:
            print(error)
        return 1
    print(f"site checks accepted {len(documents)} HTML files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
