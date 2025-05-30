document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("address-list");
  const addBtn = document.getElementById("add-address");

  addBtn.addEventListener("click", () => {
    const newCard = document.createElement("div");
    newCard.className = "card mb-3 address-card";
    newCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title"><input type="text" class="form-control mb-2" placeholder="주소 라벨 (예: 집)" /></h5>
        <textarea class="form-control mb-2" placeholder="주소 입력"></textarea>
        <input class="form-control mb-2" placeholder="받는사람 / 연락처" />
        <div class="text-end">
          <button class="btn btn-sm btn-success me-2 save-btn">저장</button>
          <button class="btn btn-sm btn-outline-danger delete-btn">삭제</button>
        </div>
      </div>`;
    list.appendChild(newCard);
    bindButtons(newCard);
  });

  function bindButtons(card) {
    const del = card.querySelector(".delete-btn");
    del && del.addEventListener("click", () => card.remove());

    const edit = card.querySelector(".edit-btn");
    if (edit) {
      edit.addEventListener("click", () => {
        const addr = card.querySelector(".address-text");
        const person = card.querySelector(".recipient-text");
        const newAddr = prompt("주소를 수정하세요:", addr.textContent);
        const newPerson = prompt("받는사람을 수정하세요:", person.textContent);
        if (newAddr) addr.textContent = newAddr;
        if (newPerson) person.textContent = newPerson;
      });
    }

    const save = card.querySelector(".save-btn");
    if (save) {
      save.addEventListener("click", () => {
        const inputs = card.querySelectorAll("input, textarea");
        const label = inputs[0].value.trim() || "주소";
        const address = inputs[1].value.trim();
        const recipient = inputs[2].value.trim();

        if (!address || !recipient) {
          alert("주소와 받는사람 정보를 모두 입력해주세요.");
          return;
        }

        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${label}</h5>
            <p class="card-text address-text">${address}</p>
            <p class="card-text recipient-text">${recipient}</p>
            <div class="text-end">
              <button class="btn btn-sm btn-secondary me-2 edit-btn">수정</button>
              <button class="btn btn-sm btn-outline-danger delete-btn">삭제</button>
            </div>
          </div>`;
        bindButtons(card);
      });
    }
  }

  // 초기 카드에도 버튼 적용
  document.querySelectorAll(".address-card").forEach(card => bindButtons(card));
});
