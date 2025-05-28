// js/loadHeader.js
fetch("partials/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // ✅ 배너 메시지 초기화 (함수 존재 여부 체크 포함)
    if (typeof initBannerMessage === "function") {
      initBannerMessage();
    } else {
      console.warn("⚠️ initBannerMessage 함수가 정의되지 않았습니다.");
    }

    // ✅ baseURL 설정
    const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    const baseURL = isLocal ? '../' : '/lunchbox/';

    // ✅ 언어 선택
    const languageSelect = document.getElementById("languageSelect");
    if (languageSelect) {
      languageSelect.addEventListener("change", function () {
        const selectedLang = this.value;
        if (selectedLang !== "ko") {
          alert("아직 지원하지 않는 서비스입니다.");
          this.selectedIndex = 0;
          this.blur();
        }
      });
    }

    // ✅ 로그인 상태에 따른 메뉴 표시
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userName = localStorage.getItem("userName") || "";
    const authArea = document.getElementById("auth-area");

    if (authArea) {
      if (isLoggedIn) {
        authArea.innerHTML = `<a class="nav-link px-2" href="${baseURL}html/mypage.html">${userName}님 | <span onclick="logout()" style="cursor:pointer; color:red;">로그아웃</span></a>`;
      } else {
        authArea.innerHTML = `<a class="nav-link px-2" href="${baseURL}html/login.html">로그인</a>`;
      }
    }

    // ✅ 보호된 링크 처리
    const protectedSelectors = [
      'a[href$="mypage.html"]',
      'a[href$="cart.html"]',
      'a[href$="wishlist.html"]'
    ];

    protectedSelectors.forEach(selector => {
      const links = document.querySelectorAll(selector);
      links.forEach(link => {
        link.addEventListener("click", function (e) {
          if (!isLoggedIn) {
            e.preventDefault();
            alert("로그인이 필요합니다.");
            window.location.href = `${baseURL}html/login.html?redirect=${encodeURIComponent(location.pathname)}`;
          }
        });
      });
    });
  });

// 🔹 로그아웃 함수 (전역)
function logout() {
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '../' : '/lunchbox/';

  localStorage.clear();
  alert("로그아웃 되었습니다.");
  window.location.href = `${baseURL}index.html`;
}
