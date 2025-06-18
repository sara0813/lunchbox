window.products = [
  {
    title: "훈제오리 + 채소볶음 + 현미밥",
    image: "images/15.png",
    price: 8900,
    original: 8900,
    rating: "★★★★☆",
    reviews: 213
  },
  {
    title: "닭가슴살 큐브 + 단호박",
    image: "images/6.png",
    price: 6900,
    original: 8200,
    rating: "★★★★★",
    reviews: 267
  },
  {
    title: "곤약밥 + 닭가슴살 장조림",
    image: "images/8.png",
    price: 6700,
    original: 6700,
    rating: "★★★★☆",
    reviews: 158
  },
  {
    title: "닭가슴살 김치볶음밥",
    image: "images/14.png",
    price: 6200,
    original: 6900,
    rating: "★★★★☆",
    reviews: 198
  },
  {
    title: "에그마요 샐러드 도시락",
    image: "images/11.png",
    price: 5800,
    original: 5800,
    rating: "★★★☆☆",
    reviews: 117
  },
  {
    title: "두부 스크램블 + 샐러드",
    image: "images/4.png",
    price: 6200,
    original: 6800,
    rating: "★★★☆☆",
    reviews: 143
  },
  {
    title: "닭가슴살 브로콜리 도시락",
    image: "images/1.png",
    price: 6500,
    original: 7300,
    rating: "★★★★☆",
    reviews: 221
  },
  {
    title: "연어 스테이크 + 현미밥",
    image: "images/3.png",
    price: 8500,
    original: 8900,
    rating: "★★★★☆",
    reviews: 305
  },
  {
    title: "곤약면 + 닭가슴살 야채볶음",
    image: "images/12.png",
    price: 6600,
    original: 6600,
    rating: "★★★★☆",
    reviews: 186
  },
  {
    title: "통밀 또띠아 + 닭가슴살 랩",
    image: "images/9.png",
    price: 7000,
    original: 7600,
    rating: "★★★☆☆",
    reviews: 126
  },
  {
    title: "버섯 불고기 도시락",
    image: "images/13.png",
    price: 7200,
    original: 7200,
    rating: "★★★★☆",
    reviews: 271
  },
  {
    title: "저탄수 콜리플라워 라이스 도시락",
    image: "images/10.png",
    price: 6100,
    original: 6900,
    rating: "★★★★☆",
    reviews: 203
  },
  {
    title: "현미밥 + 계란말이 + 나물반찬",
    image: "images/5.png",
    price: 5900,
    original: 5900,
    rating: "★★★★☆",
    reviews: 198
  },
  {
    title: "현미밥 + 소고기 장조림 + 채소볶음",
    image: "images/7.png",
    price: 7900,
    original: 8900,
    rating: "★★★★☆",
    reviews: 322
  },
  {
    title: "닭가슴살 스테이크 + 고구마",
    image: "images/2.png",
    price: 7300,
    original: 7900,
    rating: "★★★★★",
    reviews: 189
  }
];

products.forEach(p => {
  if (p.original && p.original > p.price) {
    p.discount = Math.round(((p.original - p.price) / p.original) * 100);
  } else {
    p.discount = 0;
  }
});
