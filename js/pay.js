document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("card-list");
  const addBtn = document.getElementById("add-card");

  addBtn.addEventListener("click", () => {
    const card = document.createElement("div");
    card.className = "card mb-3 card-item";
    card.innerHTML = `
      <div class="card-body">
        <div class="row g-2 mb-2">
          <div class="col-md-4"><input class="form-control" placeholder="카드명 (예: 삼성카드)" /></div>
          <div class="col-md-5"><input class="form-control" placeholder="카드번호 (**** **** **** 1234)" /></div>
          <div class="col-md-3"><input class="form-control" placeholder="유효기간 (MM/YY)" /></div>
        </div>
        <div class="text-end">
          <button class="btn btn-sm btn-success me-2 save-btn">저장</button>
          <button class="btn btn-sm btn-outline-danger delete-btn">삭제</button>
        </div>
      </div>`;
    list.appendChild(card);
    bindButtons(card);
  });

  function bindButtons(card) {
    const del = card.querySelector(".delete-btn");
    del && del.addEventListener("click", () => card.remove());

    const edit = card.querySelector(".edit-btn");
    if (edit) {
      edit.addEventListener("click", () => {
        const name = prompt("카드명을 입력하세요:", card.querySelector(".card-title").textContent);
        const number = prompt("카드번호:", card.querySelector(".card-text").textContent);
        const date = prompt("유효기간:", card.querySelector("small").textContent.replace("유효기간: ", ""));

        if (name && number && date) {
          card.querySelector(".card-title").textContent = name;
          card.querySelector(".card-text").textContent = number;
          card.querySelector("small").textContent = "유효기간: " + date;
        }
      });
    }

    const save = card.querySelector(".save-btn");
    if (save) {
      save.addEventListener("click", () => {
        const inputs = card.querySelectorAll("input");
        const name = inputs[0].value.trim();
        const number = inputs[1].value.trim();
        const date = inputs[2].value.trim();

        if (!name || !number || !date) {
          alert("모든 정보를 입력해주세요.");
          return;
        }

        card.innerHTML = `
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 class="card-title mb-1">${name}</h5>
              <p class="card-text mb-0">${number}</p>
              <small class="text-muted">유효기간: ${date}</small>
            </div>
            <div>
              <button class="btn btn-sm btn-secondary me-2 edit-btn">수정</button>
              <button class="btn btn-sm btn-outline-danger delete-btn">삭제</button>
            </div>
          </div>`;
        bindButtons(card);
      });
    }
  }

  document.querySelectorAll(".card-item").forEach(card => bindButtons(card));
});
