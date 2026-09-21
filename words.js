const WORDS = [
  {
    "ko": "사과",
    "type": "noun",
    "meaning": "apple",
    "form": "사과",
    "image": "000.jpg"
  },
  {
    "ko": "고양이",
    "type": "noun",
    "meaning": "cat",
    "form": "고양이",
    "image": "001.jpg"
  },
  {
    "ko": "책",
    "type": "noun",
    "meaning": "book",
    "form": "책",
    "image": "002.jpg"
  },
  {
    "ko": "자동차",
    "type": "noun",
    "meaning": "car",
    "form": "자동차",
    "image": "003.jpg"
  },
  {
    "ko": "집",
    "type": "noun",
    "meaning": "house",
    "form": "집",
    "image": "004.jpg"
  },
  {
    "ko": "강아지",
    "type": "noun",
    "meaning": "dog",
    "form": "강아지",
    "image": "005.jpg"
  },
  {
    "ko": "커피",
    "type": "noun",
    "meaning": "coffee",
    "form": "커피",
    "image": "006.jpg"
  },
  {
    "ko": "물",
    "type": "noun",
    "meaning": "water",
    "form": "물",
    "image": "007.jpg"
  },
  {
    "ko": "먹어요",
    "type": "verb",
    "meaning": "eat",
    "form": "먹어요",
    "image": "008.jpg"
  },
  {
    "ko": "커요",
    "type": "adjective",
    "meaning": "big",
    "form": "커요",
    "image": "009.jpg"
  },
  {
    "ko": "좋아요",
    "type": "adjective",
    "meaning": "good / like",
    "form": "좋아요",
    "image": "010.jpg"
  },
  {
    "ko": "걸어요",
    "type": "verb",
    "meaning": "walk",
    "form": "걸어요",
    "image": "011.jpg"
  },
  {
    "ko": "나무",
    "type": "noun",
    "meaning": "tree",
    "form": "나무",
    "image": "012.jpg"
  },
  {
    "ko": "해",
    "type": "noun",
    "meaning": "sun",
    "form": "해",
    "image": "013.jpg"
  },
  {
    "ko": "달",
    "type": "noun",
    "meaning": "moon",
    "form": "달",
    "image": "014.jpg"
  },
  {
    "ko": "의자",
    "type": "noun",
    "meaning": "chair",
    "form": "의자",
    "image": "015.jpg"
  },
  {
    "ko": "펜",
    "type": "noun",
    "meaning": "pen",
    "form": "펜",
    "image": "016.jpg"
  },
  {
    "ko": "문",
    "type": "noun",
    "meaning": "door",
    "form": "문",
    "image": "017.jpg"
  },
  {
    "ko": "침대",
    "type": "noun",
    "meaning": "bed",
    "form": "침대",
    "image": "018.jpg"
  },
  {
    "ko": "시계",
    "type": "noun",
    "meaning": "clock",
    "form": "시계",
    "image": "019.jpg"
  },
  {
    "ko": "밥",
    "type": "noun",
    "meaning": "cooked rice",
    "form": "밥",
    "image": "020.jpg"
  },
  {
    "ko": "빵",
    "type": "noun",
    "meaning": "bread",
    "form": "빵",
    "image": "021.jpg"
  },
  {
    "ko": "바나나",
    "type": "noun",
    "meaning": "banana",
    "form": "바나나",
    "image": "022.jpg"
  },
  {
    "ko": "계란",
    "type": "noun",
    "meaning": "egg",
    "form": "계란",
    "image": "023.jpg"
  },
  {
    "ko": "오렌지",
    "type": "noun",
    "meaning": "orange",
    "form": "오렌지",
    "image": "024.jpg"
  },
  {
    "ko": "우유",
    "type": "noun",
    "meaning": "milk",
    "form": "우유",
    "image": "025.jpg"
  },
  {
    "ko": "휴대폰",
    "type": "noun",
    "meaning": "mobile phone",
    "form": "휴대폰",
    "image": "026.jpg"
  },
  {
    "ko": "가방",
    "type": "noun",
    "meaning": "bag",
    "form": "가방",
    "image": "027.jpg"
  },
  {
    "ko": "책상",
    "type": "noun",
    "meaning": "desk",
    "form": "책상",
    "image": "028.jpg"
  },
  {
    "ko": "자요",
    "type": "verb",
    "meaning": "sleep",
    "form": "자요",
    "image": "029.jpg"
  },
  {
    "ko": "사람",
    "type": "noun",
    "meaning": "person",
    "form": "사람",
    "image": "030.jpg"
  },
  {
    "ko": "여자",
    "type": "noun",
    "meaning": "woman",
    "form": "여자",
    "image": "031.jpg"
  },
  {
    "ko": "남자",
    "type": "noun",
    "meaning": "man",
    "form": "남자",
    "image": "032.jpg"
  },
  {
    "ko": "아이",
    "type": "noun",
    "meaning": "child",
    "form": "아이",
    "image": "033.jpg"
  },
  {
    "ko": "친구",
    "type": "noun",
    "meaning": "friend",
    "form": "친구",
    "image": "034.jpg"
  },
  {
    "ko": "학교",
    "type": "noun",
    "meaning": "school",
    "form": "학교",
    "image": "035.jpg"
  },
  {
    "ko": "돈",
    "type": "noun",
    "meaning": "money",
    "form": "돈",
    "image": "036.jpg"
  },
  {
    "ko": "시간",
    "type": "noun",
    "meaning": "time",
    "form": "시간",
    "image": "037.jpg"
  },
  {
    "ko": "가요",
    "type": "verb",
    "meaning": "go",
    "form": "가다",
    "image": "038.jpg"
  },
  {
    "ko": "와요",
    "type": "verb",
    "meaning": "come",
    "form": "오다",
    "image": "039.jpg"
  },
  {
    "ko": "봐요",
    "type": "verb",
    "meaning": "see / watch / look",
    "form": "보다",
    "image": "040.jpg"
  },
  {
    "ko": "해요",
    "type": "verb",
    "meaning": "do",
    "form": "하다",
    "image": "041.jpg"
  },
  {
    "ko": "말해요",
    "type": "verb",
    "meaning": "speak / say",
    "form": "말하다",
    "image": "042.jpg"
  },
  {
    "ko": "마셔요",
    "type": "verb",
    "meaning": "drink",
    "form": "마시다",
    "image": "043.jpg"
  },
  {
    "ko": "읽어요",
    "type": "verb",
    "meaning": "read",
    "form": "읽다",
    "image": "044.jpg"
  },
  {
    "ko": "작아요",
    "type": "adjective",
    "meaning": "small",
    "form": "작다",
    "image": "045.jpg"
  },
  {
    "ko": "많아요",
    "type": "adjective",
    "meaning": "many / a lot",
    "form": "많다",
    "image": "046.jpg"
  },
  {
    "ko": "빨라요",
    "type": "adjective",
    "meaning": "fast",
    "form": "빠르다",
    "image": "047.jpg"
  },
  {
    "ko": "더워요",
    "type": "adjective",
    "meaning": "hot",
    "form": "덥다",
    "image": "048.jpg"
  },
  {
    "ko": "추워요",
    "type": "adjective",
    "meaning": "cold",
    "form": "춥다",
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
  }
];
