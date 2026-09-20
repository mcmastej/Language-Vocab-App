# V5.4 Korean Memory Game — 10-image flat-file test

This build is designed for uploading every file individually through GitHub's web interface.

There is NO `assets` folder. The ten SVG image files (`000.svg` through `009.svg`) belong in the repository root beside `index.html`, `app.js`, `styles.css`, and `words.js`.

The vocabulary image paths are correspondingly flat:
- `000.svg`
- `001.svg`
- ...
- `009.svg`

The service worker remains disabled during testing. If an image fails, the app displays the exact failed URL.

Upload every file from this ZIP individually to the same GitHub repository directory.
