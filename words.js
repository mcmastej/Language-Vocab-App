const WORDS = [
  {
    "ko": "근황",
    "type": "noun",
    "meaning": "recent news / how things have been",
    "form": "근황",
    "image": "000.jpg"
  },
  {
    "ko": "요즘",
    "type": "adverb",
    "meaning": "these days / lately",
    "form": "요즘",
    "image": "001.jpg"
  },
  {
    "ko": "기분",
    "type": "noun",
    "meaning": "feeling / mood",
    "form": "기분",
    "image": "002.jpg"
  },
  {
    "ko": "하루",
    "type": "noun",
    "meaning": "day / one day",
    "form": "하루",
    "image": "003.jpg"
  },
  {
    "ko": "일",
    "type": "noun",
    "meaning": "work",
    "form": "일",
    "image": "004.jpg"
  },
  {
    "ko": "생활",
    "type": "noun",
    "meaning": "daily life / living",
    "form": "생활",
    "image": "005.jpg"
  },
  {
    "ko": "건강",
    "type": "noun",
    "meaning": "health",
    "form": "건강",
    "image": "006.jpg"
  },
  {
    "ko": "상태",
    "type": "noun",
    "meaning": "condition / state",
    "form": "상태",
    "image": "007.jpg"
  },
  {
    "ko": "스트레스",
    "type": "noun",
    "meaning": "stress",
    "form": "스트레스",
    "image": "008.jpg"
  },
  {
    "ko": "걱정",
    "type": "noun",
    "meaning": "worry / concern",
    "form": "걱정",
    "image": "009.jpg"
  },
  {
    "ko": "지내요",
    "type": "verb",
    "meaning": "get along / spend time / be doing",
    "form": "지내다",
    "image": "010.jpg"
  },
  {
    "ko": "해요",
    "type": "verb",
    "meaning": "do",
    "form": "하다",
    "image": "011.jpg"
  },
  {
    "ko": "쉬어요",
    "type": "verb",
    "meaning": "rest",
    "form": "쉬다",
    "image": "012.jpg"
  },
  {
    "ko": "자요",
    "type": "verb",
    "meaning": "sleep",
    "form": "자다",
    "image": "013.jpg"
  },
  {
    "ko": "먹어요",
    "type": "verb",
    "meaning": "eat",
    "form": "먹다",
    "image": "014.jpg"
  },
  {
    "ko": "바빠요",
    "type": "adjective",
    "meaning": "busy",
    "form": "바쁘다",
    "image": "015.jpg"
  },
  {
    "ko": "괜찮아요",
    "type": "adjective",
    "meaning": "okay / all right",
    "form": "괜찮다",
    "image": "016.jpg"
  },
  {
    "ko": "좋아요",
    "type": "adjective",
    "meaning": "good / like",
    "form": "좋다",
    "image": "017.jpg"
  },
  {
    "ko": "힘들어요",
    "type": "adjective",
    "meaning": "difficult / having a hard time",
    "form": "힘들다",
    "image": "018.jpg"
  },
  {
    "ko": "피곤해요",
    "type": "adjective",
    "meaning": "tired",
    "form": "피곤하다",
    "image": "019.jpg"
  },
  {
    "ko": "아파요",
    "type": "adjective",
    "meaning": "sick / hurt",
    "form": "아프다",
    "image": "020.jpg"
  },
  {
    "ko": "행복해요",
    "type": "adjective",
    "meaning": "happy",
    "form": "행복하다",
    "image": "021.jpg"
  },
  {
    "ko": "재미있어요",
    "type": "adjective",
    "meaning": "fun / interesting",
    "form": "재미있다",
    "image": "022.jpg"
  },
  {
    "ko": "편해요",
    "type": "adjective",
    "meaning": "comfortable / at ease",
    "form": "편하다",
    "image": "023.jpg"
  },
  {
    "ko": "정신없어요",
    "type": "adjective",
    "meaning": "hectic / overwhelmed",
    "form": "정신없다",
    "image": "024.jpg"
  },
  {
    "ko": "직장",
    "type": "noun",
    "meaning": "workplace",
    "form": "직장",
    "image": "025.jpg"
  },
  {
    "ko": "회사",
    "type": "noun",
    "meaning": "company",
    "form": "회사",
    "image": "026.jpg"
  },
  {
    "ko": "프로젝트",
    "type": "noun",
    "meaning": "project",
    "form": "프로젝트",
    "image": "027.jpg"
  },
  {
    "ko": "업무",
    "type": "noun",
    "meaning": "work / task / duties",
    "form": "업무",
    "image": "028.jpg"
  },
  {
    "ko": "직업",
    "type": "noun",
    "meaning": "occupation / job",
    "form": "직업",
    "image": "029.jpg"
  },
  {
    "ko": "직원",
    "type": "noun",
    "meaning": "employee",
    "form": "직원",
    "image": "030.jpg"
  },
  {
    "ko": "동료",
    "type": "noun",
    "meaning": "coworker / colleague",
    "form": "동료",
    "image": "031.jpg"
  },
  {
    "ko": "상사",
    "type": "noun",
    "meaning": "boss / supervisor",
    "form": "상사",
    "image": "032.jpg"
  },
  {
    "ko": "월급",
    "type": "noun",
    "meaning": "salary / monthly pay",
    "form": "월급",
    "image": "033.jpg"
  },
  {
    "ko": "회의",
    "type": "noun",
    "meaning": "meeting",
    "form": "회의",
    "image": "034.jpg"
  },
  {
    "ko": "출근",
    "type": "noun",
    "meaning": "going to work / commute to work",
    "form": "출근",
    "image": "035.jpg"
  },
  {
    "ko": "퇴근",
    "type": "noun",
    "meaning": "leaving work / commute home",
    "form": "퇴근",
    "image": "036.jpg"
  },
  {
    "ko": "일해요",
    "type": "verb",
    "meaning": "work",
    "form": "일하다",
    "image": "037.jpg"
  },
  {
    "ko": "출근해요",
    "type": "verb",
    "meaning": "go to work",
    "form": "출근하다",
    "image": "038.jpg"
  },
  {
    "ko": "퇴근해요",
    "type": "verb",
    "meaning": "leave work / get off work",
    "form": "퇴근하다",
    "image": "039.jpg"
  },
  {
    "ko": "시작해요",
    "type": "verb",
    "meaning": "start / begin",
    "form": "시작하다",
    "image": "040.jpg"
  },
  {
    "ko": "끝나요",
    "type": "verb",
    "meaning": "end / finish",
    "form": "끝나다",
    "image": "041.jpg"
  },
  {
    "ko": "맡아요",
    "type": "verb",
    "meaning": "take charge of / be responsible for",
    "form": "맡다",
    "image": "042.jpg"
  },
  {
    "ko": "승진",
    "type": "noun",
    "meaning": "promotion",
    "form": "승진",
    "image": "043.jpg"
  },
  {
    "ko": "야근",
    "type": "noun",
    "meaning": "overtime / working late",
    "form": "야근",
    "image": "044.jpg"
  },
  {
    "ko": "쉬워요",
    "type": "adjective",
    "meaning": "easy",
    "form": "쉽다",
    "image": "045.jpg"
  },
  {
    "ko": "어려워요",
    "type": "adjective",
    "meaning": "difficult",
    "form": "어렵다",
    "image": "046.jpg"
  },
  {
    "ko": "휴가",
    "type": "noun",
    "meaning": "vacation / leave",
    "form": "휴가",
    "image": "047.jpg"
  },
  {
    "ko": "사무실",
    "type": "noun",
    "meaning": "office",
    "form": "사무실",
    "image": "048.jpg"
  },
  {
    "ko": "만족해요",
    "type": "adjective",
    "meaning": "satisfied",
    "form": "만족하다",
    "image": "049.jpg"
  },
  {
    "ko": "차",
    "type": "noun",
    "meaning": "tea",
    "form": "차",
    "image": "050.jpg"
  },
  {
    "ko": "고기",
    "type": "noun",
    "meaning": "meat",
    "form": "고기",
    "image": "051.jpg"
  },
  {
    "ko": "생선",
    "type": "noun",
    "meaning": "fish",
    "form": "생선",
    "image": "052.jpg"
  },
  {
    "ko": "야채",
    "type": "noun",
    "meaning": "vegetables",
    "form": "야채",
    "image": "053.jpg"
  },
  {
    "ko": "과일",
    "type": "noun",
    "meaning": "fruit",
    "form": "과일",
    "image": "054.jpg"
  },
  {
    "ko": "국수",
    "type": "noun",
    "meaning": "noodles",
    "form": "국수",
    "image": "055.jpg"
  },
  {
    "ko": "음식",
    "type": "noun",
    "meaning": "food",
    "form": "음식",
    "image": "056.jpg"
  },
  {
    "ko": "식탁",
    "type": "noun",
    "meaning": "dining table",
    "form": "식탁",
    "image": "057.jpg"
  },
  {
    "ko": "창문",
    "type": "noun",
    "meaning": "window",
    "form": "창문",
    "image": "058.jpg"
  },
  {
    "ko": "열쇠",
    "type": "noun",
    "meaning": "key",
    "form": "열쇠",
    "image": "059.jpg"
  },
  {
    "ko": "버스",
    "type": "noun",
    "meaning": "bus",
    "form": "버스",
    "image": "060.jpg"
  },
  {
    "ko": "지하철",
    "type": "noun",
    "meaning": "subway",
    "form": "지하철",
    "image": "061.jpg"
  },
  {
    "ko": "자전거",
    "type": "noun",
    "meaning": "bicycle",
    "form": "자전거",
    "image": "062.jpg"
  },
  {
    "ko": "비행기",
    "type": "noun",
    "meaning": "airplane",
    "form": "비행기",
    "image": "063.jpg"
  },
  {
    "ko": "산",
    "type": "noun",
    "meaning": "mountain",
    "form": "산",
    "image": "064.jpg"
  },
  {
    "ko": "바다",
    "type": "noun",
    "meaning": "sea",
    "form": "바다",
    "image": "065.jpg"
  },
  {
    "ko": "가족",
    "type": "noun",
    "meaning": "family",
    "form": "가족",
    "image": "066.jpg"
  },
  {
    "ko": "방",
    "type": "noun",
    "meaning": "room",
    "form": "방",
    "image": "067.jpg"
  },
  {
    "ko": "손",
    "type": "noun",
    "meaning": "hand",
    "form": "손",
    "image": "068.jpg"
  },
  {
    "ko": "눈",
    "type": "noun",
    "meaning": "eye",
    "form": "눈",
    "image": "069.jpg"
  },
  {
    "ko": "머리",
    "type": "noun",
    "meaning": "head",
    "form": "머리",
    "image": "070.jpg"
  },
  {
    "ko": "만나요",
    "type": "verb",
    "meaning": "meet",
    "form": "만나다",
    "image": "071.jpg"
  },
  {
    "ko": "공부해요",
    "type": "verb",
    "meaning": "study",
    "form": "공부하다",
    "image": "072.jpg"
  },
  {
    "ko": "일해요",
    "type": "verb",
    "meaning": "work",
    "form": "일하다",
    "image": "073.jpg"
  },
  {
    "ko": "앉아요",
    "type": "verb",
    "meaning": "sit",
    "form": "앉다",
    "image": "074.jpg"
  },
  {
    "ko": "목말라요",
    "type": "adjective",
    "meaning": "thirsty",
    "form": "목마르다",
    "image": "075.jpg"
  },
  {
    "ko": "달려요",
    "type": "verb",
    "meaning": "run",
    "form": "달리다",
    "image": "076.jpg"
  },
  {
    "ko": "써요",
    "type": "verb",
    "meaning": "write",
    "form": "쓰다",
    "image": "077.jpg"
  },
  {
    "ko": "들어요",
    "type": "verb",
    "meaning": "listen / hear",
    "form": "듣다",
    "image": "078.jpg"
  },
  {
    "ko": "안녕하세요",
    "type": "expression",
    "meaning": "hello",
    "form": "안녕하세요",
    "image": "079.jpg"
  },
  {
    "ko": "안녕히 가세요",
    "type": "expression",
    "meaning": "goodbye",
    "form": "안녕히 가세요",
    "image": "080.jpg"
  },
  {
    "ko": "국",
    "type": "noun",
    "meaning": "soup",
    "form": "국",
    "image": "081.jpg"
  },
  {
    "ko": "주스",
    "type": "noun",
    "meaning": "juice",
    "form": "주스",
    "image": "082.jpg"
  },
  {
    "ko": "잔",
    "type": "noun",
    "meaning": "glass / cup",
    "form": "잔",
    "image": "083.jpg"
  },
  {
    "ko": "선생님",
    "type": "noun",
    "meaning": "teacher",
    "form": "선생님",
    "image": "084.jpg"
  },
  {
    "ko": "학생",
    "type": "noun",
    "meaning": "student",
    "form": "학생",
    "image": "085.jpg"
  },
  {
    "ko": "병원",
    "type": "noun",
    "meaning": "hospital",
    "form": "병원",
    "image": "086.jpg"
  },
  {
    "ko": "은행",
    "type": "noun",
    "meaning": "bank",
    "form": "은행",
    "image": "087.jpg"
  },
  {
    "ko": "마트",
    "type": "noun",
    "meaning": "mart / supermarket",
    "form": "마트",
    "image": "088.jpg"
  },
  {
    "ko": "식당",
    "type": "noun",
    "meaning": "restaurant",
    "form": "식당",
    "image": "089.jpg"
  },
  {
    "ko": "인터넷",
    "type": "noun",
    "meaning": "internet",
    "form": "인터넷",
    "image": "090.jpg"
  },
  {
    "ko": "텔레비전",
    "type": "noun",
    "meaning": "television",
    "form": "텔레비전",
    "image": "091.jpg"
  },
  {
    "ko": "동물",
    "type": "noun",
    "meaning": "animal",
    "form": "동물",
    "image": "092.jpg"
  },
  {
    "ko": "비",
    "type": "noun",
    "meaning": "rain",
    "form": "비",
    "image": "093.jpg"
  },
  {
    "ko": "겨울",
    "type": "noun",
    "meaning": "winter",
    "form": "겨울",
    "image": "094.jpg"
  },
  {
    "ko": "바람",
    "type": "noun",
    "meaning": "wind",
    "form": "바람",
    "image": "095.jpg"
  },
  {
    "ko": "구름",
    "type": "noun",
    "meaning": "cloud",
    "form": "구름",
    "image": "096.jpg"
  },
  {
    "ko": "하늘",
    "type": "noun",
    "meaning": "sky",
    "form": "하늘",
    "image": "097.jpg"
  },
  {
    "ko": "별",
    "type": "noun",
    "meaning": "star",
    "form": "별",
    "image": "098.jpg"
  },
  {
    "ko": "무지개",
    "type": "noun",
    "meaning": "rainbow",
    "form": "무지개",
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
