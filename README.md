# Korean Memory Game — v5.2 10-word test

Reduced test build with 10 vocabulary items and 10 local SVG images.

Fixes:
- New service-worker cache version.
- Old caches are deleted when the new service worker activates.
- Core app files are network-first during testing to reduce stale-build problems.
- Images are local and rendered explicitly in JavaScript.
- Part-of-speech labels remain under the image.
- Silent image presentation, no-repeat stack, speech input, wrong-answer pronunciation, restart, and local high score remain.

Upload the complete contents, including the `assets` folder, to GitHub Pages.
