# Korean Memory Game — v5.3 diagnostic build

Purpose: isolate the GitHub Pages image-loading problem using only 10 local SVG images.

Changes from v5.2:
- Service worker removed for testing.
- On load, the page unregisters any older service worker for this site.
- Image URLs are resolved explicitly against `document.baseURI`, which is compatible with GitHub Pages project paths.
- If an image fails, the screen displays the exact URL/path that failed.
- 10-word vocabulary and local `assets/000.svg` through `assets/009.svg` are retained.
- Part-of-speech labels and the established game behavior are retained.

Upload ALL files and the `assets` folder to the same GitHub Pages publishing directory. After deploying, refresh the page once. If an image still fails, the displayed `Failed path:` line identifies exactly what the browser tried to load.
