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

function renderTop10PopularProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  const sorted = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 10);
  container.innerHTML = "";

  sorted.forEach((product, index) => {
    const rank = index + 1;
    const rankColor = rank === 1 ? "#ffd700" : rank === 2 ? "#c0c0c0" : rank === 3 ? "#cd7f32" : "#dee2e6";

    const card = `
      <div class="col-6 col-md-3">
        <div class="product-card p-3 position-relative" style="border-top: 4px solid ${rankColor}; background-color: ${rank <= 3 ? '#fffef6' : '#ffffff'};">
          <div class="product-image">
            <span class="rank-badge">TOP ${rank}</span>
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
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTop10PopularProducts();
});
