const products = Array.from({ length: 30 }, (_, i) => {
  const price = 5000 + i * 100;
  const original = i % 3 === 0 ? price + 1000 : price;
  const hasDiscount = original > price;
  return {
    title: `[도시락 ${String.fromCharCode(65 + i)}]`,
    price: `₩${price.toLocaleString()}`,
    original: `₩${original.toLocaleString()}`,
    rating: "★★★★☆",
    reviews: Math.floor(Math.random() * 1000) + 100,
    priceValue: price,
    discountPercent: hasDiscount ? Math.round((original - price) / original * 100) : 0
  };
});

let currentCount = 12;

// 상품 출력 함수
function renderProducts(list) {
  const container = document.getElementById("product-list");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!container) {
    console.error("상품 컨테이너가 없습니다.");
    return;
  }

  container.innerHTML = "";

  // 더보기 버튼 상태 업데이트
  if (list.length > currentCount) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
  }

  list.slice(0, currentCount).forEach(product => {
    const card = `
      <div class="col-6 col-md-3">
        <div class="product-card">
          <div class="product-image">
            ${product.discountPercent ? `<span class="discount-badge">-${product.discountPercent}%</span>` : ""}
          </div>
          <button class="cart-btn" onclick="alert('장바구니에 담겼습니다!')">장바구니에 담기</button>
          <div class="mt-2 px-2 pb-3">
            <p class="fw-bold mb-1">${product.title}</p>
            <small class="text-danger fw-bold">${product.price}</small>
            ${product.discountPercent ? `<del class="text-muted">${product.original}</del>` : ""}
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

// ✅ 전역 등록
window.sortAndRender = sortAndRender;

// ✅ 초기 렌더링 및 이벤트 바인딩
document.addEventListener("DOMContentLoaded", () => {
  sortAndRender("discount");

  document.getElementById("sortOption").addEventListener("change", e => {
    currentCount = 12;
    sortAndRender(e.target.value);
  });

  document.getElementById("loadMoreBtn").addEventListener("click", () => {
    currentCount += 8;
    sortAndRender(document.getElementById("sortOption").value);
  });
});
