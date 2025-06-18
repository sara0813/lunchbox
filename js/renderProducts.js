const productListDiv = document.getElementById("product-list");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const sortSelect = document.getElementById("sortOption");

let currentIndex = 0;
const initialLoad = 12;
const batchSize = 3;
let sortedProducts = [];

// 렌더링 함수
function renderProducts(batch = initialLoad, reset = false) {
  if (reset) {
    productListDiv.innerHTML = "";
    currentIndex = 0;
  }

  const end = Math.min(currentIndex + batch, sortedProducts.length);
  for (let i = currentIndex; i < end; i++) {
    const p = sortedProducts[i];
    const col = document.createElement("div");
    col.className = "col-6 col-md-3";

    col.innerHTML = `
      <div class="product-card position-relative">
        ${p.discount > 0 ? `<div class="discount-badge">${p.discount}% 할인</div>` : ""}
        <div class="product-image">
          <img src="${p.image}" alt="${p.title}" class="img-fluid w-100 h-100 object-fit-cover">
        </div>
        <div class="mt-2">
          <div class="fw-semibold">${p.title}</div>
          <div class="text-muted small">${p.rating} | 리뷰 ${p.reviews.toLocaleString()}개</div>
          <div class="text-danger fw-bold">₩${p.price.toLocaleString()}</div>
          ${p.discount > 0 && p.original ? `<div class="text-muted text-decoration-line-through small">₩${p.original.toLocaleString()}</div>` : ""}
        </div>
        <button class="cart-btn">장바구니에 담기</button>
      </div>
    `;

    productListDiv.appendChild(col);

    // ✅ 버튼 이벤트 바인딩
    const cartButton = col.querySelector(".cart-btn");
    if (cartButton) {
      cartButton.addEventListener("click", () => {
        alert(`[${p.title}]이(가) 장바구니에 추가되었습니다!`);
      });
    }
  }

  currentIndex = end;
  loadMoreBtn.style.display = currentIndex >= sortedProducts.length ? "none" : "block";
}

// 정렬 함수
function sortProducts(criteria) {
  sortedProducts = [...products];

  switch (criteria) {
    case "discount":
      sortedProducts.sort((a, b) => b.discount - a.discount);
      break;
    case "priceAsc":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "review":
      sortedProducts.sort((a, b) => b.reviews - a.reviews);
      break;
  }

  renderProducts(initialLoad, true); // reset
}

// 이벤트 바인딩
sortSelect.addEventListener("change", () => {
  sortProducts(sortSelect.value);
});

loadMoreBtn.addEventListener("click", () => renderProducts(batchSize));

// 초기 실행
sortProducts("discount");
