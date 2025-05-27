// ✅ 전역 변수로 유지
const products = [
  { title: "[도시락 A]", price: "₩5,000", original: "₩6,000", rating: "★★★★☆", reviews: 3083 },
  { title: "[도시락 B]", price: "₩4,500", original: "₩5,500", rating: "★★★☆☆", reviews: 537 },
  { title: "[도시락 C]", price: "₩6,000", original: "₩7,000", rating: "★★★★★", reviews: 1200 },
  { title: "[도시락 D]", price: "₩4,800", original: "₩6,000", rating: "★★★★☆", reviews: 899 },
  { title: "[도시락 E]", price: "₩5,200", original: "₩6,500", rating: "★★★☆☆", reviews: 745 },
  { title: "[도시락 F]", price: "₩6,500", original: "₩7,500", rating: "★★★★★", reviews: 111 }
];

// 할인율 및 가격 숫자 계산
products.forEach(p => {
  const priceNum = parseInt(p.price.replace(/[^\d]/g, ""));
  const originalNum = parseInt(p.original.replace(/[^\d]/g, ""));
  p.discountPercent = Math.round(((originalNum - priceNum) / originalNum) * 100);
  p.priceValue = priceNum;
});

// 상품 출력 함수
function renderProducts(list) {
  const container = document.getElementById("product-list");
  if (!container) {
    console.error("상품 컨테이너가 없습니다.");
    return;
  }

  container.innerHTML = "";
  list.forEach(product => {
    const card = `
      <div class="col-6 col-md-3">
        <div class="product-card">
          <div class="product-image">
            <span class="discount-badge">-${product.discountPercent}%</span>
          </div>
          <button class="cart-btn" onclick="alert('장바구니에 담겼습니다!')">장바구니에 담기</button>
          <div class="mt-2 px-2 pb-3">
            <p class="fw-bold mb-1">${product.title}</p>
            <small class="text-danger fw-bold">${product.price}</small>
            <del class="text-muted">${product.original}</del>
            <div class="text-warning">${product.rating} 
              <small class="text-muted">(${product.reviews})</small>
            </div>
          </div>
          <a href="html/products.html" class="stretched-link"></a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// 정렬 후 출력 함수
function sortAndRender(option) {
  let sorted = [...products];
  switch (option) {
    case "discount":
      sorted.sort((a, b) => b.discountPercent - a.discountPercent);
      break;
    case "priceAsc":
      sorted.sort((a, b) => a.priceValue - b.priceValue);
      break;
    case "priceDesc":
      sorted.sort((a, b) => b.priceValue - a.priceValue);
      break;
    case "review":
      sorted.sort((a, b) => b.reviews - a.reviews);
      break;
  }
  renderProducts(sorted);
}



// ✅ 전역 등록: 다른 파일에서 쓸 수 있게!
window.sortAndRender = sortAndRender;

// ✅ DOM 로드 후 상품 첫 렌더링
document.addEventListener("DOMContentLoaded", () => {
  sortAndRender("discount");
});
