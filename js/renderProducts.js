document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { title: "[도시락 A]", price: "₩5,000", original: "₩6,000", rating: "★★★★☆", reviews: 3083 },
    { title: "[도시락 B]", price: "₩4,500", original: "₩5,500", rating: "★★★☆☆", reviews: 537 },
    { title: "[도시락 C]", price: "₩6,000", original: "₩7,000", rating: "★★★★★", reviews: 1200 },
    { title: "[도시락 D]", price: "₩4,800", original: "₩6,000", rating: "★★★★☆", reviews: 899 },
    { title: "[도시락 E]", price: "₩5,200", original: "₩6,500", rating: "★★★☆☆", reviews: 745 },
    { title: "[도시락 F]", price: "₩6,500", original: "₩7,500", rating: "★★★★★", reviews: 111 }
  ];

  const container = document.getElementById("product-list");

  products.forEach(product => {
    const card = `
      <div class="col-6 col-md-3">
        <div class="product-card">
          <span class="icon-heart" onclick="toggleHeart(this)">🤍</span>
          <div class="product-image"></div>
          <button class="cart-btn" onclick="alert('장바구니에 담겼습니다!')">장바구니에 담기</button>
          <div class="mt-2 px-2 pb-3">
            <p class="mb-1">${product.title}</p>
            <small class="text-danger fw-bold">${product.price}</small> <del>${product.original}</del>
            <div class="text-warning">${product.rating} <small class="text-muted">(${product.reviews})</small></div>
          </div>
          <a href="html/detail.html" class="stretched-link"></a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
});
