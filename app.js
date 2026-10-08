const $=id=>document.getElementById(id);
const homeScreen=$("homeScreen"),vocabMenu=$("vocabMenu"),vocabStackMenu=$("vocabStackMenu"),grammarMenu=$("grammarMenu"),grammarSpeakingMenu=$("grammarSpeakingMenu");
const startScreen=$("startScreen"),game=$("game"),vocabComplete=$("vocabComplete"),grammarGame=$("grammarGame"),grammarComplete=$("grammarComplete");
const subtitle=$("subtitle"),scoreBox=$("scoreBox"),highScoreEl=$("highScore");
const modeTitle=$("modeTitle"),modeInstructions=$("modeInstructions");
const levelEl=$("level"),statusEl=$("status");
const imageStage=$("imageStage"),wordStage=$("wordStage"),blankStage=$("blankStage");
const answerStage=$("answerStage"),choiceStage=$("choiceStage"),correctStage=$("correctStage"),wrongStage=$("wrongStage");
const wordImage=$("wordImage"),partOfSpeech=$("partOfSpeech"),presentedWord=$("presentedWord");
const answerInput=$("answerInput"),correctAnswer=$("correctAnswer"),choiceGrid=$("choiceGrid"),speechNote=$("speechNote");
const translationBtn=$("translationBtn"),translationText=$("translationText");

let mode=null,vocabStack=1,level=1,currentWord=null,remainingWords=[],timers=[],roundLocked=false;
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
function normalize(s){
  return s
    .normalize("NFC")
    .replace(/[\s\p{P}\p{S}]+/gu,"");
}
function speakKorean(text,onDone){
  if(!("speechSynthesis" in window)){if(onDone)onDone();return null}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang="ko-KR";u.rate=.85;
  if(onDone){
    let finished=false;
    const finish=()=>{if(finished)return;finished=true;onDone()};
    u.onend=finish;
    u.onerror=finish;
    // Safety fallback only if the browser never reports speech completion.
    timers.push(setTimeout(finish,30000));
  }
  speechSynthesis.speak(u);
  return u;
}
function imageElement(path){
  const img=document.createElement("img");
  img.src=new URL(path,document.baseURI).href;
  img.alt="";img.draggable=false;img.loading="eager";
  return img;
}
function hideAllScreens(){
  [homeScreen,vocabMenu,vocabStackMenu,grammarMenu,grammarSpeakingMenu,startScreen,game,vocabComplete,grammarGame,grammarComplete,$("alphabetMenu"),$("alphabetModeMenu"),$("alphabetStartScreen"),$("alphabetListScreen"),$("alphabetGame"),$("alphabetComplete"),$("alphabet3Game"),$("alphabet3Complete")].filter(Boolean).forEach(x=>x.classList.add("hidden"));
}
function goMainHome(){
  clearTimers();speechSynthesis?.cancel();mode=null;
  hideAllScreens();homeScreen.classList.remove("hidden");scoreBox.classList.add("hidden");
  subtitle.textContent="Choose a section.";
}
function openVocabMenu(){
  clearTimers();speechSynthesis?.cancel();mode=null;
  hideAllScreens();vocabMenu.classList.remove("hidden");scoreBox.classList.add("hidden");
  subtitle.textContent="Vocab · Choose a stack.";
}
function openGrammarMenu(){
  clearTimers();speechSynthesis?.cancel();mode=null;
  hideAllScreens();grammarMenu.classList.remove("hidden");scoreBox.classList.add("hidden");
  subtitle.textContent="Choose a Grammar mode.";
}

/* ---------- Vocab modes: preserved from V7.2 ---------- */
function hideStages(){[imageStage,wordStage,blankStage,answerStage,choiceStage,correctStage,wrongStage].forEach(x=>x.classList.add("hidden"))}
function activeWords(){const start=(vocabStack-1)*25;return WORDS.slice(start,start+25)}
function resetWordStack(){remainingWords=[...activeWords()]}
function chooseWord(){
  if(!remainingWords.length)return null;
  return remainingWords.splice(Math.floor(Math.random()*remainingWords.length),1)[0];
}
function scoreKey(){return SCORE_KEYS[mode]}
function getHighScore(){return mode ? Number(localStorage.getItem(scoreKey())||0) : 0}
function setHighScore(v){
  if(v>getHighScore())localStorage.setItem(scoreKey(),String(v));
  highScoreEl.textContent=getHighScore();
}
function updateScore(){highScoreEl.textContent=getHighScore()}
function renderVocabReference(){
  const rows=$("vocabReferenceRows");
  if(!rows)return;
  const start=(vocabStack-1)*25;
  rows.innerHTML="";
  WORDS.slice(start,start+25).forEach(word=>{
    const row=document.createElement("div"); row.className="vocab-reference-row";
    const ko=document.createElement("span"); ko.className="vocab-reference-ko"; ko.textContent=word.ko;
    const en=document.createElement("span"); en.className="vocab-reference-en"; en.textContent=word.meaning;
    row.append(ko,en); rows.appendChild(row);
  });
}

function selectVocabStack(stack){
  vocabStack=stack;mode=null;hideAllScreens();vocabStackMenu.classList.remove("hidden");scoreBox.classList.add("hidden");
  $("stackModeTitle").textContent=`Vocab Stack ${vocabStack}`;
  subtitle.textContent=`Vocab · Stack ${vocabStack} · Choose a mode.`;
}
function selectVocabMode(nextMode){
  mode=nextMode;hideAllScreens();startScreen.classList.remove("hidden");scoreBox.classList.remove("hidden");
  renderVocabReference();
  if(mode==="speaking"){
    modeTitle.textContent=`Speaking/Writing · Vocab Stack ${vocabStack}`;
    modeInstructions.textContent="An image appears for 2 seconds. After the level-based memory delay, type or speak the Korean word.";
    subtitle.textContent=`Vocab · Stack ${vocabStack} · Image → Korean`;
  }else{
    modeTitle.textContent=`Reading/Listening · Vocab Stack ${vocabStack}`;
    modeInstructions.textContent="A Korean word appears for 2 seconds and is announced once. After the level-based memory delay, choose its image from four choices.";
    subtitle.textContent=`Vocab · Stack ${vocabStack} · Korean → Image`;
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
function completeVocabStack(){
  clearTimers();speechSynthesis?.cancel();roundLocked=true;
  hideAllScreens();vocabComplete.classList.remove("hidden");scoreBox.classList.remove("hidden");
  $("vocabCompleteTitle").textContent="Congratulations!";
  $("vocabCompleteText").textContent=`You answered all 25 words in Vocab Stack ${vocabStack} correctly.`;
  subtitle.textContent=`Vocab · Stack ${vocabStack} · Complete`;
}
function restartCompletedVocabStack(){startVocabGame()}
function backToVocabStacks(){
  clearTimers();speechSynthesis?.cancel();openVocabMenu();
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
function getDistractors(){return shuffle(activeWords().filter(w=>w!==currentWord)).slice(0,3)}
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
  if(!remainingWords.length){timers.push(setTimeout(completeVocabStack,700))}
  else{timers.push(setTimeout(()=>{level++;startVocabLevel()},700))}
}
function prepareVocabTranslation(){
  translationText.textContent=currentWord.meaning;
  translationText.classList.add("hidden");
  translationBtn.textContent="Translation";
}
function markSpeakingWrong(){
  clearTimers();hideStages();wrongStage.classList.remove("hidden");statusEl.textContent="Game over";
  correctAnswer.textContent=currentWord.ko;prepareVocabTranslation();setHighScore(level-1);
}
function handleImageChoice(btn,word){
  if(roundLocked)return;roundLocked=true;
  const buttons=[...choiceGrid.querySelectorAll(".image-choice")];buttons.forEach(b=>b.disabled=true);
  if(word===currentWord){
    btn.classList.add("correct-choice");setHighScore(level);statusEl.textContent="Correct!";
    timers.push(setTimeout(()=>{
      hideStages();correctStage.classList.remove("hidden");
      if(!remainingWords.length){timers.push(setTimeout(completeVocabStack,550))}
      else{timers.push(setTimeout(()=>{level++;startVocabLevel()},550))}
    },450));
  }else{
    btn.classList.add("wrong-choice");
    const correctBtn=buttons.find(b=>b.dataset.correct==="true");if(correctBtn)correctBtn.classList.add("correct-choice");
    setHighScore(level-1);statusEl.textContent="Game over";correctAnswer.textContent=currentWord.ko;prepareVocabTranslation();
    wrongStage.classList.remove("hidden");wrongStage.classList.add("choice-feedback");
  }
}

/* ---------- Grammar memory modes ---------- */
let grammarMode="speaking",grammarLevel=1,grammarRun=[],grammarLocked=false,grammarStackNumber=1;
const grammarCompleted=$("grammarCompleted"),grammarTotal=$("grammarTotal"),grammarStatus=$("grammarStatus");
const grammarImage=$("grammarImage"),grammarPromptKo=$("grammarPromptKo");
const grammarQuestionBreakdownBtn=$("grammarQuestionBreakdownBtn"),grammarQuestionBreakdown=$("grammarQuestionBreakdown");
const grammarAnswerBreakdownBtn=$("grammarAnswerBreakdownBtn"),grammarAnswerBreakdown=$("grammarAnswerBreakdown");
const grammarAnswerInput=$("grammarAnswerInput"),grammarFeedback=$("grammarFeedback"),grammarFeedbackTitle=$("grammarFeedbackTitle");
const grammarCorrectAnswer=$("grammarCorrectAnswer"),grammarSpeechNote=$("grammarSpeechNote"),grammarCorrectAnswerBlock=$("grammarCorrectAnswerBlock");
function breakdownTable(rows){return `<div class="breakdown-table">${rows.map(r=>`<div class="breakdown-row"><strong lang="ko">${r[0]}</strong><span>${r[1]}</span><span>${r[2]}</span></div>`).join("")}</div>`}
function renderGrammarBreakdown(target){if(!currentGrammarCard)return;target.innerHTML=`<h3>Sentence</h3><p class="breakdown-translation">${currentGrammarCard.meaning}</p>${breakdownTable(currentGrammarCard.breakdown)}<h3>Grammar note</h3><p>${currentGrammarCard.grammarNote}</p>`}
function toggleGrammarBreakdown(btn,panel,label){const opening=panel.classList.contains("hidden");panel.classList.toggle("hidden");btn.setAttribute("aria-expanded",String(opening));btn.textContent=opening?`Hide ${label}`:`Breakdown ${label}`}
function hideGrammarStages(){["grammarSentenceStage","grammarImageStage","grammarBlankStage","grammarChoiceStage","grammarAnswerStage","grammarFeedback"].forEach(id=>$(id).classList.add("hidden"))}
function chooseGrammarCard(){if(!grammarRun.length)return null;return grammarRun.splice(Math.floor(Math.random()*grammarRun.length),1)[0]}
function selectGrammarMode(nextMode){grammarMode=nextMode;hideAllScreens();grammarSpeakingMenu.classList.remove("hidden");scoreBox.classList.add("hidden");$("grammarModeMenuTitle").textContent=`Grammar · ${nextMode==="listening"?"Reading/Listening":"Speaking/Writing"}`;subtitle.textContent=$("grammarModeMenuTitle").textContent}
function startGrammarGame(stack=grammarStackNumber){grammarStackNumber=stack;clearTimers();speechSynthesis?.cancel();grammarLevel=1;grammarRun=GRAMMAR_CARDS.slice((grammarStackNumber-1)*10,grammarStackNumber*10);grammarLocked=false;grammarCompletedCount=0;grammarCompleted.textContent="0";grammarTotal.textContent=grammarRun.length;hideAllScreens();grammarGame.classList.remove("hidden");subtitle.textContent=`Grammar · Stack ${grammarStackNumber} · ${grammarMode==="listening"?"Korean → Image":"Image → Korean"}`;startGrammarLevel()}
function startGrammarLevel(){clearTimers();grammarLocked=false;if(!grammarRun.length){finishGrammarGame();return}currentGrammarCard=chooseGrammarCard();$("grammarLevel").textContent=grammarLevel;hideGrammarStages();grammarQuestionBreakdown.classList.add("hidden");grammarAnswerBreakdown.classList.add("hidden");grammarQuestionBreakdownBtn.classList.add("hidden");grammarAnswerBreakdownBtn.classList.add("hidden");$("grammarRestartWrongBtn").classList.add("hidden");$("grammarHearQuestionBtn").classList.add("hidden");grammarCorrectAnswerBlock.classList.add("hidden");if(grammarMode==="listening")startGrammarListening();else startGrammarSpeaking()}
function startGrammarListening(){grammarStatus.textContent="Read and listen.";$("grammarSentenceStage").classList.remove("hidden");grammarPromptKo.textContent=currentGrammarCard.sentence;speakKorean(currentGrammarCard.sentence,()=>{$("grammarSentenceStage").classList.add("hidden");$("grammarBlankStage").classList.remove("hidden");grammarStatus.textContent="Remember it.";timers.push(setTimeout(()=>{$("grammarBlankStage").classList.add("hidden");showGrammarChoices();grammarStatus.textContent="Choose the matching image."},grammarLevel*1000))})}
function startGrammarSpeaking(){grammarStatus.textContent="Look carefully.";$("grammarImageStage").classList.remove("hidden");grammarImage.innerHTML="";grammarImage.appendChild(imageElement(currentGrammarCard.image));timers.push(setTimeout(()=>{$("grammarImageStage").classList.add("hidden");$("grammarBlankStage").classList.remove("hidden");grammarStatus.textContent="Remember it."},2000));timers.push(setTimeout(()=>{$("grammarBlankStage").classList.add("hidden");$("grammarAnswerStage").classList.remove("hidden");grammarStatus.textContent="What was the sentence?";grammarAnswerInput.value="";grammarAnswerInput.disabled=false;grammarAnswerInput.focus()},2000+grammarLevel*1000))}
function grammarDistractors(){return shuffle(GRAMMAR_CARDS.slice((grammarStackNumber-1)*10,grammarStackNumber*10).filter(c=>c!==currentGrammarCard)).slice(0,3)}
function showGrammarChoices(){$("grammarChoiceStage").classList.remove("hidden");$("grammarReplayBtn").disabled=false;const grid=$("grammarChoiceGrid");grid.innerHTML="";shuffle([currentGrammarCard,...grammarDistractors()]).forEach(card=>{const btn=document.createElement("button");btn.type="button";btn.className="image-choice";btn.dataset.correct=card===currentGrammarCard?"true":"false";btn.appendChild(imageElement(card.image));btn.addEventListener("click",()=>handleGrammarChoice(btn,card));grid.appendChild(btn)})}
function grammarCorrect(){grammarLocked=true;grammarCompletedCount++;grammarCompleted.textContent=grammarCompletedCount;grammarStatus.textContent="Correct!";if(!grammarRun.length)timers.push(setTimeout(finishGrammarGame,650));else timers.push(setTimeout(()=>{grammarLevel++;startGrammarLevel()},650))}
function grammarWrong(){clearTimers();grammarLocked=true;if(grammarMode!=="listening")hideGrammarStages();grammarFeedback.classList.remove("hidden");grammarFeedbackTitle.textContent="Incorrect";grammarStatus.textContent="Game over";grammarCorrectAnswer.textContent=currentGrammarCard.sentence;grammarCorrectAnswerBlock.classList.remove("hidden");$("grammarRestartWrongBtn").classList.remove("hidden");renderGrammarBreakdown(grammarMode==="listening"?grammarQuestionBreakdown:grammarAnswerBreakdown);if(grammarMode==="listening"){grammarQuestionBreakdownBtn.classList.remove("hidden");grammarQuestionBreakdownBtn.textContent="Breakdown sentence";$("grammarHearQuestionBtn").classList.remove("hidden")}else{grammarAnswerBreakdownBtn.classList.remove("hidden");grammarAnswerBreakdownBtn.textContent="Breakdown answer"}}
function handleGrammarChoice(btn,card){if(grammarLocked)return;grammarLocked=true;$("grammarReplayBtn").disabled=true;speechSynthesis?.cancel();const buttons=[...$("grammarChoiceGrid").querySelectorAll(".image-choice")];buttons.forEach(b=>b.disabled=true);if(card===currentGrammarCard){btn.classList.add("correct-choice");grammarCorrect()}else{btn.classList.add("wrong-choice");buttons.find(b=>b.dataset.correct==="true")?.classList.add("correct-choice");timers.push(setTimeout(grammarWrong,450))}}
function submitGrammarAnswer(){if(grammarLocked||!currentGrammarCard)return;if(normalize(grammarAnswerInput.value)===normalize(currentGrammarCard.sentence))grammarCorrect();else grammarWrong()}
function finishGrammarGame(){clearTimers();speechSynthesis?.cancel();hideAllScreens();grammarComplete.classList.remove("hidden");subtitle.textContent="Grammar · Stack ${grammarStackNumber} · Complete"}
function grammarBackToMenu(){clearTimers();speechSynthesis?.cancel();openGrammarMenu()}
/* ---------- Navigation ---------- */
$("vocabSectionBtn").addEventListener("click",openVocabMenu);
$("grammarSectionBtn").addEventListener("click",openGrammarMenu);
$("vocabHomeBtn").addEventListener("click",goMainHome);
$("grammarHomeBtn").addEventListener("click",goMainHome);
$("speakingModeBtn").addEventListener("click",()=>selectVocabMode("speaking"));
$("listeningModeBtn").addEventListener("click",()=>selectVocabMode("listening"));
$("vocabStack1Btn").addEventListener("click",()=>selectVocabStack(1));
$("vocabStack2Btn").addEventListener("click",()=>selectVocabStack(2));
$("vocabStack3Btn").addEventListener("click",()=>selectVocabStack(3));
$("vocabStack4Btn").addEventListener("click",()=>selectVocabStack(4));
$("vocabStack5Btn").addEventListener("click",()=>selectVocabStack(5));
$("stackBackBtn").addEventListener("click",openVocabMenu);
$("vocabRestartCompleteBtn").addEventListener("click",restartCompletedVocabStack);
$("vocabBackToStacksBtn").addEventListener("click",backToVocabStacks);
$("grammarSpeakingModeBtn").addEventListener("click",()=>selectGrammarMode("speaking"));
$("grammarReadingModeBtn").addEventListener("click",()=>selectGrammarMode("listening"));
$("grammarSpeakingBackBtn").addEventListener("click",openGrammarMenu);
$("answerQuestionBtn").addEventListener("click",()=>startGrammarGame(1));
$("grammarStack2Btn").addEventListener("click",()=>startGrammarGame(2));
$("startBtn").addEventListener("click",startVocabGame);
$("startBackBtn").addEventListener("click",()=>selectVocabStack(vocabStack));
$("gameHomeBtn").addEventListener("click",goMainHome);
$("wrongHomeBtn").addEventListener("click",goMainHome);
$("restartBtn").addEventListener("click",startVocabGame);
$("hearBtn").addEventListener("click",()=>currentWord&&speakKorean(currentWord.ko));
translationBtn.addEventListener("click",()=>{
  const hidden=translationText.classList.toggle("hidden");
  translationBtn.textContent=hidden?"Translation":"Hide translation";
});
$("answerForm").addEventListener("submit",e=>{
  e.preventDefault();
  normalize(answerInput.value)===normalize(currentWord.ko)?markSpeakingCorrect():markSpeakingWrong();
});

$("grammarGameHomeBtn").addEventListener("click",goMainHome);
$("grammarCompleteHomeBtn").addEventListener("click",openGrammarMenu);
$("grammarRestartBtn").addEventListener("click",()=>startGrammarGame());
grammarQuestionBreakdownBtn.addEventListener("click",()=>toggleGrammarBreakdown(grammarQuestionBreakdownBtn,grammarQuestionBreakdown,"sentence"));
grammarAnswerBreakdownBtn.addEventListener("click",()=>toggleGrammarBreakdown(grammarAnswerBreakdownBtn,grammarAnswerBreakdown,"answer"));
$("grammarReplayBtn").addEventListener("click",()=>{if(grammarMode==="listening"&&!grammarLocked&&currentGrammarCard&&!$("grammarChoiceStage").classList.contains("hidden"))speakKorean(currentGrammarCard.sentence)});
$("grammarHearQuestionBtn").addEventListener("click",()=>currentGrammarCard&&speakKorean(currentGrammarCard.sentence));
$("grammarHearAnswerBtn").addEventListener("click",()=>currentGrammarCard&&speakKorean(currentGrammarCard.sentence));
$("grammarRestartWrongBtn").addEventListener("click",()=>startGrammarGame());
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

// V8.9.9 Alphabet gameplay.
const ALPHABET_STACKS={
1:{title:"Alphabet 1",subtitle:"Individual Hangul letters",items:[
{ko:"ㅂ",roman:"ba",audio:"바"},{ko:"ㅈ",roman:"ja",audio:"자"},{ko:"ㄷ",roman:"da",audio:"다"},{ko:"ㄱ",roman:"ga",audio:"가"},{ko:"ㅅ",roman:"sa",audio:"사"},
{ko:"ㅃ",roman:"bba",audio:"빠"},{ko:"ㅉ",roman:"jja",audio:"짜"},{ko:"ㄸ",roman:"dda",audio:"따"},{ko:"ㄲ",roman:"gga",audio:"까"},{ko:"ㅆ",roman:"ssa",audio:"싸"},
{ko:"ㅁ",roman:"ma",audio:"마"},{ko:"ㄴ",roman:"na",audio:"나"},{ko:"ㅇ",roman:"ng",audio:"앙"},{ko:"ㄹ",roman:"ra",audio:"라"},{ko:"ㅎ",roman:"ha",audio:"하"},
{ko:"ㅋ",roman:"ka",audio:"카"},{ko:"ㅌ",roman:"ta",audio:"타"},{ko:"ㅊ",roman:"cha",audio:"차"},{ko:"ㅍ",roman:"pa",audio:"파"},
{ko:"ㅛ",roman:"yo",audio:"요"},{ko:"ㅕ",roman:"yeo",audio:"여"},{ko:"ㅑ",roman:"ya",audio:"야"},{ko:"ㅐ",roman:"ae",audio:"애"},{ko:"ㅔ",roman:"e",audio:"에"},
{ko:"ㅒ",roman:"yae",audio:"얘"},{ko:"ㅖ",roman:"ye",audio:"예"},{ko:"ㅗ",roman:"o",audio:"오"},{ko:"ㅓ",roman:"eo",audio:"어"},{ko:"ㅏ",roman:"a",audio:"아"},
{ko:"ㅣ",roman:"i",audio:"이"},{ko:"ㅠ",roman:"yu",audio:"유"},{ko:"ㅜ",roman:"u",audio:"우"},{ko:"ㅡ",roman:"eu",audio:"으"}]},
2:{title:"Alphabet 2",subtitle:"Combined Hangul forms",items:[
{ko:"요",roman:"yo"},{ko:"여",roman:"yeo"},{ko:"야",roman:"ya"},{ko:"애",roman:"ae"},{ko:"에",roman:"e"},{ko:"얘",roman:"yae"},{ko:"예",roman:"ye"},
{ko:"오",roman:"o"},{ko:"어",roman:"eo"},{ko:"아",roman:"a"},{ko:"이",roman:"i"},{ko:"유",roman:"yu"},{ko:"우",roman:"u"},{ko:"으",roman:"eu"},
{ko:"와",roman:"wa"},{ko:"외",roman:"oe"},{ko:"워",roman:"wo"},{ko:"위",roman:"wi"},{ko:"의",roman:"ui"}]},
3:{title:"Alphabet 3",subtitle:"Letter structures inside real words",items:[
{ko:"괜찮아요",translation:"okay / alright"},{ko:"읽어요",translation:"read"},{ko:"없어요",translation:"there isn't / don't have"},
{ko:"앉아요",translation:"sit"},{ko:"많아요",translation:"many / a lot"},{ko:"않아요",translation:"do not / isn't"},
{ko:"값",translation:"price / value"},{ko:"넓어요",translation:"wide / spacious"},{ko:"젊어요",translation:"young"},
{ko:"짧아요",translation:"short"},{ko:"밝아요",translation:"bright"},{ko:"좋아요",translation:"good / like"},
{ko:"공원",translation:"park"},{ko:"방",translation:"room"},{ko:"강아지",translation:"puppy / dog"}]}};
let alphabetMode="Reading/Listening",alphabetStackNumber=1,alphabetQueue=[],alphabetCurrent=null,alphabetLocked=false,alphabetTimer=null;
function alphabetHideStages(){["alphabetPromptStage","alphabetAnswerStage","alphabetChoiceStage","alphabetFeedbackStage"].forEach(id=>$(id)?.classList.add("hidden"))}
function alphabetSpeak(card){if(card)speakKorean(card.audio||card.ko)}
function alphabetShowScreen(id){hideAllScreens();$(id)?.classList.remove("hidden");scoreBox.classList.add("hidden")}
function openAlphabetMenu(){
 clearTimers();clearTimeout(alphabetTimer);speechSynthesis?.cancel();alphabetShowScreen("alphabetMenu");subtitle.textContent="Alphabet · Choose a stack.";
}
function openAlphabetModeMenu(){
 const d=ALPHABET_STACKS[alphabetStackNumber];
 alphabetShowScreen("alphabetModeMenu");
 $("alphabetModeStackTitle").textContent=d.title;
 subtitle.textContent=`Alphabet · ${d.title} · Choose a mode`;
}
function openAlphabetStartScreen(){
 const d=ALPHABET_STACKS[alphabetStackNumber];
 alphabetShowScreen("alphabetStartScreen");
 $("alphabetStartTitle").textContent=d.title;
 $("alphabetStartSubtitle").textContent=alphabetStackNumber===3?"Word Structure":alphabetMode;
 const purpose=alphabetStackNumber===1
   ?"Learn individual Hangul letters and their basic sounds."
   :alphabetStackNumber===2
     ?"Combine letters and complete syllables."
     :"Learn how letters combine into complex words.";
 $("alphabetStartPurpose").textContent=purpose;
 subtitle.textContent=`Alphabet · ${d.title}${alphabetStackNumber===3?"":` · ${alphabetMode}`}`;
}
function chooseAlphabetStack(n){
 alphabetStackNumber=n;
 if(n===3){alphabetMode="Alphabet 3";openAlphabetStartScreen()}
 else openAlphabetModeMenu();
}
function startSelectedAlphabetGame(){
 if(alphabetStackNumber===3){startAlphabet3();return}
 const d=ALPHABET_STACKS[alphabetStackNumber];
 alphabetQueue=shuffle(d.items);alphabetShowScreen("alphabetGame");
 subtitle.textContent=`Alphabet · ${d.title} · ${alphabetMode}`;nextAlphabetCard();
}
function nextAlphabetCard(){
 clearTimeout(alphabetTimer);speechSynthesis?.cancel();alphabetHideStages();alphabetLocked=false;
 $("alphabetNextBtn").classList.add("hidden");$("alphabetChoiceNextBtn").classList.add("hidden");$("alphabetHearBtn").classList.add("hidden");
 if(!alphabetQueue.length){finishAlphabetStack();return}
 alphabetCurrent=alphabetQueue.shift();$("alphabetRemaining").textContent=alphabetQueue.length+1;
 $("alphabetStatus").textContent=alphabetMode==="Reading/Listening"?"Read and listen.":"Remember the romanization.";
 $("alphabetPrompt").textContent=alphabetMode==="Reading/Listening"?alphabetCurrent.ko:alphabetCurrent.roman;
 $("alphabetPromptStage").classList.remove("hidden");if(alphabetMode==="Reading/Listening")alphabetSpeak(alphabetCurrent);
 alphabetTimer=setTimeout(()=>{$("alphabetPromptStage").classList.add("hidden");
 if(alphabetMode==="Reading/Listening")showAlphabetChoices();else{$("alphabetAnswerInput").value="";$("alphabetAnswerStage").classList.remove("hidden");$("alphabetStatus").textContent="Enter the Korean.";$("alphabetAnswerInput").focus()}},2000)
}
function alphabetDistractors(){return shuffle(ALPHABET_STACKS[alphabetStackNumber].items.filter(x=>x.roman!==alphabetCurrent.roman)).slice(0,3)}
function showAlphabetChoices(){
 const choices=shuffle([alphabetCurrent,...alphabetDistractors()]),grid=$("alphabetChoiceGrid");grid.innerHTML="";
 choices.forEach(card=>{const b=document.createElement("button");b.type="button";b.className="roman-choice";b.textContent=card.roman;b.addEventListener("click",()=>selectAlphabetChoice(b,card,grid));grid.appendChild(b)});
 $("alphabetChoiceStage").classList.remove("hidden");$("alphabetStatus").textContent="Choose the romanization."
}
function selectAlphabetChoice(button,card,grid){
 if(alphabetLocked)return;alphabetLocked=true;[...grid.children].forEach(b=>b.disabled=true);
 if(card.roman===alphabetCurrent.roman){button.classList.add("correct-choice");$("alphabetStatus").textContent="Correct!";setTimeout(nextAlphabetCard,650)}
 else{button.classList.add("wrong-choice");[...grid.children].find(b=>b.textContent===alphabetCurrent.roman)?.classList.add("correct-choice");alphabetQueue.push(alphabetCurrent);
 $("alphabetStatus").textContent="Incorrect — retry later.";$("alphabetChoiceNextBtn").classList.remove("hidden")}
}
function submitAlphabetAnswer(){
 if(alphabetLocked||!alphabetCurrent)return;alphabetLocked=true;const correct=normalize($("alphabetAnswerInput").value)===normalize(alphabetCurrent.ko);
 $("alphabetAnswerStage").classList.add("hidden");$("alphabetFeedbackStage").classList.remove("hidden");
 if(correct){$("alphabetFeedbackTitle").textContent="Correct!";$("alphabetCorrectLabel").classList.add("hidden");$("alphabetCorrectAnswer").classList.add("hidden");setTimeout(nextAlphabetCard,650)}
 else{alphabetQueue.push(alphabetCurrent);$("alphabetFeedbackTitle").textContent="Incorrect";$("alphabetCorrectLabel").classList.remove("hidden");$("alphabetCorrectAnswer").classList.remove("hidden");
 $("alphabetCorrectAnswer").textContent=alphabetCurrent.ko;$("alphabetHearBtn").classList.remove("hidden");$("alphabetNextBtn").classList.remove("hidden");$("alphabetStatus").textContent="Incorrect — retry later."}
}
function finishAlphabetStack(){alphabetShowScreen("alphabetComplete");$("alphabetCompleteText").textContent=`You completed ${ALPHABET_STACKS[alphabetStackNumber].title}.`;subtitle.textContent=`Alphabet · ${ALPHABET_STACKS[alphabetStackNumber].title} · Complete`}
$("alphabetSectionBtn")?.addEventListener("click",openAlphabetMenu);
$("alphabetHomeBtn")?.addEventListener("click",goMainHome);
document.querySelectorAll(".alphabet-stack-btn").forEach(b=>b.addEventListener("click",()=>chooseAlphabetStack(+b.dataset.stack)));
$("alphabetReadingBtn")?.addEventListener("click",()=>{alphabetMode="Reading/Listening";openAlphabetStartScreen()});
$("alphabetSpeakingBtn")?.addEventListener("click",()=>{alphabetMode="Speaking/Writing";openAlphabetStartScreen()});
$("alphabetModeBackBtn")?.addEventListener("click",openAlphabetMenu);
$("alphabetStartBackBtn")?.addEventListener("click",()=>alphabetStackNumber===3?openAlphabetMenu():openAlphabetModeMenu());
$("alphabetStartBtn")?.addEventListener("click",startSelectedAlphabetGame);
$("alphabetListBackBtn")?.addEventListener("click",openAlphabetMenu);
$("alphabetGameHomeBtn")?.addEventListener("click",goMainHome);
$("alphabetAnswerForm")?.addEventListener("submit",e=>{e.preventDefault();submitAlphabetAnswer()});
$("alphabetHearBtn")?.addEventListener("click",()=>alphabetSpeak(alphabetCurrent));
$("alphabetNextBtn")?.addEventListener("click",nextAlphabetCard);
$("alphabetRestartBtn")?.addEventListener("click",startSelectedAlphabetGame);
$("alphabetBackToStacksBtn")?.addEventListener("click",openAlphabetMenu);
$("alphabetChoiceNextBtn")?.addEventListener("click",nextAlphabetCard);

// Alphabet 3 uses the same copy-the-word mastery game in both Alphabet modes.
let alphabet3Queue=[],alphabet3Current=null,alphabet3Locked=false,alphabet3Recognition=null;
function startAlphabet3(){
  alphabet3Queue=shuffle(ALPHABET_STACKS[3].items);
  alphabetShowScreen("alphabet3Game");
  subtitle.textContent=`Alphabet · Alphabet 3 · ${alphabetMode}`;
  nextAlphabet3Card();
}
function nextAlphabet3Card(){
  speechSynthesis?.cancel();alphabet3Locked=false;
  if(!alphabet3Queue.length){alphabetShowScreen("alphabet3Complete");subtitle.textContent="Alphabet · Alphabet 3 · Complete";return}
  alphabet3Current=alphabet3Queue.shift();
  $("alphabet3Remaining").textContent=alphabet3Queue.length+1;
  $("alphabet3Status").textContent="Copy the Korean word.";
  $("alphabet3Target").textContent=alphabet3Current.ko;
  $("alphabet3Translation").textContent=alphabet3Current.translation;
  $("alphabet3Translation").classList.add("hidden");
  $("alphabet3TranslationBtn").textContent="Translation";
  $("alphabet3AnswerInput").value="";
  $("alphabet3Feedback").textContent="";
  $("alphabet3ActionBtn").textContent="Submit";
  $("alphabet3ActionBtn").type="submit";
  alphabetSpeak(alphabet3Current);
  $("alphabet3AnswerInput").focus();
}
function submitAlphabet3(){
  if(alphabet3Locked||!alphabet3Current)return;
  alphabet3Locked=true;
  const ok=normalize($("alphabet3AnswerInput").value)===normalize(alphabet3Current.ko);
  if(ok){
    $("alphabet3Feedback").textContent="Correct!";
    $("alphabet3Status").textContent="Correct!";
    $("alphabet3ActionBtn").textContent="Next";
    $("alphabet3ActionBtn").type="button";
  }else{
    alphabet3Queue.push(alphabet3Current);
    $("alphabet3Feedback").textContent="Incorrect";
    $("alphabet3Status").textContent="Incorrect — retry later.";
    $("alphabet3ActionBtn").textContent="Next";
    $("alphabet3ActionBtn").type="button";
  }
}
function toggleAlphabet3Translation(){
  const el=$("alphabet3Translation"),hidden=el.classList.toggle("hidden");
  $("alphabet3TranslationBtn").textContent=hidden?"Translation":"Hide translation";
}
function startAlphabet3Speech(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){$("alphabet3Feedback").textContent="Speech recognition is not available in this browser.";return}
  try{alphabet3Recognition?.abort()}catch(e){}
  alphabet3Recognition=new SR();alphabet3Recognition.lang="ko-KR";alphabet3Recognition.interimResults=false;alphabet3Recognition.maxAlternatives=1;
  $("alphabet3MicBtn").textContent="…";
  alphabet3Recognition.onresult=e=>{$("alphabet3AnswerInput").value=e.results[0][0].transcript};
  alphabet3Recognition.onerror=()=>{$("alphabet3Feedback").textContent="Speech recognition did not capture an answer."};
  alphabet3Recognition.onend=()=>{$("alphabet3MicBtn").textContent="🎤"};
  alphabet3Recognition.start();
}
$("alphabet3AnswerForm")?.addEventListener("submit",e=>{e.preventDefault();submitAlphabet3()});
$("alphabet3HearBtn")?.addEventListener("click",()=>alphabetSpeak(alphabet3Current));
$("alphabet3TranslationBtn")?.addEventListener("click",toggleAlphabet3Translation);
$("alphabet3MicBtn")?.addEventListener("click",startAlphabet3Speech);
$("alphabet3ActionBtn")?.addEventListener("click",e=>{
  if($("alphabet3ActionBtn").type==="button"){
    e.preventDefault();
    nextAlphabet3Card();
  }
});
$("alphabet3HomeBtn")?.addEventListener("click",goMainHome);
$("alphabet3RestartBtn")?.addEventListener("click",startAlphabet3);
$("alphabet3BackBtn")?.addEventListener("click",openAlphabetMenu);

