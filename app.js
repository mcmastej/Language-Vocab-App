const $=id=>document.getElementById(id);
const homeScreen=$("homeScreen"),vocabMenu=$("vocabMenu"),grammarMenu=$("grammarMenu");
const startScreen=$("startScreen"),game=$("game"),grammarGame=$("grammarGame"),grammarComplete=$("grammarComplete");
const subtitle=$("subtitle"),scoreBox=$("scoreBox"),highScoreEl=$("highScore");
const modeTitle=$("modeTitle"),modeInstructions=$("modeInstructions");
const levelEl=$("level"),statusEl=$("status");
const imageStage=$("imageStage"),wordStage=$("wordStage"),blankStage=$("blankStage");
const answerStage=$("answerStage"),choiceStage=$("choiceStage"),correctStage=$("correctStage"),wrongStage=$("wrongStage");
const wordImage=$("wordImage"),partOfSpeech=$("partOfSpeech"),presentedWord=$("presentedWord");
const answerInput=$("answerInput"),correctAnswer=$("correctAnswer"),choiceGrid=$("choiceGrid"),speechNote=$("speechNote");

let mode=null,level=1,currentWord=null,remainingWords=[],timers=[],roundLocked=false;
let grammarStack=[],currentGrammarCard=null,grammarCompletedCount=0,grammarAwaitingNext=false;

const SCORE_KEYS={
  speaking:"koreanMemoryHighScoreSpeaking",
  listening:"koreanMemoryHighScoreListening"
};

function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function shuffle(a){
  const x=[...a];
  for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}
  return x;
}
function normalize(s){return s.trim().replace(/\s+/g,"")}
function speakKorean(text){
  if(!("speechSynthesis" in window))return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang="ko-KR";u.rate=.85;
  speechSynthesis.speak(u);
}
function imageElement(path){
  const img=document.createElement("img");
  img.src=new URL(path,document.baseURI).href;
  img.alt="";img.draggable=false;img.loading="eager";
  return img;
}
function hideAllScreens(){
  [homeScreen,vocabMenu,grammarMenu,startScreen,game,grammarGame,grammarComplete].forEach(x=>x.classList.add("hidden"));
}
function goMainHome(){
  clearTimers();speechSynthesis?.cancel();mode=null;
  hideAllScreens();homeScreen.classList.remove("hidden");scoreBox.classList.add("hidden");
  subtitle.textContent="Choose a section.";
}
function openVocabMenu(){
  clearTimers();speechSynthesis?.cancel();mode=null;
  hideAllScreens();vocabMenu.classList.remove("hidden");scoreBox.classList.add("hidden");
  subtitle.textContent="Choose a Vocab mode.";
}
function openGrammarMenu(){
  clearTimers();speechSynthesis?.cancel();mode=null;
  hideAllScreens();grammarMenu.classList.remove("hidden");scoreBox.classList.add("hidden");
  subtitle.textContent="Choose a Grammar mode.";
}

/* ---------- Vocab modes: preserved from V7.2 ---------- */
function hideStages(){[imageStage,wordStage,blankStage,answerStage,choiceStage,correctStage,wrongStage].forEach(x=>x.classList.add("hidden"))}
function resetWordStack(){remainingWords=[...WORDS]}
function chooseWord(){
  if(!remainingWords.length)resetWordStack();
  return remainingWords.splice(Math.floor(Math.random()*remainingWords.length),1)[0];
}
function scoreKey(){return SCORE_KEYS[mode]}
function getHighScore(){return mode ? Number(localStorage.getItem(scoreKey())||0) : 0}
function setHighScore(v){
  if(v>getHighScore())localStorage.setItem(scoreKey(),String(v));
  highScoreEl.textContent=getHighScore();
}
function updateScore(){highScoreEl.textContent=getHighScore()}
function selectVocabMode(nextMode){
  mode=nextMode;hideAllScreens();startScreen.classList.remove("hidden");scoreBox.classList.remove("hidden");
  if(mode==="speaking"){
    modeTitle.textContent="Speaking/Writing";
    modeInstructions.textContent="An image appears for 2 seconds. After the level-based memory delay, type or speak the Korean word.";
    subtitle.textContent="Vocab · Image → Korean";
  }else{
    modeTitle.textContent="Listening/Reading";
    modeInstructions.textContent="A Korean word appears for 2 seconds and is announced once. After the level-based memory delay, choose its image from four choices.";
    subtitle.textContent="Vocab · Korean → Image";
  }
  updateScore();
}
function startVocabGame(){
  clearTimers();speechSynthesis?.cancel();level=1;roundLocked=false;resetWordStack();
  hideAllScreens();game.classList.remove("hidden");startVocabLevel();
}
function startVocabLevel(){
  clearTimers();roundLocked=false;currentWord=chooseWord();levelEl.textContent=level;hideStages();
  if(mode==="speaking")startSpeakingLevel();else startListeningLevel();
}
function startSpeakingLevel(){
  statusEl.textContent="Look carefully.";imageStage.classList.remove("hidden");
  wordImage.innerHTML="";wordImage.appendChild(imageElement(currentWord.image));
  partOfSpeech.textContent=`(${currentWord.type})`;
  timers.push(setTimeout(()=>{imageStage.classList.add("hidden");blankStage.classList.remove("hidden");statusEl.textContent="Remember it."},2000));
  timers.push(setTimeout(()=>{
    blankStage.classList.add("hidden");answerStage.classList.remove("hidden");statusEl.textContent="What was it?";
    answerInput.value="";answerInput.focus();
  },2000+level*1000));
}
function startListeningLevel(){
  statusEl.textContent="Read and listen.";wordStage.classList.remove("hidden");
  presentedWord.textContent=currentWord.ko;speakKorean(currentWord.ko);
  timers.push(setTimeout(()=>{wordStage.classList.add("hidden");blankStage.classList.remove("hidden");statusEl.textContent="Remember it."},2000));
  timers.push(setTimeout(()=>{blankStage.classList.add("hidden");showChoices();statusEl.textContent="Choose the matching image."},2000+level*1000));
}
function getDistractors(){return shuffle(WORDS.filter(w=>w!==currentWord)).slice(0,3)}
function showChoices(){
  choiceStage.classList.remove("hidden");choiceGrid.innerHTML="";
  shuffle([currentWord,...getDistractors()]).forEach(word=>{
    const btn=document.createElement("button");btn.type="button";btn.className="image-choice";
    btn.dataset.correct=word===currentWord?"true":"false";btn.appendChild(imageElement(word.image));
    btn.addEventListener("click",()=>handleImageChoice(btn,word));choiceGrid.appendChild(btn);
  });
}
function markSpeakingCorrect(){
  clearTimers();setHighScore(level);hideStages();correctStage.classList.remove("hidden");statusEl.textContent="Correct!";
  timers.push(setTimeout(()=>{level++;startVocabLevel()},700));
}
function markSpeakingWrong(){
  clearTimers();hideStages();wrongStage.classList.remove("hidden");statusEl.textContent="Game over";
  correctAnswer.textContent=currentWord.ko;setHighScore(level-1);
}
function handleImageChoice(btn,word){
  if(roundLocked)return;roundLocked=true;
  const buttons=[...choiceGrid.querySelectorAll(".image-choice")];buttons.forEach(b=>b.disabled=true);
  if(word===currentWord){
    btn.classList.add("correct-choice");setHighScore(level);statusEl.textContent="Correct!";
    timers.push(setTimeout(()=>{hideStages();correctStage.classList.remove("hidden");timers.push(setTimeout(()=>{level++;startVocabLevel()},550))},450));
  }else{
    btn.classList.add("wrong-choice");
    const correctBtn=buttons.find(b=>b.dataset.correct==="true");if(correctBtn)correctBtn.classList.add("correct-choice");
    setHighScore(level-1);statusEl.textContent="Game over";correctAnswer.textContent=currentWord.ko;
    wrongStage.classList.remove("hidden");wrongStage.classList.add("choice-feedback");
  }
}

/* ---------- Grammar: Answering a Question ---------- */
const grammarCompleted=$("grammarCompleted"),grammarTotal=$("grammarTotal"),grammarStatus=$("grammarStatus");
const grammarImage=$("grammarImage"),grammarPromptEn=$("grammarPromptEn"),grammarPromptKo=$("grammarPromptKo");
const grammarAnswerInput=$("grammarAnswerInput"),grammarFeedback=$("grammarFeedback");
const grammarFeedbackTitle=$("grammarFeedbackTitle"),grammarFeedbackLabel=$("grammarFeedbackLabel");
const grammarCorrectAnswer=$("grammarCorrectAnswer"),grammarNextBtn=$("grammarNextBtn"),grammarSpeechNote=$("grammarSpeechNote");
const grammarUserAnswerBlock=$("grammarUserAnswerBlock"),grammarUserAnswer=$("grammarUserAnswer");
const grammarCorrectAnswerBlock=$("grammarCorrectAnswerBlock");

function startGrammarGame(){
  clearTimers();speechSynthesis?.cancel();
  grammarStack=shuffle(GRAMMAR_CARDS);grammarCompletedCount=0;currentGrammarCard=null;grammarAwaitingNext=false;
  grammarTotal.textContent=GRAMMAR_CARDS.length;grammarCompleted.textContent="0";
  hideAllScreens();grammarGame.classList.remove("hidden");
  subtitle.textContent="Grammar · Answering a Question";
  showNextGrammarCard();
}
function showNextGrammarCard(){
  speechSynthesis?.cancel();
  if(!grammarStack.length){finishGrammarGame();return}
  currentGrammarCard=grammarStack.shift();grammarAwaitingNext=false;
  grammarFeedback.classList.add("hidden");
  grammarUserAnswerBlock.classList.add("hidden");
  grammarCorrectAnswerBlock.classList.add("hidden");
  grammarUserAnswer.textContent="";
  grammarCorrectAnswer.textContent="";
  $("grammarAnswerForm").classList.remove("hidden");grammarSpeechNote.classList.remove("hidden");
  grammarImage.innerHTML="";grammarImage.appendChild(imageElement(currentGrammarCard.image));
  grammarPromptEn.textContent=currentGrammarCard.promptEn;
  grammarPromptKo.textContent=currentGrammarCard.promptKo;
  grammarAnswerInput.value="";grammarAnswerInput.disabled=false;
  grammarStatus.textContent="Answer the question.";
  // The Korean question is announced once when the card first appears.
  speakKorean(currentGrammarCard.promptKo);
  grammarAnswerInput.focus();
}
function submitGrammarAnswer(){
  if(grammarAwaitingNext||!currentGrammarCard)return;
  grammarAwaitingNext=true;
  const submittedAnswer=grammarAnswerInput.value.trim();
  grammarAnswerInput.disabled=true;
  $("grammarAnswerForm").classList.add("hidden");grammarSpeechNote.classList.add("hidden");
  grammarFeedback.classList.remove("hidden");
  grammarUserAnswerBlock.classList.add("hidden");
  grammarCorrectAnswerBlock.classList.add("hidden");
  if(normalize(grammarAnswerInput.value)===normalize(currentGrammarCard.answer)){
    grammarCompletedCount++;grammarCompleted.textContent=grammarCompletedCount;
    grammarStatus.textContent="Correct!";
    grammarFeedbackTitle.textContent="Correct!";
    grammarNextBtn.textContent="Next card";
  }else{
    // Incorrect cards go to the back and must later be answered correctly.
    grammarStack.push(currentGrammarCard);
    grammarStatus.textContent="Incorrect";
    grammarFeedbackTitle.textContent="Incorrect";
    grammarUserAnswer.textContent=submittedAnswer || "(No answer entered)";
    grammarCorrectAnswer.textContent=currentGrammarCard.answer;
    grammarUserAnswerBlock.classList.remove("hidden");
    grammarCorrectAnswerBlock.classList.remove("hidden");
    grammarNextBtn.textContent="Try later";
  }
}
function finishGrammarGame(){
  speechSynthesis?.cancel();hideAllScreens();grammarComplete.classList.remove("hidden");
  subtitle.textContent="Grammar · Complete";
}
function grammarBackToMenu(){
  clearTimers();speechSynthesis?.cancel();openGrammarMenu();
}

/* ---------- Navigation ---------- */
$("vocabSectionBtn").addEventListener("click",openVocabMenu);
$("grammarSectionBtn").addEventListener("click",openGrammarMenu);
$("vocabHomeBtn").addEventListener("click",goMainHome);
$("grammarHomeBtn").addEventListener("click",goMainHome);
$("speakingModeBtn").addEventListener("click",()=>selectVocabMode("speaking"));
$("listeningModeBtn").addEventListener("click",()=>selectVocabMode("listening"));
$("answerQuestionBtn").addEventListener("click",startGrammarGame);
$("startBtn").addEventListener("click",startVocabGame);
$("startBackBtn").addEventListener("click",openVocabMenu);
$("gameHomeBtn").addEventListener("click",goMainHome);
$("wrongHomeBtn").addEventListener("click",goMainHome);
$("restartBtn").addEventListener("click",startVocabGame);
$("hearBtn").addEventListener("click",()=>currentWord&&speakKorean(currentWord.ko));
$("answerForm").addEventListener("submit",e=>{
  e.preventDefault();
  normalize(answerInput.value)===normalize(currentWord.ko)?markSpeakingCorrect():markSpeakingWrong();
});

$("grammarGameHomeBtn").addEventListener("click",goMainHome);
$("grammarCompleteHomeBtn").addEventListener("click",goMainHome);
$("grammarRestartBtn").addEventListener("click",startGrammarGame);
$("grammarHearQuestionBtn").addEventListener("click",()=>currentGrammarCard&&speakKorean(currentGrammarCard.promptKo));
$("grammarHearAnswerBtn").addEventListener("click",()=>currentGrammarCard&&speakKorean(currentGrammarCard.answer));
$("grammarNextBtn").addEventListener("click",showNextGrammarCard);
$("grammarAnswerForm").addEventListener("submit",e=>{e.preventDefault();submitGrammarAnswer()});

/* ---------- Speech recognition ---------- */
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SpeechRecognition){
  const vocabRecognition=new SpeechRecognition();
  vocabRecognition.lang="ko-KR";vocabRecognition.interimResults=false;vocabRecognition.maxAlternatives=1;
  $("speakBtn").addEventListener("click",()=>{speechNote.textContent="Listening…";vocabRecognition.start()});
  vocabRecognition.onresult=e=>{answerInput.value=e.results[0][0].transcript.trim();speechNote.textContent="Speech captured. Press Submit."};
  vocabRecognition.onerror=()=>{speechNote.textContent="Speech input was not available. You can type the answer."};

  const grammarRecognition=new SpeechRecognition();
  grammarRecognition.lang="ko-KR";grammarRecognition.interimResults=false;grammarRecognition.maxAlternatives=1;
  $("grammarSpeakBtn").addEventListener("click",()=>{grammarSpeechNote.textContent="Listening…";grammarRecognition.start()});
  grammarRecognition.onresult=e=>{grammarAnswerInput.value=e.results[0][0].transcript.trim();grammarSpeechNote.textContent="Speech captured. Press Submit."};
  grammarRecognition.onerror=()=>{grammarSpeechNote.textContent="Speech input was not available. You can type the answer."};
}else{
  $("speakBtn").disabled=true;$("grammarSpeakBtn").disabled=true;
  speechNote.textContent="Speech input is not supported in this browser. Typing is available.";
  grammarSpeechNote.textContent="Speech input is not supported in this browser. Typing is available.";
}
goMainHome();
