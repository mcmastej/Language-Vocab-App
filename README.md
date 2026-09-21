# V7.2 Korean Memory Game — Two Learning Modes

Built from the verified V6.1 30-word build.

## Home screen
- Speaking/Writing: original Image → Korean mode.
- Listening/Reading: new Korean → Image mode.

## Listening/Reading flow
1. Korean word appears for 2 seconds and is spoken once.
2. Screen clears for the level number of seconds.
3. Four shuffled images appear: one correct and three distractors.
4. Correct selection is highlighted green, `Correct!` is shown, and the next level begins automatically.
5. Incorrect selection is highlighted red and the correct image is highlighted green.
6. After an incorrect answer, the original Korean word reappears with Hear word, Restart, and Home controls.

## Other behavior
- Both modes share the same 30-word vocabulary/image bank.
- Words do not repeat during a game until the bank is exhausted.
- Speaking/Writing and Listening/Reading have separate local high scores.
- Home controls allow returning to mode selection.
- Existing root-level image structure is preserved for GitHub web uploads.
- Service worker remains disabled during development/testing.

## V7.2 change
- Speaking/Writing image presentation reduced from 3 seconds to 2 seconds.
- Listening/Reading remains at 2 seconds.
