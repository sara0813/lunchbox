fetch("partials/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    const baseURL = isLocal ? '../' : '/lunchbox/';
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const instaLink = document.getElementById("instagramLink");
    if (instaLink) {
      instaLink.addEventListener("click", function (e) {
        e.preventDefault(); // 실제 링크 이동 막기
        alert("아직 인스타그램 계정이 없습니다.");
      });
    }

    const protectedLinks = [
      `a[href="${baseURL}html/mypage.html"]`,
      `a[href="${baseURL}html/cart.html"]`,
      `a[href="${baseURL}html/wishlist.html"]`
    ];

    protectedLinks.forEach(selector => {
      const link = document.querySelector(`#footer ${selector}`);
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
