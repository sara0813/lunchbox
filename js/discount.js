function initDiscountPage() {
  const productListDiv = document.createElement("div");
  productListDiv.className = "row g-4";
  productListDiv.id = "product-list";

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const sortSelect = document.getElementById("sortOption");

  document.querySelector(".container").insertBefore(productListDiv, loadMoreBtn.parentElement);

  let filteredProducts = products.filter(p => p.discount > 0);
  let sortedProducts = [...filteredProducts];
  let currentIndex = 0;
  const initialLoad = 12;
  const batchSize = 3;

  function renderProducts(batch = initialLoad, reset = false) {
    if (reset) {
      productListDiv.innerHTML = "";
      currentIndex = 0;
    }

    const end = Math.min(currentIndex + batch, sortedProducts.length);
    for (let i = currentIndex; i < end; i++) {
      const p = sortedProducts[i];
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-3";

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

      const cartBtn = col.querySelector(".cart-btn");
      cartBtn.addEventListener("click", () => {
        alert(`${p.title}이(가) 장바구니에 담겼습니다.`);
      });

      productListDiv.appendChild(col);
    }

    currentIndex = end;
    loadMoreBtn.style.display =
      currentIndex >= sortedProducts.length ? "none" : "block";
  }

  function sortProducts(criteria) {
    sortedProducts = [...filteredProducts];

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

    renderProducts(initialLoad, true);
  }

  sortSelect.addEventListener("change", () => sortProducts(sortSelect.value));
  loadMoreBtn.addEventListener("click", () => renderProducts(batchSize));
  sortProducts("discount");
}

function waitForProductsReady() {
  if (window.products && Array.isArray(window.products)) {
    initDiscountPage();
  } else {
    setTimeout(waitForProductsReady, 50);
  }
}

document.addEventListener("DOMContentLoaded", waitForProductsReady);
