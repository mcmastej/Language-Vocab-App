const WORDS = [
  {
    "ko": "가요",
    "type": "verb",
    "meaning": "go",
    "form": "가다",
    "image": "V000.jpg"
  },
  {
    "ko": "와요",
    "type": "verb",
    "meaning": "come",
    "form": "오다",
    "image": "V001.jpg"
  },
  {
    "ko": "봐요",
    "type": "verb",
    "meaning": "see / watch / look",
    "form": "보다",
    "image": "V002.jpg"
  },
  {
    "ko": "사요",
    "type": "verb",
    "meaning": "buy",
    "form": "사다",
    "image": "V003.jpg"
  },
  {
    "ko": "만나요",
    "type": "verb",
    "meaning": "meet",
    "form": "만나다",
    "image": "V004.jpg"
  },
  {
    "ko": "기다려요",
    "type": "verb",
    "meaning": "wait",
    "form": "기다리다",
    "image": "V005.jpg"
  },
  {
    "ko": "좋아해요",
    "type": "verb",
    "meaning": "like",
    "form": "좋아하다",
    "image": "V006.jpg"
  },
  {
    "ko": "필요해요",
    "type": "adjective",
    "meaning": "need / be necessary",
    "form": "필요하다",
    "image": "V007.jpg"
  },
  {
    "ko": "알아요",
    "type": "verb",
    "meaning": "know",
    "form": "알다",
    "image": "V008.jpg"
  },
  {
    "ko": "몰라요",
    "type": "verb",
    "meaning": "don't know",
    "form": "모르다",
    "image": "V009.jpg"
  },
  {
    "ko": "있어요",
    "type": "adjective",
    "meaning": "have / there is",
    "form": "있다",
    "image": "V010.jpg"
  },
  {
    "ko": "없어요",
    "type": "adjective",
    "meaning": "don't have / there isn't",
    "form": "없다",
    "image": "V011.jpg"
  },
  {
    "ko": "비싸요",
    "type": "adjective",
    "meaning": "expensive",
    "form": "비싸다",
    "image": "V012.jpg"
  },
  {
    "ko": "싸요",
    "type": "adjective",
    "meaning": "cheap / inexpensive",
    "form": "싸다",
    "image": "V013.jpg"
  },
  {
    "ko": "가까워요",
    "type": "adjective",
    "meaning": "close / nearby",
    "form": "가깝다",
    "image": "V014.jpg"
  },
  {
    "ko": "멀어요",
    "type": "adjective",
    "meaning": "far",
    "form": "멀다",
    "image": "V015.jpg"
  },
  {
    "ko": "사람",
    "type": "noun",
    "meaning": "person / people",
    "form": "사람",
    "image": "V016.jpg"
  },
  {
    "ko": "친구",
    "type": "noun",
    "meaning": "friend",
    "form": "친구",
    "image": "V017.jpg"
  },
  {
    "ko": "집",
    "type": "noun",
    "meaning": "home / house",
    "form": "집",
    "image": "V018.jpg"
  },
  {
    "ko": "시간",
    "type": "noun",
    "meaning": "time",
    "form": "시간",
    "image": "V019.jpg"
  },
  {
    "ko": "차",
    "type": "noun",
    "meaning": "car",
    "form": "차",
    "image": "V020.jpg"
  },
  {
    "ko": "가게",
    "type": "noun",
    "meaning": "store / shop",
    "form": "가게",
    "image": "V021.jpg"
  },
  {
    "ko": "사진",
    "type": "noun",
    "meaning": "photo / picture",
    "form": "사진",
    "image": "V022.jpg"
  },
  {
    "ko": "이번 주",
    "type": "noun",
    "meaning": "this week",
    "form": "이번 주",
    "image": "V023.jpg"
  },
  {
    "ko": "다음 주",
    "type": "noun",
    "meaning": "next week",
    "form": "다음 주",
    "image": "V024.jpg"
  },
  {
    "ko": "먹어요",
    "type": "verb",
    "meaning": "eat",
    "form": "먹다",
    "image": "V025.jpg"
  },
  {
    "ko": "마셔요",
    "type": "verb",
    "meaning": "drink",
    "form": "마시다",
    "image": "V026.jpg"
  },
  {
    "ko": "해요",
    "type": "verb",
    "meaning": "do",
    "form": "하다",
    "image": "V027.jpg"
  },
  {
    "ko": "들어요",
    "type": "verb",
    "meaning": "hear / listen",
    "form": "듣다",
    "image": "V028.jpg"
  },
  {
    "ko": "말해요",
    "type": "verb",
    "meaning": "say / speak / tell",
    "form": "말하다",
    "image": "V029.jpg"
  },
  {
    "ko": "물어봐요",
    "type": "verb",
    "meaning": "ask",
    "form": "물어보다",
    "image": "V030.jpg"
  },
  {
    "ko": "줘요",
    "type": "verb",
    "meaning": "give",
    "form": "주다",
    "image": "V031.jpg"
  },
  {
    "ko": "받아요",
    "type": "verb",
    "meaning": "receive / get",
    "form": "받다",
    "image": "V032.jpg"
  },
  {
    "ko": "찍어요",
    "type": "verb",
    "meaning": "take (a photo)",
    "form": "찍다",
    "image": "V033.jpg"
  },
  {
    "ko": "걸어요",
    "type": "verb",
    "meaning": "walk",
    "form": "걷다",
    "image": "V034.jpg"
  },
  {
    "ko": "타요",
    "type": "verb",
    "meaning": "ride / take transportation",
    "form": "타다",
    "image": "V035.jpg"
  },
  {
    "ko": "살아요",
    "type": "verb",
    "meaning": "live",
    "form": "살다",
    "image": "V036.jpg"
  },
  {
    "ko": "놀아요",
    "type": "verb",
    "meaning": "hang out / play",
    "form": "놀다",
    "image": "V037.jpg"
  },
  {
    "ko": "바꿔요",
    "type": "verb",
    "meaning": "change / switch",
    "form": "바꾸다",
    "image": "V038.jpg"
  },
  {
    "ko": "찾아요",
    "type": "verb",
    "meaning": "look for / find",
    "form": "찾다",
    "image": "V039.jpg"
  },
  {
    "ko": "많아요",
    "type": "adjective",
    "meaning": "many / a lot",
    "form": "많다",
    "image": "V040.jpg"
  },
  {
    "ko": "적어요",
    "type": "adjective",
    "meaning": "few / not many",
    "form": "적다",
    "image": "V041.jpg"
  },
  {
    "ko": "커요",
    "type": "adjective",
    "meaning": "big",
    "form": "크다",
    "image": "V042.jpg"
  },
  {
    "ko": "작아요",
    "type": "adjective",
    "meaning": "small",
    "form": "작다",
    "image": "V043.jpg"
  },
  {
    "ko": "새로워요",
    "type": "adjective",
    "meaning": "new",
    "form": "새롭다",
    "image": "V044.jpg"
  },
  {
    "ko": "오늘",
    "type": "adverb",
    "meaning": "today",
    "form": "오늘",
    "image": "V045.jpg"
  },
  {
    "ko": "내일",
    "type": "adverb",
    "meaning": "tomorrow",
    "form": "내일",
    "image": "V046.jpg"
  },
  {
    "ko": "어제",
    "type": "adverb",
    "meaning": "yesterday",
    "form": "어제",
    "image": "V047.jpg"
  },
  {
    "ko": "지금",
    "type": "adverb",
    "meaning": "now / right now",
    "form": "지금",
    "image": "V048.jpg"
  },
  {
    "ko": "나중에",
    "type": "adverb",
    "meaning": "later",
    "form": "나중에",
    "image": "V049.jpg"
  },
  {
    "ko": "어때요",
    "type": "adjective",
    "meaning": "how is it? / how about…?",
    "form": "어떻다",
    "image": "V050.jpg"
  },
  {
    "ko": "잘",
    "type": "adverb",
    "meaning": "well",
    "form": "잘",
    "image": "V051.jpg"
  },
  {
    "ko": "정말",
    "type": "adverb",
    "meaning": "really",
    "form": "정말",
    "image": "V052.jpg"
  },
  {
    "ko": "조금",
    "type": "adverb",
    "meaning": "a little",
    "form": "조금",
    "image": "V053.jpg"
  },
  {
    "ko": "많이",
    "type": "adverb",
    "meaning": "a lot / very",
    "form": "많이",
    "image": "V054.jpg"
  },
  {
    "ko": "같이",
    "type": "adverb",
    "meaning": "together / with",
    "form": "같이",
    "image": "V055.jpg"
  },
  {
    "ko": "다시",
    "type": "adverb",
    "meaning": "again",
    "form": "다시",
    "image": "V056.jpg"
  },
  {
    "ko": "아직",
    "type": "adverb",
    "meaning": "still / yet",
    "form": "아직",
    "image": "V057.jpg"
  },
  {
    "ko": "벌써",
    "type": "adverb",
    "meaning": "already",
    "form": "벌써",
    "image": "V058.jpg"
  },
  {
    "ko": "보통",
    "type": "adverb",
    "meaning": "usually / normally",
    "form": "보통",
    "image": "V059.jpg"
  },
  {
    "ko": "자주",
    "type": "adverb",
    "meaning": "often",
    "form": "자주",
    "image": "V060.jpg"
  },
  {
    "ko": "항상",
    "type": "adverb",
    "meaning": "always",
    "form": "항상",
    "image": "V061.jpg"
  },
  {
    "ko": "갑자기",
    "type": "adverb",
    "meaning": "suddenly",
    "form": "갑자기",
    "image": "V062.jpg"
  },
  {
    "ko": "이야기해요",
    "type": "verb",
    "meaning": "talk / tell a story",
    "form": "이야기하다",
    "image": "V063.jpg"
  },
  {
    "ko": "생각해요",
    "type": "verb",
    "meaning": "think",
    "form": "생각하다",
    "image": "V064.jpg"
  },
  {
    "ko": "일찍",
    "type": "adverb",
    "meaning": "early",
    "form": "일찍",
    "image": "V065.jpg"
  },
  {
    "ko": "자요",
    "type": "verb",
    "meaning": "sleep / go to bed",
    "form": "자다",
    "image": "V066.jpg"
  },
  {
    "ko": "일어나요",
    "type": "verb",
    "meaning": "get up / wake up",
    "form": "일어나다",
    "image": "V067.jpg"
  },
  {
    "ko": "준비해요",
    "type": "verb",
    "meaning": "prepare / get ready",
    "form": "준비하다",
    "image": "V068.jpg"
  },
  {
    "ko": "도착해요",
    "type": "verb",
    "meaning": "arrive",
    "form": "도착하다",
    "image": "V069.jpg"
  },
  {
    "ko": "늦게",
    "type": "adverb",
    "meaning": "late",
    "form": "늦게",
    "image": "V070.jpg"
  },
  {
    "ko": "언제",
    "type": "adverb",
    "meaning": "when",
    "form": "언제",
    "image": "V071.jpg"
  },
  {
    "ko": "어디",
    "type": "pronoun",
    "meaning": "where",
    "form": "어디",
    "image": "V072.jpg"
  },
  {
    "ko": "왜",
    "type": "adverb",
    "meaning": "why",
    "form": "왜",
    "image": "V073.jpg"
  },
  {
    "ko": "주말",
    "type": "noun",
    "meaning": "weekend",
    "form": "주말",
    "image": "V074.jpg"
  },
  {
    "ko": "뭐",
    "type": "pronoun",
    "meaning": "what",
    "form": "뭐",
    "image": "V075.jpg"
  },
  {
    "ko": "누구",
    "type": "pronoun",
    "meaning": "who",
    "form": "누구",
    "image": "V076.jpg"
  },
  {
    "ko": "어떻게",
    "type": "adverb",
    "meaning": "how",
    "form": "어떻게",
    "image": "V077.jpg"
  },
  {
    "ko": "몇",
    "type": "determiner",
    "meaning": "how many / what (number)",
    "form": "몇",
    "image": "V078.jpg"
  },
  {
    "ko": "때",
    "type": "noun",
    "meaning": "time / when",
    "form": "때",
    "image": "V079.jpg"
  },
  {
    "ko": "아침",
    "type": "noun",
    "meaning": "morning / breakfast",
    "form": "아침",
    "image": "V080.jpg"
  },
  {
    "ko": "점심",
    "type": "noun",
    "meaning": "lunch",
    "form": "점심",
    "image": "V081.jpg"
  },
  {
    "ko": "저녁",
    "type": "noun",
    "meaning": "evening / dinner",
    "form": "저녁",
    "image": "V082.jpg"
  },
  {
    "ko": "아까",
    "type": "adverb",
    "meaning": "earlier / a little while ago",
    "form": "아까",
    "image": "V083.jpg"
  },
  {
    "ko": "요일",
    "type": "noun",
    "meaning": "day of the week",
    "form": "요일",
    "image": "V084.jpg"
  },
  {
    "ko": "약속",
    "type": "noun",
    "meaning": "plans / appointment / promise",
    "form": "약속",
    "image": "V085.jpg"
  },
  {
    "ko": "전화",
    "type": "noun",
    "meaning": "phone call / telephone",
    "form": "전화",
    "image": "V086.jpg"
  },
  {
    "ko": "문자",
    "type": "noun",
    "meaning": "text message",
    "form": "문자",
    "image": "V087.jpg"
  },
  {
    "ko": "보내요",
    "type": "verb",
    "meaning": "send",
    "form": "보내다",
    "image": "V088.jpg"
  },
  {
    "ko": "연락해요",
    "type": "verb",
    "meaning": "contact / get in touch",
    "form": "연락하다",
    "image": "V089.jpg"
  },
  {
    "ko": "들어가요",
    "type": "verb",
    "meaning": "go in / enter",
    "form": "들어가다",
    "image": "V090.jpg"
  },
  {
    "ko": "나와요",
    "type": "verb",
    "meaning": "come out / leave",
    "form": "나오다",
    "image": "V091.jpg"
  },
  {
    "ko": "가져와요",
    "type": "verb",
    "meaning": "bring",
    "form": "가져오다",
    "image": "V092.jpg"
  },
  {
    "ko": "가져가요",
    "type": "verb",
    "meaning": "take / bring along",
    "form": "가져가다",
    "image": "V093.jpg"
  },
  {
    "ko": "써요",
    "type": "verb",
    "meaning": "use / write",
    "form": "쓰다",
    "image": "V094.jpg"
  },
  {
    "ko": "입어요",
    "type": "verb",
    "meaning": "wear / put on",
    "form": "입다",
    "image": "V095.jpg"
  },
  {
    "ko": "좋아요",
    "type": "adjective",
    "meaning": "good / nice / like it",
    "form": "좋다",
    "image": "V096.jpg"
  },
  {
    "ko": "추워요",
    "type": "adjective",
    "meaning": "cold",
    "form": "춥다",
    "image": "V097.jpg"
  },
  {
    "ko": "더워요",
    "type": "adjective",
    "meaning": "hot",
    "form": "덥다",
    "image": "V098.jpg"
  },
  {
    "ko": "날씨",
    "type": "noun",
    "meaning": "weather",
    "form": "날씨",
    "image": "V099.jpg"
  },
  {
    "ko": "잠",
    "type": "noun",
    "meaning": "sleep",
    "form": "잠",
    "image": "V100.jpg"
  },
  {
    "ko": "식사",
    "type": "noun",
    "meaning": "meal",
    "form": "식사",
    "image": "V101.jpg"
  },
  {
    "ko": "운동",
    "type": "noun",
    "meaning": "exercise",
    "form": "운동",
    "image": "V102.jpg"
  },
  {
    "ko": "산책",
    "type": "noun",
    "meaning": "walk / stroll",
    "form": "산책",
    "image": "V103.jpg"
  },
  {
    "ko": "시각",
    "type": "noun",
    "meaning": "time / hour",
    "form": "시각",
    "image": "V104.jpg"
  },
  {
    "ko": "대화",
    "type": "noun",
    "meaning": "conversation",
    "form": "대화",
    "image": "V105.jpg"
  },
  {
    "ko": "우산",
    "type": "noun",
    "meaning": "umbrella",
    "form": "우산",
    "image": "V106.jpg"
  },
  {
    "ko": "반려견",
    "type": "noun",
    "meaning": "pet dog",
    "form": "반려견",
    "image": "V107.jpg"
  },
  {
    "ko": "대중교통",
    "type": "noun",
    "meaning": "public transportation",
    "form": "대중교통",
    "image": "V108.jpg"
  },
  {
    "ko": "쌀",
    "type": "noun",
    "meaning": "uncooked rice",
    "form": "쌀",
    "image": "V109.jpg"
  },
  {
    "ko": "음료",
    "type": "noun",
    "meaning": "beverage",
    "form": "음료",
    "image": "V110.jpg"
  },
  {
    "ko": "경치",
    "type": "noun",
    "meaning": "scenery",
    "form": "경치",
    "image": "V111.jpg"
  },
  {
    "ko": "손잡이",
    "type": "noun",
    "meaning": "handle",
    "form": "손잡이",
    "image": "V112.jpg"
  },
  {
    "ko": "침실",
    "type": "noun",
    "meaning": "bedroom",
    "form": "침실",
    "image": "V113.jpg"
  },
  {
    "ko": "장보기",
    "type": "noun",
    "meaning": "grocery shopping",
    "form": "장보기",
    "image": "V114.jpg"
  },
  {
    "ko": "추위",
    "type": "noun",
    "meaning": "cold weather / coldness",
    "form": "추위",
    "image": "V115.jpg"
  },
  {
    "ko": "더위",
    "type": "noun",
    "meaning": "heat / hot weather",
    "form": "더위",
    "image": "V116.jpg"
  },
  {
    "ko": "숙제",
    "type": "noun",
    "meaning": "homework",
    "form": "숙제",
    "image": "V117.jpg"
  },
  {
    "ko": "소나기",
    "type": "noun",
    "meaning": "rain shower",
    "form": "소나기",
    "image": "V118.jpg"
  },
  {
    "ko": "선물",
    "type": "noun",
    "meaning": "gift",
    "form": "선물",
    "image": "V119.jpg"
  },
  {
    "ko": "화장실",
    "type": "noun",
    "meaning": "restroom",
    "form": "화장실",
    "image": "V120.jpg"
  },
  {
    "ko": "해변",
    "type": "noun",
    "meaning": "beach",
    "form": "해변",
    "image": "V121.jpg"
  },
  {
    "ko": "여행",
    "type": "noun",
    "meaning": "travel / trip",
    "form": "여행",
    "image": "V122.jpg"
  },
  {
    "ko": "찌개",
    "type": "noun",
    "meaning": "stew",
    "form": "찌개",
    "image": "V123.jpg"
  },
  {
    "ko": "도시",
    "type": "noun",
    "meaning": "city",
    "form": "도시",
    "image": "V124.jpg"
  }
];
