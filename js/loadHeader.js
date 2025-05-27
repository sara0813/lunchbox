fetch("partials/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // 🔹 baseURL 설정
    const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    const baseURL = isLocal ? '../' : '/lunchbox/';

    // 🔹 배너 문구 랜덤 출력
    const messages = [
      "몸도 마음도 리셋하는 하루!",
      "현미밥 20% 할인중!!",
      "오늘도 건강한 식사",
      "당신의 식단을 AI가 책임집니다!",
      "오늘은 어떤 도시락이 좋을까요?",
      "따뜻한 도시락 어때요?",
      "AI 도시락 추천 서비스 지금 체험해보세요!",
      "더 똑똑하게 먹고 더 간편하게 살아가기!",
      "식사의 새로운 기준, 지금 바로 시작!",
      "“더 건강한 식사를, 더 편리하게”"
    ];
    const bannerText = document.getElementById("banner-text-content");
    if (bannerText) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      bannerText.textContent = messages[randomIndex];
    }

    // 🔹 언어 선택
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

    // 🔹 로그인 상태에 따른 메뉴 표시
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

    // 🔹 보호된 링크 처리
    const protectedLinks = [
      `a[href="${baseURL}html/mypage.html"]`,
      `a[href="${baseURL}html/cart.html"]`,
      `a[href="${baseURL}html/wishlist.html"]`
    ];

    protectedLinks.forEach(selector => {
      const link = document.querySelector(selector);
      if (link) {
        link.addEventListener("click", function (e) {
          if (!isLoggedIn) {
            e.preventDefault();
            alert("로그인이 필요합니다.");
            window.location.href = `${baseURL}html/login.html?redirect=${encodeURIComponent(location.pathname)}`;
          }
        });
      }
    });
  });

// 🔹 로그아웃 함수
function logout() {
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '../' : '/lunchbox/';

  localStorage.clear();
  alert("로그아웃 되었습니다.");
  window.location.href = `${baseURL}index.html`;
}
