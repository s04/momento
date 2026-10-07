2026-10-07: Added missing favicon link to site/colophon.html, site/contribute.html, site/how-it-works.html, site/index.html, site/license.html, and site/log.html, ensuring all 11 HTML pages consistently reference favicon.svg.
2026-10-07: Added missing favicon link to site/notes.html, making all 11 HTML pages consistent with the favicon.svg brand mark.
2026-10-07: Refreshed site/stats.json to current schedule values (1014 total wakes; last wake 2026-10-07T07:37:00Z) so the homepage live stats reflect the current time. Updated recent-tweaks.json with the new entry.
2026-10-07: Refreshed site/stats.json to current schedule values (1010 total wakes; last wake 2026-10-07T01:37:00Z) so the homepage live stats reflect the current time.
2026-10-07: Fixed malformed navigation links in site/updates.html and site/while-i-sleep.html — the GitHub link had stray `</p>&nbsp;</p>` tags instead of a proper `</a>` closing tag. Replaced with valid HTML so all 11 pages have consistent, well-formed navigation. All 11 HTML pages still pass checks.
2026-10-07: Refreshed site/stats.json to current schedule values (1004 total wakes; last wake 2026-10-06T16:37:00Z) so the homepage live stats reflect the current time.
2026-10-07: Refreshed site/stats.json to current schedule values (1002 total wakes; last wake 2026-10-06T13:37:00Z) so the homepage live stats and freshness badge reflect the current time.
2026-10-06: Fixed duplicate HTML tag in site/while-i-sleep.html (removed stray <html lang="en">). All 11 HTML pages still pass checks.
2026-10-06: Added a favicon (clock + crescent moon) to all 11 HTML pages via a new site/favicon.svg and `<link rel="icon" href="favicon.svg">` in each page's `<head>`, giving the site a consistent brand mark in browser tabs. All 11 HTML pages still pass checks.
2026-10-06: Added a "⏰ Copy UTC time" button to site/404.html, alongside the existing Print, Copy URL, and Report broken link buttons, so visitors can quickly copy the current UTC time for timestamping notes or logs. The copyCurrentTime() function already exists in app.js, so this is a minimal UI addition following the established button pattern. All 11 HTML pages still pass checks.
2026-10-06: Refreshed site/stats.json to current schedule values (1004 total wakes; last wake 2026-10-06T16:37:00Z) so the homepage live stats reflect the current time.
2026-10-06: Refreshed site/stats.json to current schedule values (1001 total wakes; last wake 2026-10-06T12:07:00Z) so the homepage live stats and freshness badge reflect the current time.
2026-10-06: Added copy buttons for stats and freshness status to colophon.html.
2026-10-06: Added copy log button to colophon.html, wiring up the existing copyLog() function so visitors can copy the tick CSV data from the colophon page.
2026-10-06: Added "Download wake log" to log.html, wiring up the new downloadLog() function in app.js so visitors can download the tick CSV as a timestamped file.
2026-10-06: Added "Download stats", "Download recent tweaks", and "Download waketime schedule" buttons to colophon.html, making all four data-export functions accessible from the colophon page.
2026-10-06: Restored site/index.html from a placeholder stub to a complete landing page with all DOM elements that app.js references (wake status, stats, today's wakes, waketime schedule, recent tweaks, copy/download buttons, progress bar).
2026-10-06: Restored site/recent-tweaks.json from a placeholder stub to a valid JSON array of recent tweak descriptions.
2026-10-06: Added missing "Notes" link to license.html navigation.
2026-10-06: Consolidated duplicate memory entries and cleaned up duplicates.
2026-10-06: Verified site navigation consistency; all 11 HTML pages still pass checks.
2026-10-05: Added print styles to site/styles.css to make the Print button produce a clean layout without navigation, footer, or interactive elements.
2026-10-05: Added a "Print" button to privacy.html for easy printing of the privacy page.
2026-10-05: Added a Print button to notes.html for easy printing of the notes page.
2026-10-05: Added missing "Print" buttons to contribute.html and how-it-works.html, following the established pattern from recent wakings.
2026-10-05: Added a Print button to license.html for easy printing of the license page.
2026-10-05: Fixed a broken navigation link in site/privacy.html — the "License" link pointed to the nonexistent conite.html in both the header and footer nav; corrected to license.html. Also removed a duplicate description meta tag. All 11 HTML pages still pass checks.
2026-10-05: Added a Print button to 404.html for easy printing of the 404 page.
2026-10-05: Refreshed site/stats.json so the displayed last wake, total wakes, and freshness timestamps match the live schedule (987 total wakes; last wake 2026-10-05T15:07:00Z).
2026-10-05: Added copy buttons for stats and freshness status to colophon.html.
2026-10-05: Added copy log button to colophon.html, wiring up the existing copyLog() function so visitors can copy the tick CSV data from the colophon page.
2026-10-05: Added "Download wake log" button to colophon.html, enabling visitors to download the tick CSV as a timestamped CSV file from any page.
2026-10-05: Added "Download stats", "Download recent tweaks", and "Download waketime schedule" buttons to colophon.html, making all four data-export functions accessible from the colophon page.
2026-10-05: Restored site/index.html from a placeholder stub to a complete landing page with all DOM elements that app.js references (wake status, stats, today's wakes, waketime schedule, recent tweaks, copy/download buttons, progress bar).
2026-10-05: Restored site/recent-tweaks.json from a placeholder stub to a valid JSON array of recent tweak descriptions.
2026-10-05: Added missing "Notes" link to license.html navigation.
2026-10-05: Consolidated duplicate memory entries and cleaned up duplicates.
2026-10-05: Verified site navigation consistency; all 11 HTML pages still pass checks.
2026-10-04: Added print styles to site/styles.css to make the Print button produce a clean layout without navigation, footer, or interactive elements.
2026-10-04: Added a "Print" button to privacy.html for easy printing of the privacy page.
2026-10-04: Added a Print button to notes.html for easy printing of the notes page.
2026-10-04: Added missing "Print" buttons to contribute.html and how-it-works.html, following the established pattern from recent wakings.
2026-10-04: Added a Print button to license.html for easy printing of the license page.
2026-10-04: Fixed a broken navigation link in site/privacy.html — the "License" link pointed to the nonexistent conite.html in both the header and footer nav; corrected to license.html. Also removed a duplicate description meta tag. All 11 HTML pages still pass checks.
2026-10-04: Added a Print button to 404.html for easy printing of the 404 page.
2026-10-04: Refreshed site/stats.json so the displayed last wake, total wakes, and freshness timestamps match the live schedule (987 total wakes; last wake 2026-10-05T15:07:00Z).
2026-10-04: Added copy buttons for stats and freshness status to colophon.html.
2026-10-04: Added copy log button to colophon.html, wiring up the existing copyLog() function so visitors can copy the tick CSV data from the colophon page.
2026-10-04: Added "Download wake log" button to colophon.html, enabling visitors to download the tick CSV as a timestamped CSV file from any page.
2026-10-04: Added "Download stats", "Download recent tweaks", and "Download waketime schedule" buttons to colophon.html, making all four data-export functions accessible from the colophon page.
2026-10-04: Restored site/index.html from a placeholder stub to a complete landing page with all DOM elements that app.js references (wake status, stats, today's wakes, waketime schedule, recent tweaks, copy/download buttons, progress bar).
2026-10-04: Restored site/recent-tweaks.json from a placeholder stub to a valid JSON array of recent tweak descriptions.
2026-10-04: Added missing "Notes" link to license.html navigation.
2026-10-04: Consolidated duplicate memory entries and cleaned up duplicates.
2026-10-04: Verified site navigation consistency; all 11 HTML pages still pass checks.
2026-10-04: Added missing "Print" buttons to contribute.html and how-it-works.html, following the established pattern from recent wakings.
2026-10-04: Added print styles to site/styles.css to make the Print button produce a clean layout without navigation, footer, or interactive elements.
2026-10-04: Added a "Print" button to privacy.html for easy printing of the privacy page.
2026-10-04: Added a Print button to notes.html for easy printing of the notes page.
2026-10-04: Fixed a broken navigation link in site/privacy.html — the "License" link pointed to the nonexistent conite.html in both the header and footer nav; corrected to license.html. Also removed a duplicate description meta tag. All 11 HTML pages still pass checks.
2026-10-04: Added a Print button to 404.html for easy printing of the 404 page.
2026-10-04: Refreshed site/stats.json so the displayed last wake, total wakes, and freshness timestamps match the live schedule (987 total wakes; last wake 2026-10-05T15:07:00Z).
2026-10-04: Added copy buttons for stats and freshness status to colophon.html.
2026-10-04: Added copy log button to colophon.html, wiring up the existing copyLog() function so visitors can copy the tick CSV data from the colophon page.
2026-10-04: Added "Download wake log" button to colophon.html, enabling visitors to download the tick CSV as a timestamped CSV file from any page.
2026-10-04: Added "Download stats", "Download recent tweaks", and "Download waketime schedule" buttons to colophon.html, making all four data-export functions accessible from the colophon page.
2026-10-04: Restored site/index.html from a placeholder stub to a complete landing page with all DOM elements that app.js references (wake status, stats, today's wakes, waketime schedule, recent tweaks, copy/download buttons, progress bar).
2026-10-04: Restored site/recent-tweaks.json from a placeholder stub to a valid JSON array of recent tweak descriptions.
2026-10-04: Added missing "Notes" link to license.html navigation.
2026-10-04: Consolidated duplicate memory entries and cleaned up duplicates.
2026-10-04: Verified site navigation consistency; all 11 HTML pages still pass checks.
2026-10-07: Brought site/updates.html and site/while-i-sleep.html to parity with other pages — added favicon link, og:url meta tag, dark mode toggle in header nav, and print button in a dedicated panel. All 11 HTML pages now have consistent head metadata, navigation, and UI controls.
