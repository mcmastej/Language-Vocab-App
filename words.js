const WORDS = [
  {
    "ko": "가요",
    "type": "verb",
    "meaning": "go",
    "form": "가다",
    "image": "000.jpg"
  },
  {
    "ko": "와요",
    "type": "verb",
    "meaning": "come",
    "form": "오다",
    "image": "001.jpg"
  },
  {
    "ko": "봐요",
    "type": "verb",
    "meaning": "see / watch / look",
    "form": "보다",
    "image": "002.jpg"
  },
  {
    "ko": "사요",
    "type": "verb",
    "meaning": "buy",
    "form": "사다",
    "image": "003.jpg"
  },
  {
    "ko": "만나요",
    "type": "verb",
    "meaning": "meet",
    "form": "만나다",
    "image": "004.jpg"
  },
  {
    "ko": "기다려요",
    "type": "verb",
    "meaning": "wait",
    "form": "기다리다",
    "image": "005.jpg"
  },
  {
    "ko": "좋아해요",
    "type": "verb",
    "meaning": "like",
    "form": "좋아하다",
    "image": "006.jpg"
  },
  {
    "ko": "필요해요",
    "type": "adjective",
    "meaning": "need / be necessary",
    "form": "필요하다",
    "image": "007.jpg"
  },
  {
    "ko": "알아요",
    "type": "verb",
    "meaning": "know",
    "form": "알다",
    "image": "008.jpg"
  },
  {
    "ko": "몰라요",
    "type": "verb",
    "meaning": "don't know",
    "form": "모르다",
    "image": "009.jpg"
  },
  {
    "ko": "있어요",
    "type": "adjective",
    "meaning": "have / there is",
    "form": "있다",
    "image": "010.jpg"
  },
  {
    "ko": "없어요",
    "type": "adjective",
    "meaning": "don't have / there isn't",
    "form": "없다",
    "image": "011.jpg"
  },
  {
    "ko": "비싸요",
    "type": "adjective",
    "meaning": "expensive",
    "form": "비싸다",
    "image": "012.jpg"
  },
  {
    "ko": "싸요",
    "type": "adjective",
    "meaning": "cheap / inexpensive",
    "form": "싸다",
    "image": "013.jpg"
  },
  {
    "ko": "가까워요",
    "type": "adjective",
    "meaning": "close / nearby",
    "form": "가깝다",
    "image": "014.jpg"
  },
  {
    "ko": "멀어요",
    "type": "adjective",
    "meaning": "far",
    "form": "멀다",
    "image": "015.jpg"
  },
  {
    "ko": "사람",
    "type": "noun",
    "meaning": "person / people",
    "form": "사람",
    "image": "016.jpg"
  },
  {
    "ko": "친구",
    "type": "noun",
    "meaning": "friend",
    "form": "친구",
    "image": "017.jpg"
  },
  {
    "ko": "집",
    "type": "noun",
    "meaning": "home / house",
    "form": "집",
    "image": "018.jpg"
  },
  {
    "ko": "시간",
    "type": "noun",
    "meaning": "time",
    "form": "시간",
    "image": "019.jpg"
  },
  {
    "ko": "차",
    "type": "noun",
    "meaning": "car",
    "form": "차",
    "image": "020.jpg"
  },
  {
    "ko": "가게",
    "type": "noun",
    "meaning": "store / shop",
    "form": "가게",
    "image": "021.jpg"
  },
  {
    "ko": "사진",
    "type": "noun",
    "meaning": "photo / picture",
    "form": "사진",
    "image": "022.jpg"
  },
  {
    "ko": "이번 주",
    "type": "noun",
    "meaning": "this week",
    "form": "이번 주",
    "image": "023.jpg"
  },
  {
    "ko": "다음 주",
    "type": "noun",
    "meaning": "next week",
    "form": "다음 주",
    "image": "024.jpg"
  },
  {
    "ko": "먹어요",
    "type": "verb",
    "meaning": "eat",
    "form": "먹다",
    "image": "025.jpg"
  },
  {
    "ko": "마셔요",
    "type": "verb",
    "meaning": "drink",
    "form": "마시다",
    "image": "026.jpg"
  },
  {
    "ko": "해요",
    "type": "verb",
    "meaning": "do",
    "form": "하다",
    "image": "027.jpg"
  },
  {
    "ko": "들어요",
    "type": "verb",
    "meaning": "hear / listen",
    "form": "듣다",
    "image": "028.jpg"
  },
  {
    "ko": "말해요",
    "type": "verb",
    "meaning": "say / speak / tell",
    "form": "말하다",
    "image": "029.jpg"
  },
  {
    "ko": "물어봐요",
    "type": "verb",
    "meaning": "ask",
    "form": "물어보다",
    "image": "030.jpg"
  },
  {
    "ko": "줘요",
    "type": "verb",
    "meaning": "give",
    "form": "주다",
    "image": "031.jpg"
  },
  {
    "ko": "받아요",
    "type": "verb",
    "meaning": "receive / get",
    "form": "받다",
    "image": "032.jpg"
  },
  {
    "ko": "찍어요",
    "type": "verb",
    "meaning": "take (a photo)",
    "form": "찍다",
    "image": "033.jpg"
  },
  {
    "ko": "걸어요",
    "type": "verb",
    "meaning": "walk",
    "form": "걷다",
    "image": "034.jpg"
  },
  {
    "ko": "타요",
    "type": "verb",
    "meaning": "ride / take transportation",
    "form": "타다",
    "image": "035.jpg"
  },
  {
    "ko": "살아요",
    "type": "verb",
    "meaning": "live",
    "form": "살다",
    "image": "036.jpg"
  },
  {
    "ko": "놀아요",
    "type": "verb",
    "meaning": "hang out / play",
    "form": "놀다",
    "image": "037.jpg"
  },
  {
    "ko": "바꿔요",
    "type": "verb",
    "meaning": "change / switch",
    "form": "바꾸다",
    "image": "038.jpg"
  },
  {
    "ko": "찾아요",
    "type": "verb",
    "meaning": "look for / find",
    "form": "찾다",
    "image": "039.jpg"
  },
  {
    "ko": "많아요",
    "type": "adjective",
    "meaning": "many / a lot",
    "form": "많다",
    "image": "040.jpg"
  },
  {
    "ko": "적어요",
    "type": "adjective",
    "meaning": "few / not many",
    "form": "적다",
    "image": "041.jpg"
  },
  {
    "ko": "커요",
    "type": "adjective",
    "meaning": "big",
    "form": "크다",
    "image": "042.jpg"
  },
  {
    "ko": "작아요",
    "type": "adjective",
    "meaning": "small",
    "form": "작다",
    "image": "043.jpg"
  },
  {
    "ko": "새로워요",
    "type": "adjective",
    "meaning": "new",
    "form": "새롭다",
    "image": "044.jpg"
  },
  {
    "ko": "오늘",
    "type": "adverb",
    "meaning": "today",
    "form": "오늘",
    "image": "045.jpg"
  },
  {
    "ko": "내일",
    "type": "adverb",
    "meaning": "tomorrow",
    "form": "내일",
    "image": "046.jpg"
  },
  {
    "ko": "어제",
    "type": "adverb",
    "meaning": "yesterday",
    "form": "어제",
    "image": "047.jpg"
  },
  {
    "ko": "지금",
    "type": "adverb",
    "meaning": "now / right now",
    "form": "지금",
    "image": "048.jpg"
  },
  {
    "ko": "나중에",
    "type": "adverb",
    "meaning": "later",
    "form": "나중에",
    "image": "049.jpg"
  },
  {
    "ko": "어때요",
    "type": "adjective",
    "meaning": "how is it? / how about…?",
    "form": "어떻다",
    "image": "050.jpg"
  },
  {
    "ko": "잘",
    "type": "adverb",
    "meaning": "well",
    "form": "잘",
    "image": "051.jpg"
  },
  {
    "ko": "정말",
    "type": "adverb",
    "meaning": "really",
    "form": "정말",
    "image": "052.jpg"
  },
  {
    "ko": "조금",
    "type": "adverb",
    "meaning": "a little",
    "form": "조금",
    "image": "053.jpg"
  },
  {
    "ko": "많이",
    "type": "adverb",
    "meaning": "a lot / very",
    "form": "많이",
    "image": "054.jpg"
  },
  {
    "ko": "같이",
    "type": "adverb",
    "meaning": "together / with",
    "form": "같이",
    "image": "055.jpg"
  },
  {
    "ko": "다시",
    "type": "adverb",
    "meaning": "again",
    "form": "다시",
    "image": "056.jpg"
  },
  {
    "ko": "아직",
    "type": "adverb",
    "meaning": "still / yet",
    "form": "아직",
    "image": "057.jpg"
  },
  {
    "ko": "벌써",
    "type": "adverb",
    "meaning": "already",
    "form": "벌써",
    "image": "058.jpg"
  },
  {
    "ko": "보통",
    "type": "adverb",
    "meaning": "usually / normally",
    "form": "보통",
    "image": "059.jpg"
  },
  {
    "ko": "자주",
    "type": "adverb",
    "meaning": "often",
    "form": "자주",
    "image": "060.jpg"
  },
  {
    "ko": "항상",
    "type": "adverb",
    "meaning": "always",
    "form": "항상",
    "image": "061.jpg"
  },
  {
    "ko": "갑자기",
    "type": "adverb",
    "meaning": "suddenly",
    "form": "갑자기",
    "image": "062.jpg"
  },
  {
    "ko": "이야기해요",
    "type": "verb",
    "meaning": "talk / tell a story",
    "form": "이야기하다",
    "image": "063.jpg"
  },
  {
    "ko": "생각해요",
    "type": "verb",
    "meaning": "think",
    "form": "생각하다",
    "image": "064.jpg"
  },
  {
    "ko": "일찍",
    "type": "adverb",
    "meaning": "early",
    "form": "일찍",
    "image": "065.jpg"
  },
  {
    "ko": "자요",
    "type": "verb",
    "meaning": "sleep / go to bed",
    "form": "자다",
    "image": "066.jpg"
  },
  {
    "ko": "일어나요",
    "type": "verb",
    "meaning": "get up / wake up",
    "form": "일어나다",
    "image": "067.jpg"
  },
  {
    "ko": "준비해요",
    "type": "verb",
    "meaning": "prepare / get ready",
    "form": "준비하다",
    "image": "068.jpg"
  },
  {
    "ko": "도착해요",
    "type": "verb",
    "meaning": "arrive",
    "form": "도착하다",
    "image": "069.jpg"
  },
  {
    "ko": "늦게",
    "type": "adverb",
    "meaning": "late",
    "form": "늦게",
    "image": "070.jpg"
  },
  {
    "ko": "언제",
    "type": "adverb",
    "meaning": "when",
    "form": "언제",
    "image": "071.jpg"
  },
  {
    "ko": "어디",
    "type": "pronoun",
    "meaning": "where",
    "form": "어디",
    "image": "072.jpg"
  },
  {
    "ko": "왜",
    "type": "adverb",
    "meaning": "why",
    "form": "왜",
    "image": "073.jpg"
  },
  {
    "ko": "주말",
    "type": "noun",
    "meaning": "weekend",
    "form": "주말",
    "image": "074.jpg"
  },
  {
    "ko": "뭐",
    "type": "pronoun",
    "meaning": "what",
    "form": "뭐",
    "image": "075.jpg"
  },
  {
    "ko": "누구",
    "type": "pronoun",
    "meaning": "who",
    "form": "누구",
    "image": "076.jpg"
  },
  {
    "ko": "어떻게",
    "type": "adverb",
    "meaning": "how",
    "form": "어떻게",
    "image": "077.jpg"
  },
  {
    "ko": "몇",
    "type": "determiner",
    "meaning": "how many / what (number)",
    "form": "몇",
    "image": "078.jpg"
  },
  {
    "ko": "때",
    "type": "noun",
    "meaning": "time / when",
    "form": "때",
    "image": "079.jpg"
  },
  {
    "ko": "아침",
    "type": "noun",
    "meaning": "morning / breakfast",
    "form": "아침",
    "image": "080.jpg"
  },
  {
    "ko": "점심",
    "type": "noun",
    "meaning": "lunch",
    "form": "점심",
    "image": "081.jpg"
  },
  {
    "ko": "저녁",
    "type": "noun",
    "meaning": "evening / dinner",
    "form": "저녁",
    "image": "082.jpg"
  },
  {
    "ko": "아까",
    "type": "adverb",
    "meaning": "earlier / a little while ago",
    "form": "아까",
    "image": "083.jpg"
  },
  {
    "ko": "요일",
    "type": "noun",
    "meaning": "day of the week",
    "form": "요일",
    "image": "084.jpg"
  },
  {
    "ko": "약속",
    "type": "noun",
    "meaning": "plans / appointment / promise",
    "form": "약속",
    "image": "085.jpg"
  },
  {
    "ko": "전화",
    "type": "noun",
    "meaning": "phone call / telephone",
    "form": "전화",
    "image": "086.jpg"
  },
  {
    "ko": "문자",
    "type": "noun",
    "meaning": "text message",
    "form": "문자",
    "image": "087.jpg"
  },
  {
    "ko": "보내요",
    "type": "verb",
    "meaning": "send",
    "form": "보내다",
    "image": "088.jpg"
  },
  {
    "ko": "연락해요",
    "type": "verb",
    "meaning": "contact / get in touch",
    "form": "연락하다",
    "image": "089.jpg"
  },
  {
    "ko": "들어가요",
    "type": "verb",
    "meaning": "go in / enter",
    "form": "들어가다",
    "image": "090.jpg"
  },
  {
    "ko": "나와요",
    "type": "verb",
    "meaning": "come out / leave",
    "form": "나오다",
    "image": "091.jpg"
  },
  {
    "ko": "가져와요",
    "type": "verb",
    "meaning": "bring",
    "form": "가져오다",
    "image": "092.jpg"
  },
  {
    "ko": "가져가요",
    "type": "verb",
    "meaning": "take / bring along",
    "form": "가져가다",
    "image": "093.jpg"
  },
  {
    "ko": "써요",
    "type": "verb",
    "meaning": "use / write",
    "form": "쓰다",
    "image": "094.jpg"
  },
  {
    "ko": "입어요",
    "type": "verb",
    "meaning": "wear / put on",
    "form": "입다",
    "image": "095.jpg"
  },
  {
    "ko": "좋아요",
    "type": "adjective",
    "meaning": "good / nice / like it",
    "form": "좋다",
    "image": "096.jpg"
  },
  {
    "ko": "추워요",
    "type": "adjective",
    "meaning": "cold",
    "form": "춥다",
    "image": "097.jpg"
  },
  {
    "ko": "더워요",
    "type": "adjective",
    "meaning": "hot",
    "form": "덥다",
    "image": "098.jpg"
  },
  {
    "ko": "날씨",
    "type": "noun",
    "meaning": "weather",
    "form": "날씨",
    "image": "099.jpg"
  },
  {
    "ko": "잠",
    "type": "noun",
    "meaning": "sleep",
    "form": "잠",
    "image": "100.jpg"
  },
  {
    "ko": "식사",
    "type": "noun",
    "meaning": "meal",
    "form": "식사",
    "image": "101.jpg"
  },
  {
    "ko": "운동",
    "type": "noun",
    "meaning": "exercise",
    "form": "운동",
    "image": "102.jpg"
  },
  {
    "ko": "산책",
    "type": "noun",
    "meaning": "walk / stroll",
    "form": "산책",
    "image": "103.jpg"
  },
  {
    "ko": "시각",
    "type": "noun",
    "meaning": "time / hour",
    "form": "시각",
    "image": "104.jpg"
  },
  {
    "ko": "대화",
    "type": "noun",
    "meaning": "conversation",
    "form": "대화",
    "image": "105.jpg"
  },
  {
    "ko": "우산",
    "type": "noun",
    "meaning": "umbrella",
    "form": "우산",
    "image": "106.jpg"
  },
  {
    "ko": "반려견",
    "type": "noun",
    "meaning": "pet dog",
    "form": "반려견",
    "image": "107.jpg"
  },
  {
    "ko": "대중교통",
    "type": "noun",
    "meaning": "public transportation",
    "form": "대중교통",
    "image": "108.jpg"
  },
  {
    "ko": "쌀",
    "type": "noun",
    "meaning": "uncooked rice",
    "form": "쌀",
    "image": "109.jpg"
  },
  {
    "ko": "음료",
    "type": "noun",
    "meaning": "beverage",
    "form": "음료",
    "image": "110.jpg"
  },
  {
    "ko": "경치",
    "type": "noun",
    "meaning": "scenery",
    "form": "경치",
    "image": "111.jpg"
  },
  {
    "ko": "손잡이",
    "type": "noun",
    "meaning": "handle",
    "form": "손잡이",
    "image": "112.jpg"
  },
  {
    "ko": "침실",
    "type": "noun",
    "meaning": "bedroom",
    "form": "침실",
    "image": "113.jpg"
  },
  {
    "ko": "장보기",
    "type": "noun",
    "meaning": "grocery shopping",
    "form": "장보기",
    "image": "114.jpg"
  },
  {
    "ko": "추위",
    "type": "noun",
    "meaning": "cold weather / coldness",
    "form": "추위",
    "image": "115.jpg"
  },
  {
    "ko": "더위",
    "type": "noun",
    "meaning": "heat / hot weather",
    "form": "더위",
    "image": "116.jpg"
  },
  {
    "ko": "숙제",
    "type": "noun",
    "meaning": "homework",
    "form": "숙제",
    "image": "117.jpg"
  },
  {
    "ko": "소나기",
    "type": "noun",
    "meaning": "rain shower",
    "form": "소나기",
    "image": "118.jpg"
  },
  {
    "ko": "선물",
    "type": "noun",
    "meaning": "gift",
    "form": "선물",
    "image": "119.jpg"
  },
  {
    "ko": "화장실",
    "type": "noun",
    "meaning": "restroom",
    "form": "화장실",
    "image": "120.jpg"
  },
  {
    "ko": "해변",
    "type": "noun",
    "meaning": "beach",
    "form": "해변",
    "image": "121.jpg"
  },
  {
    "ko": "여행",
    "type": "noun",
    "meaning": "travel / trip",
    "form": "여행",
    "image": "122.jpg"
  },
  {
    "ko": "찌개",
    "type": "noun",
    "meaning": "stew",
    "form": "찌개",
    "image": "123.jpg"
  },
  {
    "ko": "도시",
    "type": "noun",
    "meaning": "city",
    "form": "도시",
    "image": "124.jpg"
  }
];
