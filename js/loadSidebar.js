// js/loadSidebar.js

document.addEventListener("DOMContentLoaded", () => {
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '../' : '/lunchbox/';

  fetch(baseURL + "partials/sidebar.html")
    .then(res => res.text())
    .then(data => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        sidebar.innerHTML = data;

        const currentPage = location.pathname.split("/").pop(); // ex: mypage.html
        const links = document.querySelectorAll(".sidebar-link");

        links.forEach(link => {
          const linkPage = link.getAttribute("href").split("/").pop();
          if (linkPage === currentPage) {
            link.classList.add("active");
          }
        });
      } else {
        console.warn("❗ sidebar 요소를 찾을 수 없습니다.");
      }
    })
    .catch(err => console.error("❗ 사이드바 로딩 실패:", err));
});
