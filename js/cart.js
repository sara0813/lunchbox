const isLocalCart = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const baseURL = isLocalCart ? '../' : '/lunchbox/';

function updateTotal() {
    const products = document.querySelectorAll('.product');
    let total = 0;

    products.forEach(prod => {
        const checked = prod.querySelector('.product-check').checked;
        const qty = parseInt(prod.querySelector('.qty').textContent);
        const price = parseInt(prod.dataset.price);
        if (checked) total += qty * price;
    });

    document.getElementById('total-price').textContent = total.toLocaleString();
    document.getElementById('empty-message').style.display = products.length ? 'none' : 'block';
}

function attachEvents() {
    document.querySelectorAll('.plus').forEach(btn => {
        btn.onclick = e => {
            const qtyEl = e.target.parentNode.querySelector('.qty');
            qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
            updateTotal();
        };
    });

    document.querySelectorAll('.minus').forEach(btn => {
        btn.onclick = e => {
            const qtyEl = e.target.parentNode.querySelector('.qty');
            let qty = parseInt(qtyEl.textContent);
            if (qty > 1) {
                qtyEl.textContent = qty - 1;
                updateTotal();
            }
        };
    });

    document.querySelectorAll('.product-check').forEach(cb => cb.onchange = updateTotal);
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = e => {
            e.target.closest('.product').remove();
            updateTotal();
        };
    });
}

function deleteSelected() {
    const selected = [...document.querySelectorAll('.product-check')].filter(cb => cb.checked);
    if (!selected.length) {
        alert("삭제할 상품이 없습니다.");
        return;
    }
    selected.forEach(cb => cb.closest('.product').remove());
    updateTotal();
}

function orderAll() {
    if (document.querySelectorAll('.product').length === 0) {
        alert("주문할 상품이 없습니다.");
        return;
    }
    alert("전체 상품 주문을 진행합니다.");
    location.href = `${baseURL}html/cardpay.html`;
}

function orderSelected() {
    const selected = [...document.querySelectorAll('.product-check')].filter(cb => cb.checked);
    if (!selected.length) {
        alert("선택한 상품이 없습니다.");
        return;
    }
    alert("선택한 상품 주문을 진행합니다.");
    location.href = `${baseURL}html/cardpay.html`;
}

document.addEventListener("DOMContentLoaded", () => {
    attachEvents();
    updateTotal();
});
