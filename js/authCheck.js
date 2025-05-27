document.addEventListener("DOMContentLoaded", function () {
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '../' : '/lunchbox/';
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // 🔹 AI 추천 배너 클릭
  const aiBanner = document.getElementById("ai-banner");
  if (aiBanner) {
    aiBanner.addEventListener("click", function (e) {
      if (!isLoggedIn) {
        e.preventDefault();
        alert("로그인이 필요합니다.");
        window.location.href = `${baseURL}html/login.html?redirect=${encodeURIComponent(location.pathname)}`;
      }
    });
  }

  // 🔹 보호된 링크들 (마이페이지, 장바구니, 관심목록)
  const protectedSelectors = [
    'a[href$="mypage.html"]',
    'a[href$="cart.html"]',
    'a[href$="wishlist.html"]'
  ];

  protectedSelectors.forEach(selector => {
    setTimeout(() => {
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
    }, 200);
  });
});
