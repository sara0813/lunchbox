document.addEventListener("DOMContentLoaded", () => {
  const rankingList = document.getElementById("ranking-list");

  const topProducts = [...products]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 10);

  topProducts.forEach((product, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3";

    col.innerHTML = `
      <div class="product-card position-relative">
        <div class="product-image">
          <img src="${product.image}" alt="${product.title}" class="img-fluid w-100 h-100 object-fit-cover">
          <span class="rank-badge">TOP ${index + 1}</span>
          ${product.discount > 0 ? `<span class="discount-badge">${product.discount}% 할인</span>` : ""}
        </div>
        <div class="mt-2">
          <div class="fw-semibold">${product.title}</div>
          <div class="text-muted small">${product.rating} | 리뷰 ${product.reviews.toLocaleString()}개</div>
          <div class="text-danger fw-bold">₩${product.price.toLocaleString()}</div>
          ${
            product.discount > 0 && product.original
              ? `<div class="text-muted text-decoration-line-through small">₩${product.original.toLocaleString()}</div>`
              : ""
          }
        </div>
        <button class="cart-btn">장바구니에 담기</button>
      </div>
    `;

    // 장바구니 버튼 클릭 이벤트 추가
    col.querySelector(".cart-btn").addEventListener("click", () => {
      alert(`[${product.title}]이(가) 장바구니에 담겼습니다!`);
    });

    rankingList.appendChild(col);
  });
});
