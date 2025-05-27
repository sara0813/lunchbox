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

function renderProducts(list) {
  const container = document.getElementById("product-list");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (!container) {
    console.error("❌ 상품 컨테이너가 없습니다.");
    return;
  }

  // ✅ 할인 상품만 필터링
  const discountedOnly = list.filter(product => product.discountPercent > 0);

  // ✅ 더보기 버튼 숨기기 또는 표시
  if (discountedOnly.length > currentCount) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
  }

  container.innerHTML = "";
  discountedOnly.slice(0, currentCount).forEach(product => {
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


// ✅ 정렬 후 출력
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

// ✅ 전역 등록 (외부에서도 사용 가능)
window.sortAndRender = sortAndRender;

// ✅ DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  sortAndRender("discount");

  const sortSelect = document.getElementById("sortOption");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (!sortSelect || !loadMoreBtn) {
    console.error("❌ 요소가 존재하지 않습니다. ID를 확인하세요.");
    return;
  }

  sortSelect.addEventListener("change", e => {
    currentCount = 12;
    sortAndRender(e.target.value);
  });

  loadMoreBtn.addEventListener("click", () => {
    currentCount += 8;
    sortAndRender(sortSelect.value);
  });
});
