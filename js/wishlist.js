// js/wishlist.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("wishlist-items");

  if (!window.products || !Array.isArray(window.products)) {
    console.error("products 배열이 없습니다.");
    return;
  }

  // 🔹 3~5개 랜덤 선택
  const shuffled = [...window.products].sort(() => 0.5 - Math.random());
  const randomCount = Math.floor(Math.random() * 3) + 3; // 3~5개
  const selected = shuffled.slice(0, randomCount);

  const row = document.createElement("div");
  row.className = "row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4";

  selected.forEach(p => {
    const col = document.createElement("div");
    col.className = "col";

    const card = document.createElement("div");
    card.className = "product-card position-relative h-100";

    card.innerHTML = `
      <div class="product-image position-relative">
        <img src="${p.image}" alt="${p.title}" class="img-fluid w-100 h-100 object-fit-cover">
        ${p.discount > 0 ? `<div class="discount-badge">${p.discount}% 할인</div>` : ""}
      </div>
      <div class="p-3">
        <h6 class="fw-bold mb-1">${p.title}</h6>
        <div class="text-muted small mb-2">리뷰 ${p.reviews.toLocaleString()}개 • ${p.rating}</div>
        <div class="fw-bold text-danger">
          ₩${p.price.toLocaleString()}
          ${p.discount > 0 ? `<del class="text-muted ms-2 small">₩${p.original.toLocaleString()}</del>` : ""}
        </div>
      </div>
      <button class="cart-btn">장바구니 담기</button>
    `;

    // ✅ 장바구니 버튼 클릭 시 알림
    const cartBtn = card.querySelector(".cart-btn");
    cartBtn.addEventListener("click", () => {
      alert(`[${p.title}]이(가) 장바구니에 추가되었습니다!`);
    });

    col.appendChild(card);
    row.appendChild(col);
  });

  container.appendChild(row);
});
