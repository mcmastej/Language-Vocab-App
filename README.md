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


## V8.4 separate breakdown controls
- `Breakdown question` is available with the Korean question.
- `Breakdown answer` remains hidden until the learner submits an answer.
- Question and answer breakdowns open independently.
- English translations and linguistic analysis remain confined to breakdown content.


## V8.4 — 50-word vocab bank and stacks
- Vocabulary expanded from 30 to 50 words/images.
- Stack 1: 000–024 (25 words).
- Stack 2: 025–049 (25 words).
- Stack selection appears after choosing Speaking/Writing or Listening/Reading.
- Each selected stack shuffles independently; Listening/Reading distractors come from the active stack.
- Existing Grammar behavior and V8.3.1 question/answer breakdowns are preserved.

### Download packaging
The ZIP is organized into `Images/` and `App-Files/` only for easier file management. When publishing to GitHub Pages, upload the contents of both folders together into the repository root, as before. The application itself still uses root-level image paths.
