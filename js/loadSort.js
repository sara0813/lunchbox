// js/loadSort.js
document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.getElementById("sort-template");

  fetch("partials/sortTemplate.html")
    .then((res) => res.text())
    .then((data) => {
      placeholder.innerHTML = data;

      // 텍스트 설정
      const title = placeholder.getAttribute("data-title");
      if (title) {
        placeholder.querySelector(".sort-title").textContent = title;
      }

      // ✅ sortOption이 생긴 뒤에 이벤트 등록
      const sortSelect = document.getElementById("sortOption");
      if (sortSelect) {
        sortSelect.addEventListener("change", () => {
          // renderProducts.js의 sortAndRender 함수가 global scope에 있어야 호출 가능
          if (typeof sortAndRender === "function") {
            sortAndRender(sortSelect.value);
          } else {
            console.warn("⚠️ sortAndRender 함수가 존재하지 않습니다.");
          }
        });
      }
    })
    .catch((err) => {
      console.error("🔴 sortTemplate.html 로드 실패", err);
    });
});
