
// filter1.js
// 전역 상품 데이터
const products = [
  { title: "[도시락 A]", price: "₩5,000", original: "₩6,000", rating: "★★★★☆", reviews: 3083 },
  { title: "[도시락 B]", price: "₩4,500", original: "₩5,500", rating: "★★★☆☆", reviews: 537 },
  { title: "[도시락 C]", price: "₩6,000", original: "₩7,000", rating: "★★★★★", reviews: 1200 },
  { title: "[도시락 D]", price: "₩4,800", original: "₩6,000", rating: "★★★★☆", reviews: 899 },
  { title: "[도시락 E]", price: "₩5,200", original: "₩6,500", rating: "★★★☆☆", reviews: 745 },
  { title: "[도시락 F]", price: "₩6,500", original: "₩7,500", rating: "★★★★★", reviews: 111 }
];

// 할인율 및 가격 숫자 계산
products.forEach(p => {
  const num = str => parseInt(str.replace(/[^\d]/g, ''), 10);
  p.discountPercent = Math.round((num(p.original) - num(p.price)) / num(p.original) * 100);
  p.priceValue = num(p.price);
});

// 상품 렌더링 및 하트 토글 포함
function renderProducts(list) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  list.forEach(p => {
    container.innerHTML += `
      <div class="col-6 col-md-3">
        <div class="product-card">
          <div class="product-image">
            <span class="discount-badge">-${p.discountPercent}%</span>
            <span class="icon-heart">🤍</span>
          </div>
          <button class="cart-btn" onclick="alert('장바구니에 담겼습니다!')">장바구니에 담기</button>
          <div class="mt-2 px-2 pb-3">
            <p class="fw-bold mb-1">${p.title}</p>
            <small class="text-danger fw-bold">${p.price}</small>
            <del class="text-muted ms-2">${p.original}</del>
            <div class="text-warning">${p.rating} <small class="text-muted">(${p.reviews})</small></div>
          </div>
          <a href="html/products.html" class="stretched-link"></a>
        </div>
      </div>`;
  });
}

function sortAndRender(option) {
  let sorted = [...products];
  switch(option) {
    case 'priceAsc': sorted.sort((a,b)=>a.priceValue-b.priceValue); break;
    case 'priceDesc': sorted.sort((a,b)=>b.priceValue-a.priceValue); break;
    case 'review': sorted.sort((a,b)=>b.reviews-a.reviews); break;
    default: sorted.sort((a,b)=>b.discountPercent-a.discountPercent);
  }
  renderProducts(sorted);
}
window.sortAndRender = sortAndRender;

document.addEventListener('DOMContentLoaded', () => {
  // 초기 출력
  sortAndRender('discount');

  // 하트 클릭 이벤트 위임
  document.addEventListener('click', e => {
    if (e.target.classList.contains('icon-heart')) {
      const el = e.target;
      const title = el.closest('.product-card').querySelector('p').textContent;
      const isAdding = el.textContent === '🤍';
      el.textContent = isAdding ? '❤️' : '🤍';
      alert(`${title} ${isAdding ? '관심목록에 추가' : '관심목록에서 제거'}되었습니다.`);
    }
  });
});
