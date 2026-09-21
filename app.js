const $=id=>document.getElementById(id);
const homeScreen=$("homeScreen"),startScreen=$("startScreen"),game=$("game");
const subtitle=$("subtitle"),scoreBox=$("scoreBox"),highScoreEl=$("highScore");
const modeTitle=$("modeTitle"),modeInstructions=$("modeInstructions");
const levelEl=$("level"),statusEl=$("status");
const imageStage=$("imageStage"),wordStage=$("wordStage"),blankStage=$("blankStage");
const answerStage=$("answerStage"),choiceStage=$("choiceStage"),correctStage=$("correctStage"),wrongStage=$("wrongStage");
const wordImage=$("wordImage"),partOfSpeech=$("partOfSpeech"),presentedWord=$("presentedWord");
const answerInput=$("answerInput"),correctAnswer=$("correctAnswer"),choiceGrid=$("choiceGrid"),speechNote=$("speechNote");

let mode=null,level=1,currentWord=null,remainingWords=[],timers=[],roundLocked=false;

const SCORE_KEYS={
  speaking:"koreanMemoryHighScoreSpeaking",
  listening:"koreanMemoryHighScoreListening"
};

function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function hideStages(){[imageStage,wordStage,blankStage,answerStage,choiceStage,correctStage,wrongStage].forEach(x=>x.classList.add("hidden"))}
function resetWordStack(){remainingWords=[...WORDS]}
function chooseWord(){
  if(!remainingWords.length)resetWordStack();
  return remainingWords.splice(Math.floor(Math.random()*remainingWords.length),1)[0];
}
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
function scoreKey(){return SCORE_KEYS[mode]}
function getHighScore(){return mode ? Number(localStorage.getItem(scoreKey())||0) : 0}
function setHighScore(v){
  if(v>getHighScore())localStorage.setItem(scoreKey(),String(v));
  highScoreEl.textContent=getHighScore();
}
function updateScore(){highScoreEl.textContent=getHighScore()}
function imageElement(word){
  const img=document.createElement("img");
  img.src=new URL(word.image,document.baseURI).href;
  img.alt="";
  img.draggable=false;
  img.loading="eager";
  return img;
}

function selectMode(nextMode){
  mode=nextMode;
  homeScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  scoreBox.classList.remove("hidden");
  if(mode==="speaking"){
    modeTitle.textContent="Speaking/Writing";
    modeInstructions.textContent="An image appears for 3 seconds. After the level-based memory delay, type or speak the Korean word.";
    subtitle.textContent="Image → Korean";
  }else{
    modeTitle.textContent="Listening/Reading";
    modeInstructions.textContent="A Korean word appears for 3 seconds and is announced once. After the level-based memory delay, choose its image from four choices.";
    subtitle.textContent="Korean → Image";
  }
  updateScore();
}
function goHome(){
  clearTimers();speechSynthesis?.cancel();
  mode=null;level=1;currentWord=null;roundLocked=false;
  hideStages();game.classList.add("hidden");startScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");scoreBox.classList.add("hidden");
  subtitle.textContent="Choose a learning mode.";
}
function startGame(){
  clearTimers();speechSynthesis?.cancel();
  level=1;roundLocked=false;resetWordStack();
  startScreen.classList.add("hidden");game.classList.remove("hidden");
  startLevel();
}
function startLevel(){
  clearTimers();roundLocked=false;currentWord=chooseWord();
  levelEl.textContent=level;hideStages();
  if(mode==="speaking")startSpeakingLevel();
  else startListeningLevel();
}
function startSpeakingLevel(){
  statusEl.textContent="Look carefully.";
  imageStage.classList.remove("hidden");
  wordImage.innerHTML="";
  wordImage.appendChild(imageElement(currentWord));
  partOfSpeech.textContent=`(${currentWord.type})`;
  timers.push(setTimeout(()=>{
    imageStage.classList.add("hidden");blankStage.classList.remove("hidden");statusEl.textContent="Remember it.";
  },2000));
  timers.push(setTimeout(()=>{
    blankStage.classList.add("hidden");answerStage.classList.remove("hidden");statusEl.textContent="What was it?";
    answerInput.value="";answerInput.focus();
  },2000+level*1000));
}
function startListeningLevel(){
  statusEl.textContent="Read and listen.";
  wordStage.classList.remove("hidden");
  presentedWord.textContent=currentWord.ko;
  // Announce exactly once during the 3-second presentation.
  speakKorean(currentWord.ko);
  timers.push(setTimeout(()=>{
    wordStage.classList.add("hidden");blankStage.classList.remove("hidden");statusEl.textContent="Remember it.";
  },2000));
  timers.push(setTimeout(()=>{
    blankStage.classList.add("hidden");showChoices();statusEl.textContent="Choose the matching image.";
  },2000+level*1000));
}
function getDistractors(){
  return shuffle(WORDS.filter(w=>w!==currentWord)).slice(0,3);
}
function showChoices(){
  choiceStage.classList.remove("hidden");choiceGrid.innerHTML="";
  const choices=shuffle([currentWord,...getDistractors()]);
  choices.forEach(word=>{
    const btn=document.createElement("button");
    btn.type="button";btn.className="image-choice";
    btn.dataset.correct=word===currentWord ? "true":"false";
    btn.appendChild(imageElement(word));
    btn.addEventListener("click",()=>handleImageChoice(btn,word));
    choiceGrid.appendChild(btn);
  });
}
function markSpeakingCorrect(){
  clearTimers();setHighScore(level);hideStages();correctStage.classList.remove("hidden");statusEl.textContent="Correct!";
  timers.push(setTimeout(()=>{level++;startLevel()},700));
}
function markSpeakingWrong(){
  clearTimers();hideStages();wrongStage.classList.remove("hidden");statusEl.textContent="Game over";
  correctAnswer.textContent=currentWord.ko;setHighScore(level-1);
}
function handleImageChoice(btn,word){
  if(roundLocked)return;
  roundLocked=true;
  const buttons=[...choiceGrid.querySelectorAll(".image-choice")];
  buttons.forEach(b=>b.disabled=true);
  if(word===currentWord){
    btn.classList.add("correct-choice");
    setHighScore(level);statusEl.textContent="Correct!";
    timers.push(setTimeout(()=>{
      hideStages();correctStage.classList.remove("hidden");
      timers.push(setTimeout(()=>{level++;startLevel()},550));
    },450));
  }else{
    btn.classList.add("wrong-choice");
    const correctBtn=buttons.find(b=>b.dataset.correct==="true");
    if(correctBtn)correctBtn.classList.add("correct-choice");
    setHighScore(level-1);statusEl.textContent="Game over";
    // Keep highlighted choices visible and show feedback beneath them.
    correctAnswer.textContent=currentWord.ko;
    wrongStage.classList.remove("hidden");
    wrongStage.classList.add("choice-feedback");
  }
}

$("speakingModeBtn").addEventListener("click",()=>selectMode("speaking"));
$("listeningModeBtn").addEventListener("click",()=>selectMode("listening"));
$("startBtn").addEventListener("click",startGame);
$("startHomeBtn").addEventListener("click",goHome);
$("gameHomeBtn").addEventListener("click",goHome);
$("wrongHomeBtn").addEventListener("click",goHome);
$("restartBtn").addEventListener("click",startGame);
$("hearBtn").addEventListener("click",()=>currentWord&&speakKorean(currentWord.ko));
$("answerForm").addEventListener("submit",e=>{
  e.preventDefault();
  normalize(answerInput.value)===normalize(currentWord.ko)?markSpeakingCorrect():markSpeakingWrong();
});

const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SpeechRecognition){
  const recognition=new SpeechRecognition();
  recognition.lang="ko-KR";recognition.interimResults=false;recognition.maxAlternatives=1;
  $("speakBtn").addEventListener("click",()=>{speechNote.textContent="Listening…";recognition.start()});
  recognition.onresult=e=>{answerInput.value=e.results[0][0].transcript.trim();speechNote.textContent="Speech captured. Press Submit."};
  recognition.onerror=()=>{speechNote.textContent="Speech input was not available. You can type the answer."};
  recognition.onend=()=>{if(speechNote.textContent==="Listening…")speechNote.textContent="Speech input ended. Press Submit."};
}else{
  $("speakBtn").disabled=true;
  speechNote.textContent="Speech input is not supported in this browser. Typing is available.";
}
goHome();
