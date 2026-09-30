const GRAMMAR_CARDS = [
  {image:"000.jpg",promptEn:"Is this person going or coming?",promptKo:"이 사람은 가요, 와요?",answer:"이 사람은 가요.",
   questionBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["가요","가다 → 가요","go / is going"],["와요?","오다 → 와요","come / is coming?"]],
   answerBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["가요","가다 → 가요","goes / is going"]],
   grammarNote:"은/는 marks the topic. 가다 becomes 가요 in the polite present tense."},

  {image:"002.jpg",promptEn:"What is this person watching?",promptKo:"이 사람은 뭐를 봐요?",answer:"이 사람은 텔레비전을 봐요.",
   questionBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["뭐를","뭐 + 를","what + object particle"],["봐요?","보다 → 봐요","see / watch?"]],
   answerBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["텔레비전을","텔레비전 + 을","television + object particle"],["봐요","보다 → 봐요","watches"]],
   grammarNote:"을/를 marks the direct object. 보다 contracts to 봐요 in polite present speech."},

  {image:"003.jpg",promptEn:"What is this person buying?",promptKo:"이 사람은 뭐를 사요?",answer:"이 사람은 옷을 사요.",
   questionBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["뭐를","뭐 + 를","what + object particle"],["사요?","사다 → 사요","buy?"]],
   answerBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["옷을","옷 + 을","clothes + object particle"],["사요","사다 → 사요","buys"]],
   grammarNote:"사다 means ‘to buy.’ Because 옷 ends in a consonant, the object particle 을 is used."},

  {image:"004.jpg",promptEn:"What are these two people doing?",promptKo:"두 사람이 뭐 해요?",answer:"두 사람이 만나요.",
   questionBreakdown:[["두 사람이","두 사람 + 이","two people + subject particle"],["뭐","what","what"],["해요?","하다 → 해요","do / are doing?"]],
   answerBreakdown:[["두 사람이","두 사람 + 이","two people + subject particle"],["만나요","만나다 → 만나요","meet / are meeting"]],
   grammarNote:"이/가 marks the subject. 만나다 becomes 만나요 in the polite present tense."},

  {image:"005.jpg",promptEn:"What is this person waiting for?",promptKo:"이 사람은 뭐를 기다려요?",answer:"이 사람은 버스를 기다려요.",
   questionBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["뭐를","뭐 + 를","what + object particle"],["기다려요?","기다리다 → 기다려요","wait for?"]],
   answerBreakdown:[["이 사람은","이 사람 + 은","this person + topic particle"],["버스를","버스 + 를","bus + object particle"],["기다려요","기다리다 → 기다려요","waits for"]],
   grammarNote:"기다리다 takes the thing being waited for as an object with 을/를."},

  {image:"012.jpg",promptEn:"Is this expensive or cheap?",promptKo:"이거 비싸요, 싸요?",answer:"이거 비싸요.",
   questionBreakdown:[["이거","이것 → 이거","this thing; common spoken form"],["비싸요","비싸다 → 비싸요","is expensive"],["싸요?","싸다 → 싸요","is cheap?"]],
   answerBreakdown:[["이거","이것 → 이거","this thing"],["비싸요","비싸다 → 비싸요","is expensive"]],
   grammarNote:"Descriptive verbs such as 비싸다 can function as complete predicates without a copula."},

  {image:"013.jpg",promptEn:"Is this expensive or cheap?",promptKo:"이거 비싸요, 싸요?",answer:"이거 싸요.",
   questionBreakdown:[["이거","이것 → 이거","this thing; common spoken form"],["비싸요","비싸다 → 비싸요","is expensive"],["싸요?","싸다 → 싸요","is cheap?"]],
   answerBreakdown:[["이거","이것 → 이거","this thing"],["싸요","싸다 → 싸요","is cheap"]],
   grammarNote:"싸다 means ‘to be cheap/inexpensive.’ 싸요 is its polite present form."},

  {image:"017.jpg",promptEn:"What is the relationship between these two people?",promptKo:"두 사람은 어떤 사이예요?",answer:"두 사람은 친구예요.",
   questionBreakdown:[["두 사람은","두 사람 + 은","the two people + topic particle"],["어떤","what kind of","asks about type or relationship"],["사이예요?","사이 + 예요","what relationship are they?"]],
   answerBreakdown:[["두 사람은","두 사람 + 은","the two people + topic particle"],["친구예요","친구 + 예요","are friends"]],
   grammarNote:"예요 is the polite copula after a noun ending in a vowel. 친구예요 means ‘is/are friends.’"},

  {image:"018.jpg",promptEn:"What is this place?",promptKo:"여기는 어디예요?",answer:"여기는 집이에요.",
   questionBreakdown:[["여기는","여기 + 는","here / this place + topic particle"],["어디예요?","어디 + 예요","where is it? / what place is this?"]],
   answerBreakdown:[["여기는","여기 + 는","as for this place"],["집이에요","집 + 이에요","is a house / home"]],
   grammarNote:"이에요 is the polite copula after a noun ending in a consonant, as in 집이에요."},

  {image:"020.jpg",promptEn:"What is this?",promptKo:"이게 뭐예요?",answer:"이게 차예요.",
   questionBreakdown:[["이게","이것이 → 이게","this + subject particle; contracted form"],["뭐예요?","뭐 + 예요","what is it?"]],
   answerBreakdown:[["이게","이것이 → 이게","this + subject particle"],["차예요","차 + 예요","is a car"]],
   grammarNote:"이게 is the common contraction of 이것이. 차 ends in a vowel, so 예요 is used."}
];
