const highScoreEl=document.getElementById("highScore");
const levelEl=document.getElementById("level");
const statusEl=document.getElementById("status");
const startScreen=document.getElementById("startScreen");
const game=document.getElementById("game");
const imageStage=document.getElementById("imageStage");
const blankStage=document.getElementById("blankStage");
const answerStage=document.getElementById("answerStage");
const correctStage=document.getElementById("correctStage");
const wrongStage=document.getElementById("wrongStage");
const wordImage=document.getElementById("wordImage");
const answerInput=document.getElementById("answerInput");
const correctAnswer=document.getElementById("correctAnswer");
const partOfSpeech=document.getElementById("partOfSpeech");
const blankCountdown=document.getElementById("blankCountdown");
const speechNote=document.getElementById("speechNote");

let level=1,currentWord=null,remainingWords=[],timers=[];

function getHighScore(){return Number(localStorage.getItem("koreanMemoryHighScore")||0)}
function setHighScore(v){if(v>getHighScore())localStorage.setItem("koreanMemoryHighScore",String(v));highScoreEl.textContent=getHighScore()}
function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function resetWordStack(){remainingWords=[...WORDS]}
function chooseWord(){if(!remainingWords.length)resetWordStack();const i=Math.floor(Math.random()*remainingWords.length);return remainingWords.splice(i,1)[0]}
function hideStages(){[imageStage,blankStage,answerStage,correctStage,wrongStage].forEach(x=>x.classList.add("hidden"))}
function speakKorean(text){if(!("speechSynthesis" in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="ko-KR";u.rate=.85;window.speechSynthesis.speak(u)}
function normalize(s){return s.trim().replace(/\s+/g,"")}
function startLevel(){
  clearTimers(); currentWord=chooseWord(); levelEl.textContent=level; statusEl.textContent="Look carefully.";
  hideStages(); imageStage.classList.remove("hidden");
  wordImage.innerHTML="";
  const img=document.createElement("img");
  img.src=currentWord.image;
  img.alt="";
  img.draggable=false;
  img.loading="eager";
  img.onerror=()=>{wordImage.textContent="Image unavailable";};
  wordImage.appendChild(img);
  partOfSpeech.textContent=`(${currentWord.type})`;
  // Deliberately no audio here: the image is shown silently.
  timers.push(setTimeout(()=>{
    imageStage.classList.add("hidden"); blankStage.classList.remove("hidden"); statusEl.textContent="Remember it.";
  },3000));
  timers.push(setTimeout(()=>{
    blankStage.classList.add("hidden"); answerStage.classList.remove("hidden"); statusEl.textContent="What was it?";
    answerInput.value=""; answerInput.focus();
  },3000+level*1000));
}
function startGame(){
  clearTimers();window.speechSynthesis?.cancel();level=1;resetWordStack();
  startScreen.classList.add("hidden");game.classList.remove("hidden");startLevel();
}
function markCorrect(){
  clearTimers();setHighScore(level);hideStages();correctStage.classList.remove("hidden");statusEl.textContent="Correct!";
  timers.push(setTimeout(()=>{level++;startLevel()},700));
}
function markWrong(){
  clearTimers();hideStages();wrongStage.classList.remove("hidden");statusEl.textContent="Game over";
  correctAnswer.textContent=currentWord.ko;setHighScore(level-1);
}
document.getElementById("startBtn").addEventListener("click",startGame);
document.getElementById("restartBtn").addEventListener("click",startGame);
document.getElementById("hearBtn").addEventListener("click",()=>speakKorean(currentWord.ko));
document.getElementById("answerForm").addEventListener("submit",e=>{e.preventDefault();normalize(answerInput.value)===normalize(currentWord.ko)?markCorrect():markWrong()});

const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
if(SpeechRecognition){
  const recognition=new SpeechRecognition();recognition.lang="ko-KR";recognition.interimResults=false;recognition.maxAlternatives=1;
  document.getElementById("speakBtn").addEventListener("click",()=>{speechNote.textContent="Listening…";recognition.start()});
  recognition.onresult=e=>{answerInput.value=e.results[0][0].transcript.trim();speechNote.textContent="Speech captured. Press Submit."};
  recognition.onerror=()=>{speechNote.textContent="Speech input was not available. You can type the answer."};
  recognition.onend=()=>{if(speechNote.textContent==="Listening…")speechNote.textContent="Speech input ended. Press Submit."};
}else{
  document.getElementById("speakBtn").disabled=true;speechNote.textContent="Speech input is not supported in this browser. Typing is available.";
}
highScoreEl.textContent=getHighScore();
