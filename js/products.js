document.addEventListener("DOMContentLoaded", () => {

  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '../' : '/lunchbox/';

  const products = [
    { title: "[도시락 A]", price: "₩5,000", original: "₩6,000", rating: "★★★★☆", reviews: 3083 },
    { title: "[도시락 B]", price: "₩4,500", original: "₩5,500", rating: "★★★☆☆", reviews: 537 },
    { title: "[도시락 C]", price: "₩6,000", original: "₩7,000", rating: "★★★★★", reviews: 1200 },
    { title: "[도시락 D]", price: "₩4,800", original: "₩6,000", rating: "★★★★☆", reviews: 899 },
    { title: "[도시락 E]", price: "₩5,200", original: "₩6,500", rating: "★★★☆☆", reviews: 745 },
    { title: "[도시락 F]", price: "₩6,500", original: "₩7,500", rating: "★★★★★", reviews: 111 }
  ];

  products.forEach(p => {
    const priceNum = parseInt(p.price.replace(/[^\d]/g, ""));
    const originalNum = parseInt(p.original.replace(/[^\d]/g, ""));
    p.discountPercent = Math.round(((originalNum - priceNum) / originalNum) * 100);
    p.priceValue = priceNum;
  });

  const container = document.getElementById("product-list");
  const sortSelect = document.getElementById("sortOption");

  function renderProducts(list) {
    container.innerHTML = "";
    list.forEach(product => {
      const card = `
        <div class="col-6 col-md-3">
          <div class="product-card">
            <div class="product-image">
              <span class="discount-badge">-${product.discountPercent}%</span>
              <span class="icon-heart" onclick="toggleHeart(this)">🤍</span>
            </div>
            <button class="cart-btn" onclick="alert('장바구니에 담겼습니다!')">장바구니에 담기</button>
            <div class="mt-2 px-2 pb-3">
              <p class="fw-bold mb-1">${product.title}</p>
              <small class="text-danger fw-bold">${product.price}</small>
              <del class="text-muted">${product.original}</del>
              <div class="text-warning">${product.rating} <small class="text-muted">(${product.reviews})</small></div>
            </div>
            <a href="product.html" class="stretched-link"></a>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }

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

  sortSelect.addEventListener("change", () => {
    sortAndRender(sortSelect.value);
  });

  sortAndRender("discount");
});

function toggleHeart(el) {
  el.textContent = el.textContent === "🤍" ? "❤️" : "🤍";
}
