# V8.2.2 Korean Memory Game — Vocab + Grammar

V8.0 preserves the verified V7.2 Vocab games and introduces a separate Grammar branch.

## App hierarchy
- Vocab
  - Speaking/Writing
  - Listening/Reading
- Grammar
  - Answering a Question

## Grammar prototype
The first Grammar deck uses two existing images:
- `000.jpg`: "What fruit is this?" / `이 과일은 뭐예요?`
  - Exact answer: `이 과일은 사과예요`
- `001.jpg`: "Is this a dog or a cat?" / `이게 개예요, 아니면 고양이예요?`
  - Exact answer: `이게 고양이예요`

`이게` is used consistently in both the second question and its answer.

### Grammar flow
- Cards are shuffled at the beginning.
- The Korean question is spoken automatically when a card appears.
- A speaker button replays the question.
- Answers can be typed or entered with browser speech recognition.
- Answer checking is exact apart from leading/trailing/repeated whitespace normalization.
- Correct cards are completed and removed.
- Incorrect cards reveal the correct answer and are appended to the back of the stack.
- The deck ends only after every card has been answered correctly.
- Progress is shown as Completed X / 2.

## Development notes
- All 30 Vocab images remain root-level.
- Grammar reuses existing images rather than duplicating them.
- Grammar content is stored separately in `grammar.js` for future expansion.
- Service worker remains disabled during development/testing.

## V8.1
Grammar → Answering a Question now contains 10 cards using images 000.jpg–009.jpg.
Cards 002–009 add beginner grammar practice involving counters, colors, alternatives,
location particles, possession/content, and progressive actions.

The established Grammar behavior is unchanged:
- Korean question is spoken automatically once.
- Speaker button replays the Korean question.
- English and Korean prompts remain visible.
- Exact Korean answer checking is retained.
- Incorrect cards show the correct answer and return to the back of the stack.
- The game completes only after all 10 cards have been answered correctly.

## V8.2
Grammar incorrect-answer feedback now includes:
- the learner's submitted answer;
- the correct Korean answer;
- a speaker button that plays the correct Korean answer for study.

The answer-audio button currently uses the same browser speech-synthesis system as the
question audio. Dedicated prerecorded/generated Korean audio assets are intentionally
deferred to the next audio-focused iteration.

## V8.2.1 hotfix
Fixes the Grammar incorrect-answer review visibility regression.
After an incorrect answer, the learner now sees:
- their submitted answer;
- the correct answer;
- the speaker button for the correct answer;
- the Try later button.

The global `.hidden` utility is now authoritative (`display:none !important`) so
component display rules cannot accidentally reveal/hide the wrong feedback elements.

## V8.2.2 answer-matching fix
Korean answer comparison now ignores:
- spaces and other whitespace;
- punctuation such as periods and commas;
- symbol characters.

Korean wording itself remains exact. For example, `세권` and `세 권` are treated as
the same answer, and a final period does not affect correctness.


## V8.3 Korean-first Grammar breakdown
- Grammar cards show only the Korean question during normal play; the English question is hidden from the initial card.
- A Break it down panel contains the English translation and word/root/particle/conjugation analysis.
- The answer breakdown and grammar note become available only after the learner submits, so the help panel cannot reveal the answer beforehand.
- English translation and linguistic analysis are confined to the breakdown panel.


## V8.5 separate breakdown controls
- `Breakdown question` is available with the Korean question.
- `Breakdown answer` remains hidden until the learner submits an answer.
- Question and answer breakdowns open independently.
- English translations and linguistic analysis remain confined to breakdown content.


## V8.5 — 50-word vocab bank and stacks
- Vocabulary expanded from 30 to 50 words/images.
- Stack 1: 000–024 (25 words).
- Stack 2: 025–049 (25 words).
- Stack selection appears after choosing Speaking/Writing or Listening/Reading.
- Each selected stack shuffles independently; Listening/Reading distractors come from the active stack.
- Existing Grammar behavior and V8.3.1 question/answer breakdowns are preserved.

### Download packaging
The ZIP is organized into `Images/` and `App-Files/` only for easier file management. When publishing to GitHub Pages, upload the contents of both folders together into the repository root, as before. The application itself still uses root-level image paths.


## V8.5
After an incorrect Vocab answer, a Translation button is available. The English meaning remains hidden until the learner taps the button. This applies to both Speaking/Writing and Listening/Reading.

## V8.5
- Vocabulary expanded to 75 words/images.
- Vocab Stack 3 contains words 050–074.
- All three 25-word stacks are available in Speaking/Writing and Listening/Reading.
- The version number at the bottom of the page is updated to V8.5.
- V8.4.1 incorrect-answer Translation behavior is preserved.

## V8.5.1 vocabulary audit
A programmatic audit of all 75 Korean vocabulary entries found 75 unique entries:
- Stack 1 (000–024): 25 unique
- Stack 2 (025–049): 25 unique
- Stack 3 (050–074): 25 unique
- Across all stacks: 75 unique

No vocabulary replacements were necessary. The webpage footer version, which had remained stale, is corrected to V8.5.1.

## V8.5.2 image-quality correction
- Replaced low-detail icon-style images 066–074 with realistic photographic-style image cues.
- Stack 3 image files 050–074 were audited and normalized as 600×600 JPEG files.
- Vocabulary and game behavior are unchanged.
- All 75 vocabulary entries remain unique.
- Page footer updated to V8.5.2.

## V8.5.3 Stack 3 image audit
- Audited every Stack 3 vocabulary image from 050 through 074.
- Replaced all 25 Stack 3 image assets with clean, realistic/semi-realistic image cues.
- Removed source-grid numbers, labels, adjacent-image fragments, and icon-style placeholders.
- Verified every Stack 3 image is a 600×600 JPEG.
- Verified each image filename 050.jpg–074.jpg maps directly to vocabulary slot 050–074 in words.js.
- Vocabulary content and game logic are unchanged.
- All 75 vocabulary entries remain unique.
- Page footer updated to V8.5.3.

## V8.6.0
- Added Vocab Stack 4 (075–099) to both Vocab modes.
- 100 total vocabulary entries; full exact-Hangul duplicate audit passed: 100/100 unique.
- Images 075.jpg–099.jpg are verified 600×600 JPEGs.
- Image crops exclude printed numbers, labels, borders, and adjacent tiles.
- Existing Grammar and Vocab behavior is preserved.
- Visible footer updated and verified as V8.6.0.

## V8.6.1
- Regenerated all Stack 4 images (075–099) from the new clean, text-free source.
- Final files 075.jpg–099.jpg are verified 600×600 JPEGs.
- No numbers, labels, or neighboring-image fragments are included.
- Cross-reference against 000–074 found no duplicate word+meaning entries.
- Same Korean spelling with a genuinely different meaning is permitted by design.
- Vocab/Grammar logic is unchanged.
- Visible footer updated and verified as V8.6.1.

## V8.6.2
- Rebuilt all Stack 4 images (075–099) from a clean 5×5 grid made only of square photographic cells.
- Extracted exact cell interiors while excluding the thin grid separator lines.
- No source numbers, vocabulary labels, headers, footers, or card UI are present.
- Verified all 25 final Stack 4 files are individual 600×600 JPEGs.
- Cross-reference against 000–074 passed: no duplicate word+meaning entries.
- Same Korean spelling with a different meaning remains allowed.
- Visible page footer updated and verified as V8.6.2.

## V8.6.3
- Regenerated Stack 4 using a widely spaced 5×5 photo grid.
- Detected each photo region independently from the white gutters.
- Applied an additional inward safety margin before extraction.
- Saved 075.jpg–099.jpg as individual 600×600 high-quality JPEG files.
- Verified all 25 output dimensions/formats and exact words.js filename mapping.
- Duplicate word+meaning audit against 000–074 passed.
- Visible footer updated and verified as V8.6.3.

## V8.6.4
- Regenerated all Stack 4 images using the accepted widely spaced 5×5 source-grid standard.
- Each of the 25 source cells uses a distinct image; no image is intentionally reused within Stack 4.
- Each photo region was detected independently and cropped with an inward safety margin.
- 075.jpg–099.jpg are verified individual 600×600 high-quality JPEG files.
- Filename-to-vocabulary mapping was verified.
- Duplicate word+meaning audit against 000–074 passed.
- Visible footer updated and verified as V8.6.4.

## V8.6.5
- Replaced 090.jpg (인터넷) with a computer connected to the internet.
- Replaced 075.jpg (목말라요) with a visibly thirsty person holding water.
- Both are verified 600×600 JPEGs using the spaced-grid safety-margin method.
- Footer verified as V8.6.5.

## V8.7.0
- Added Vocab Stack 5 (100–124) to Speaking/Writing and Listening/Reading.
- Vocabulary bank expanded to 125 entries.
- Exact Korean duplicate audit passed: 125/125 unique strings.
- Stack 5 images use the accepted spaced-grid + inward-safety-margin extraction standard.
- 100.jpg–124.jpg are verified individual 600×600 high-quality JPEGs.
- Each Stack 5 slot uses a distinct source tile; no image file is reused.
- Visible footer updated and verified as V8.7.0.

## V8.7.1
- Replaced 102.jpg (운동 / exercise) with a person lifting weights.
- Replaced 122.jpg (여행 / travel) with a traveler carrying a suitcase at an airport.
- Both replacement images are verified 600×600 high-quality JPEGs.
- Added additional vertical spacing before Home/Back navigation controls.
- Grammar answer input no longer receives automatic focus when a card loads.
- On mobile, the keyboard now remains closed until the learner manually taps the answer field.
- Visible footer updated and verified as V8.7.1.


## V8.8.0
- Each 25-word Vocab stack presents every word only once per attempt, in random order.
- Any incorrect answer keeps the existing restart-from-beginning behavior.
- Perfect 25/25 opens a Congratulations screen with Restart Stack and Back to Vocab Stacks.
- Restart restores and reshuffles all 25 words.
- Applies to Speaking/Writing and Listening/Reading.
- Replaced 109.jpg (쌀) with a bag of uncooked rice.
- Footer updated to V8.8.0.

## V8.8.2
- Corrected Stack 1 using caption-free imagery and gutter-based extraction.
- Stack 1 replaced with the user-selected 25 words and corresponding 600×600 JPEGs.
- Stacks 2–5 and Grammar unchanged.

## V8.8.3
- Built from the V8.8.2 benchmark.
- Replaced Vocab Stack 2 (025–049) with the user-selected workplace vocabulary.
- Replaced 025.jpg–049.jpg using the validated gutter-detection image workflow.
- Final images are 600×600 JPEGs.
- Stack 1 and Stacks 3–5 unchanged; Grammar unchanged.
- Footer updated to V8.8.3.

## V8.8.4
- Replaced Stack 1 images 000–024 with the approved regenerated set.
- Used gutter detection, inward safety margin, square crop, and 600×600 JPEG output.
- Vocabulary, other stacks, Grammar, and gameplay unchanged.
- Footer V8.8.4.
