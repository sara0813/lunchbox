document.addEventListener("DOMContentLoaded", () => {
  const productListDiv = document.getElementById("product-list");
  const sortSelect = document.getElementById("sortOption");

  if (!productListDiv || !sortSelect) return;

  let sortedProducts = [];

  function sortProducts(criteria) {
    sortedProducts = products.filter(p => p.discount > 0);

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

    sortedProducts = sortedProducts.slice(0, 4);
    renderProducts();
  }

  function renderProducts() {
    productListDiv.innerHTML = "";

    sortedProducts.forEach(p => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-3";

      col.innerHTML = `
        <div class="product-card position-relative">
          <div class="product-image">
            <img src="${p.image}" alt="${p.title}" class="img-fluid w-100 h-100 object-fit-cover">
            <span class="discount-badge">${p.discount}% 할인</span>
          </div>
          <div class="mt-2">
            <div class="fw-semibold">${p.title}</div>
            <div class="text-muted small">${p.rating} | 리뷰 ${p.reviews.toLocaleString()}개</div>
            <div class="text-danger fw-bold">₩${p.price.toLocaleString()}</div>
            <div class="text-muted text-decoration-line-through small">₩${p.original.toLocaleString()}</div>
          </div>
          <button class="cart-btn">장바구니에 담기</button>
        </div>
      `;

      productListDiv.appendChild(col);

      col.querySelector(".cart-btn").addEventListener("click", () => {
        alert(`[${p.title}]이(가) 장바구니에 담겼습니다!`);
      });
    });
  }

  sortSelect.addEventListener("change", () => {
    sortProducts(sortSelect.value);
  });

  sortProducts("discount"); // 초기 정렬
});
